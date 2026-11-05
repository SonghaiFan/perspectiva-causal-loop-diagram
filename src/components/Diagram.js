import { useState, useEffect, useRef, useCallback } from "react";
import cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import fcose from "cytoscape-fcose";
import { graphStyles } from "@/config/graphStyling";
import { fcoseLayoutConfig } from "@/config/graphLayout";
import { updateGraph } from "@/utils/graphUpdate";
import {
  getCounterparts,
  snapshotPositions,
  transitionToVersion,
} from "@/utils/versionTransition";
import Tooltip from "./Tooltip";

// Register the Cytoscape layouts
cytoscape.use(cola);
cytoscape.use(fcose);

const Graph = ({
  data1,
  data2,
  layout,
  focusVersion,
  viewMode,
  graphId,
  // synchronizing positions:
  onLayoutComplete,  // for graph-1 - send computed positions up
  forcedPositions,   // for graph-2 -positions to force onto the nodes
  // keeping versions consistent:
  dataset,
  version,
  anchors,
  positionCache,     // positions per dataset, layout and version, shared by all graphs
}) => {
  const cyRef = useRef(null);
  const cy = useRef(null);
  const anchoredLayout = useRef(null);
  const shown = useRef(null); // what the graph on screen currently displays
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Function to update tooltip state on node click
  const showTooltip = (node, event) => {
    setTooltipContent(node);
    setTooltipVisible(true);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  const cacheKey = `${dataset}:${layout.name}:${version}`;

  // Layout listeners outlive a version change, so they read the latest values
  const latest = useRef(null);
  latest.current = { cacheKey, data: data1 };
  const rememberPositions = useCallback(() => {
    if (cy.current && !cy.current.destroyed()) {
      positionCache.current[latest.current.cacheKey] = snapshotPositions(
        cy.current,
        latest.current.data
      );
    }
  }, [positionCache]);

  useEffect(() => {
    // Moving between versions of one dataset keeps the graph and animates it
    if (
      graphId === "single-graph" &&
      shown.current?.dataset === dataset &&
      shown.current.layout === layout &&
      shown.current.version !== version
    ) {
      hideTooltip();
      transitionToVersion(cy.current, data1, {
        counterparts: getCounterparts(anchors, version),
        positions: positionCache.current[cacheKey],
        onSettled: rememberPositions,
      });
      shown.current = { dataset, layout, version };
      return;
    }

    if (cy.current) {
      cy.current.destroy();
    }

    // graph-2 is placed from graph-1's positions, so its own layout must not
    // run: a slow one would finish later and overwrite them
    const knownPositions = positionCache.current[cacheKey];
    // A first render has no earlier state to move from, so nothing animates
    const initialLayout =
      graphId === "graph-2"
        ? { name: "grid" }
        : graphId === "single-graph" && knownPositions
        ? { name: "preset", positions: knownPositions, fit: true, padding: 30 }
        : { ...layout, animate: false };

    // Stays hidden until graph-1's positions arrive
    cyRef.current.style.visibility = graphId === "graph-2" ? "hidden" : "visible";

    cy.current = cytoscape({
      container: cyRef.current,
      elements: data1,
      style: graphStyles,
      layout: { name: "preset" },
    });

    cy.current.on("mouseover", "node", function (evt) {
      showTooltip(evt.target, evt.originalEvent);
    });
    cy.current.on("mousemove", "node", function (evt) {
      setTooltipPosition({
        x: evt.originalEvent.clientX,
        y: evt.originalEvent.clientY,
      });
    });
    cy.current.on("mouseout", "node", hideTooltip);

    // Add click event listener to nodes
    cy.current.on("click", "node", function (evt) {
      showTooltip(evt.target, evt.originalEvent);
      cy.current.elements().removeClass("selected");
      evt.target.addClass("selected");
    });
    cy.current.on("tap", (event) => {
      if (event.target === cy.current) hideTooltip();
    });
    cy.current.on("zoom pan drag", hideTooltip);

    // for graph-1 -> once layout stops, collect positions from all nodes
    if (graphId === "graph-1" && onLayoutComplete) {
      cy.current.once("layoutstop", () => {
        const positions = {};
        cy.current.nodes().forEach((node) => {
          positions[node.id()] = node.position();
        });
        console.log("Graph-1 computed positions:", positions);
        onLayoutComplete(positions);
      });
    }

    if (graphId !== "graph-2") {
      // Once transitioning, positions are recorded when a transition settles:
      // one that gets interrupted also fires layoutstop, with nodes mid-flight
      cy.current.on("layoutstop", () => {
        if (!cy.current.scratch("versionTransition")) rememberPositions();
      });
    }

    updateGraph(cy.current, data1, initialLayout);
    shown.current = { dataset, layout, version };
    // version and dataset change a render before data1 in 2-graph mode, so
    // listing them would rebuild the graph with stale data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data1, layout, graphId, onLayoutComplete]);

  useEffect(
    () => () => {
      cy.current.destroy();
      cy.current = null;
      shown.current = null;
    },
    []
  );

  // for graph-2 - pin anchored nodes where graph-1 put them and let fcose place
  // the nodes that only exist in this version around them
  useEffect(() => {
    if (graphId !== "graph-2" || !forcedPositions) return;

    const fixedNodeConstraint = Object.entries(forcedPositions)
      .filter(([nodeId]) => cy.current.getElementById(nodeId).length > 0)
      .map(([nodeId, position]) => ({ nodeId, position }));
    if (fixedNodeConstraint.length === 0) return;

    anchoredLayout.current?.stop();
    anchoredLayout.current = cy.current.layout({
      ...fcoseLayoutConfig,
      animate: false,
      fixedNodeConstraint,
    });
    anchoredLayout.current.one("layoutstop", rememberPositions);
    anchoredLayout.current.run();
    cyRef.current.style.visibility = "visible";
  }, [forcedPositions, graphId, rememberPositions]);

  return (
    <div className="flex h-full">
      <div ref={cyRef} className="flex-grow bg-gray-100 rounded-md p-6 overflow-auto"></div>
      <Tooltip
        element={tooltipContent}
        visible={tooltipVisible}
        placement={"top"}
        position={tooltipPosition}
      />
    </div>
  );
};

export default Graph;

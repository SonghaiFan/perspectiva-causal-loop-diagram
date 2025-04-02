import { useState, useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import fcose from "cytoscape-fcose";
import { graphStyles } from "@/config/graphStyling";
import { updateGraph } from "@/utils/graphUpdate";
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
  forcedPositions    // for graph-2 -positions to force onto the nodes
}) => {
  const cyRef = useRef(null);
  const cy = useRef(null);
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

  useEffect(() => {
    if (cy.current) {
      cy.current.destroy();
    }

    cy.current = cytoscape({
      container: cyRef.current,
      elements: data1,
      style: graphStyles,
      layout: layout,
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

    updateGraph(cy.current, data1, layout);

    return () => {
      cy.current.destroy();
    };
  }, [data1, layout, graphId, onLayoutComplete]);

  // for graph-2 - when forcedPositions are there, put them to nodes
  useEffect(() => {
    if (graphId === "graph-2" && forcedPositions && Object.keys(forcedPositions).length > 0) {
      console.log("Graph-2 applying forced positions:", forcedPositions);
      cy.current.batch(() => {
        Object.entries(forcedPositions).forEach(([nodeId, pos]) => {
          const node = cy.current.getElementById(nodeId);
          if (node && node.length > 0) {
            node.position(pos);
            console.log(`Graph-2 forced Node ${nodeId} position:`, node.position());
          }
        });
      });
      // preset layout to manually set positions
      cy.current.layout({ name: "preset" }).run();
      console.log("Graph-2 forced positions applied successfully.");
    }
  }, [forcedPositions, graphId]);

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

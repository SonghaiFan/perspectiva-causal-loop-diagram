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

const Graph = ({ data, layout, focusVersion }) => {
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
    if (!cy.current) return; // Wait for Cytoscape to initialize
    if (focusVersion) {
      cy.current.elements().removeClass("highlighted");
      cy.current.elements("node." + focusVersion).addClass("highlighted");
    } else {
      cy.current.elements().removeClass("highlighted");
    }
  }, [focusVersion]);

  // Initialize Cytoscape when the component mounts
  useEffect(() => {
    if (cy.current) {
      // Clean up existing listeners if they exist
      cy.current.removeListener("click", "node");
      cy.current.removeListener("mouseover", "node");
      cy.current.removeListener("mouseout", "node");
    }

    cy.current = cytoscape({
      container: cyRef.current,
      elements: data,
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
    });

    // Hide tooltip when clicking on the canvas
    cy.current.on("tap", function (event) {
      if (event.target === cy.current) {
        hideTooltip;
      }
    });

    // Hide tooltip when zooming or panning or dragging
    cy.current.on("zoom pan drag", hideTooltip);

    // Clean up when the component unmounts
    return () => {
      cy.current.destroy();
    };
  }, []);

  // Update the graph when the data changes
  useEffect(() => {
    updateGraph(cy.current, data, layout);
  }, [data, layout]);

  return (
    <div className="flex h-full">
      <div
        ref={cyRef}
        className="flex-grow bg-gray-100 rounded-md p-6 overflow-auto"
      ></div>
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

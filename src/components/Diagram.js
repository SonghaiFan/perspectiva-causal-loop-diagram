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

const Graph = ({data1, data2, layout, focusVersion, viewMode, graphId }) => {
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
      cy.current.destroy(); // Clean up previous instance to avoid issues
    }

    // Initialize the Cytoscape instance
    cy.current = cytoscape({
      container: cyRef.current,
      elements: data1,
      style: graphStyles,
      layout: layout,
    });
    // // Access a node using its ID
    // const nodeId = '30'; // replace with actual node id
    // const cyNode = cy.current.$(`#${nodeId}`);
    // console.log('Node:', cyNode);

    // Tooltip and mouse events
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

    // Click event for highlighting selected node
    cy.current.on("click", "node", function (evt) {
      showTooltip(evt.target, evt.originalEvent);
      cy.current.elements().removeClass("selected");
      evt.target.addClass("selected");
    });

    // Hide tooltip when clicking on the canvas
    cy.current.on("tap", function (event) {
      if (event.target === cy.current) {
        hideTooltip();
      }
    });

    // Hide tooltip on zoom, pan, drag
    cy.current.on("zoom pan drag", () => hideTooltip());

    // Clean up when the component unmounts
    return () => {
      cy.current.destroy();
    };
  }, [data1, layout]);


  const applyNodePositionsFromData = () => {
    if (cy && data2) {
      // Apply node positions from data2 to data1
      const data2Nodes = data2.nodes;
      data2Nodes.forEach(node => {
        const id = node.data.id;
        const position = node.position;

        // Find node in the graph and set its position from data2
        const cyNode = cy.current.$(`#${id}`);
        if (cyNode.length > 0) {
          cyNode.position(position);
          console.log(`After update - Node ${id} position:`, cyNode.position());
        }
      });
    }
  };

  // Update the graph when the data changes (be careful not to override positions)
  useEffect(() => {
    if (graphId == "graph-2") {
      console.log("Position changing")
      applyNodePositionsFromData();
      console.log("Position changed")
    }
  }, [focusVersion, cy]);

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

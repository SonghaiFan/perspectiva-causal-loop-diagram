import { useState, useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import fcose from "cytoscape-fcose";
import { graphStyles } from "../config/graphStyling";
import { layoutConfig } from "@/config/graphLayout";
import { updateGraph } from "@/utils/graphUpdate";

// Register the Cytoscape layouts
cytoscape.use(cola);
cytoscape.use(fcose);

const Graph = ({ data }) => {
  const cyRef = useRef(null);
  const cy = useRef(null);

  const handleVersionHover = (type) => {
    cy.current.elements().removeClass("highlighted");
    cy.current.elements("node." + type).addClass("highlighted");
  };

  // Initialize Cytoscape when the component mounts
  useEffect(() => {
    cy.current = cytoscape({
      container: cyRef.current,
      elements: data,
      style: graphStyles,
      layout: layoutConfig,
    });
  }, []);

  // Update the graph when the data changes
  useEffect(() => {
    updateGraph(cy.current, data);
  }, [data]);

  return (
    <div className="flex h-full">
      <div
        ref={cyRef}
        className="flex-grow bg-gray-100 rounded-md p-6 overflow-auto"
      ></div>
    </div>
  );
};

export default Graph;

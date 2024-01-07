import { useState, useEffect, useRef } from "react";
import cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import fcose from "cytoscape-fcose";
import cyDataSets from "../data/data";
import { graphStyles } from "../config/graphStyling";
import { fcoseLayoutConfig, colaLayoutConfig } from "@/config/graphLayout";
import Sidebar from "./Sidebar";
import { updateGraph } from "@/utils/graphUpdate";

// Register the Cytoscape layouts
cytoscape.use(cola);
cytoscape.use(fcose);

const Graph = () => {
  const cyRef = useRef(null);
  const [cy, setCy] = useState(null);
  const [data, setData] = useState(cyDataSets.final);

  // Handler for version clicks
  const handleVersionClick = (version) => {
    const newData = cyDataSets[version];
    setData(newData);
    console.log(newData.nodes);
  };

  const handleVersionHover = (type) => {
    cy.elements().removeClass("highlighted");
    cy.elements("node." + type).addClass("highlighted");
  };

  // Initialize Cytoscape when the component mounts
  useEffect(() => {
    if (!cyRef.current) return;

    const newCy = cytoscape({
      container: cyRef.current,
      elements: data,
      style: graphStyles,
      layout: colaLayoutConfig, // or fcoseLayoutConfig depending on your preference
    });

    setCy(newCy);

    // Clean up on unmount
    return () => newCy.destroy();
  }, []);

  // Update the graph when the data changes
  useEffect(() => {
    updateGraph(cy, data);
  }, [data]);

  return (
    <div className="flex h-full">
      <div
        ref={cyRef}
        className="flex-grow bg-gray-100 rounded-md p-6 overflow-auto"
      ></div>
      <Sidebar
        data={cyDataSets}
        onClick={handleVersionClick}
        onHover={handleVersionHover}
        onHoverOut={() => cy.elements().removeClass("highlighted")}
      />
    </div>
  );
};

export default Graph;

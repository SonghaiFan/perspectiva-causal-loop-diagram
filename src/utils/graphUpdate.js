import { colaLayoutConfig, fcoseLayoutConfig } from "@/config/graphLayout";

export function updateGraph(cy, newData) {
  if (!cy) return;

  // Step 1: Update - Update existing elements with new data or add them if they don't exist
  newData.nodes.forEach((nodeData) => {
    let node = cy.getElementById(nodeData.data.id);
    console.log(nodeData);
    if (node.length) {
      node.data(nodeData.data);
      node.classes(nodeData.classes); // Update classes
    } else {
      cy.add({
        group: "nodes",
        data: nodeData.data,
        classes: nodeData.classes,
      });
    }
  });

  newData.edges.forEach((edgeData) => {
    let edge = cy.getElementById(edgeData.data.id);
    if (edge.length) {
      // If the edge exists, update its data (no animation for edges)
      edge.data(edgeData.data);
    } else {
      cy.add({
        group: "edges",
        data: edgeData.data,
        classes: edgeData.classes,
      });
    }
  });

  //  Exit - Remove elements that are not in the new data
  cy.elements().forEach((ele) => {
    let foundInNodes = newData.nodes.some((n) => n.data.id === ele.id());
    let foundInEdges = newData.edges.some((e) => e.data.id === ele.id());
    if (!foundInNodes && !foundInEdges) {
      ele.animate({
        style: { opacity: 0.1 },
        duration: 500,
        complete: () => ele.remove(),
      });
    }
  });

  cy.layout(fcoseLayoutConfig).run();
}

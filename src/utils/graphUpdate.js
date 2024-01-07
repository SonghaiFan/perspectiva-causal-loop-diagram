import { layoutConfig } from "@/config/graphLayout";

export function updateGraph(cy, newData, layout) {
  const currentNodes = cy.nodes();
  const currentEdges = cy.edges();
  const { nodes: newNodes, edges: newEdges } = newData;

  const processElements = (currentElements, newElements) => {
    const currentIds = currentElements.map((ele) => ele.id());
    const newIds = newElements.map((ele) => ele.data.id);

    // Additions
    const toAdd = newElements.filter(
      (ele) => !currentIds.includes(ele.data.id)
    );
    cy.add(toAdd);

    // Updates
    newElements.forEach((ele) => {
      if (currentIds.includes(ele.data.id)) {
        cy.getElementById(ele.data.id).data(ele.data);
      }
    });

    // Deletions
    const toRemove = currentElements.filter(
      (ele) => !newIds.includes(ele.id())
    );
    cy.remove(toRemove);
  };

  processElements(currentNodes, newNodes);
  processElements(currentEdges, newEdges);

  cy.layout(layout).run();
}

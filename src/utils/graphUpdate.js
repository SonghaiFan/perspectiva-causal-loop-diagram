export function updateGraph(cy, newData, layout) {
  const currentNodes = cy.nodes();
  const currentEdges = cy.edges();
  const { nodes: newNodes, edges: newEdges } = newData;

  let removedElements = [];
  let layoutUpdated = false; // Flag to prevent repeated animations

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

    removedElements = removedElements.concat(toRemove);
  };

  processElements(currentNodes, newNodes);
  processElements(currentEdges, newEdges);

  cy.layout(layout).run();

  cy.on("layoutstop", () => {
    if (layoutUpdated) return; // Check if the layout was already updated
    layoutUpdated = true; // Set the flag

    let removePromises = removedElements.map((ele) => {
      return new Promise((resolve) => {
        ele.animate({
          style: { opacity: 0 },
          duration: 200,
          complete: () => {
            ele.remove();
            resolve();
          },
        });
      });
    });

    Promise.all(removePromises).then(() => {
      cy.animate({
        fit: {
          eles: cy.elements(), // fit to all remaining elements
          padding: 10, // padding around the elements
        },
        duration: 500, // duration of the animation
      });
    });
  });
}

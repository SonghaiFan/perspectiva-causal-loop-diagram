import { fcoseLayoutConfig } from "@/config/graphLayout";

const FADE_MS = 400;
const MOVE_MS = 800;

const centre = (points) => ({
  x: points.reduce((sum, { x }) => sum + x, 0) / points.length,
  y: points.reduce((sum, { y }) => sum + y, 0) / points.length,
});

/** Maps node ids of the shown version to their ids in `targetVersion`. */
export function getCounterparts(anchors = {}, targetVersion) {
  const counterparts = {};
  Object.entries(anchors).forEach(([v1Id, finalId]) => {
    const [from, to] = targetVersion === "final" ? [v1Id, finalId] : [finalId, v1Id];
    (counterparts[from] ||= []).push(to);
  });
  return counterparts;
}

/** Records where each node of `data` sits right now. */
export function snapshotPositions(cy, data) {
  return Object.fromEntries(
    data.nodes
      .map(({ data: { id } }) => [id, cy.getElementById(id)])
      .filter(([, node]) => node.length > 0)
      .map(([id, node]) => [id, { ...node.position() }])
  );
}

const fadeTo = (eles, opacity) =>
  eles.forEach((ele) =>
    ele.animate({ style: { opacity } }, { duration: FADE_MS })
  );

/**
 * Turns the graph on screen into `data` without rebuilding it. Nodes with a
 * counterpart travel from where it was, new ones fade in, the rest fade out.
 * `positions` are the target positions when known; otherwise counterparts stay
 * pinned and fcose places the new nodes around them.
 */
export function transitionToVersion(cy, data, { counterparts, positions, onSettled }) {
  const transition = {};
  const previous = cy.scratch("versionTransition");
  // Stopping fires layoutstop, which must not count as that transition settling
  cy.scratch("versionTransition", transition);
  previous?.layout.stop();
  // Leftovers stay for this transition to reuse or fade out. Removing them and adding
  // an element with the same id would strand its animations: Cytoscape's animation
  // pool tracks elements by id, so it would still hold the removed one.
  cy.elements().stop(true);

  const sources = {};
  cy.nodes().forEach((node) =>
    (counterparts[node.id()] || []).forEach((id) =>
      (sources[id] ||= []).push({ ...node.position() })
    )
  );

  const incomingIds = new Set(
    [...data.nodes, ...data.edges].map((element) => element.data.id)
  );
  const outgoing = cy.elements().filter((ele) => !incomingIds.has(ele.id()));
  const replaced = outgoing.nodes().filter((node) => counterparts[node.id()]);

  const added = [];
  cy.batch(() => {
    const addOrUpdate = (element, group, json) => {
      const existing = cy.getElementById(element.data.id);
      if (existing.length > 0) {
        existing.data(element.data);
        existing.classes(element.classes || "");
        existing.removeStyle("opacity");
      } else {
        added.push(cy.add({ ...element, group, ...json }));
      }
    };

    data.nodes.forEach((node) => {
      const { id } = node.data;
      const start = sources[id] ? centre(sources[id]) : positions?.[id];
      addOrUpdate(node, "nodes", {
        position: start || { x: 0, y: 0 },
        style: sources[id] ? {} : { opacity: 0 },
      });
    });
    data.edges.forEach((edge) =>
      addOrUpdate(edge, "edges", { style: { opacity: 0 } })
    );
    replaced.style("opacity", 0);
  });

  const incoming = cy.elements().filter((ele) => incomingIds.has(ele.id()));
  const faded = cy
    .collection(added.map((ele) => ele[0]))
    .filter((ele) => ele.isEdge() || !sources[ele.id()]);

  // New nodes start beside their neighbours rather than at the origin
  if (!positions) {
    faded.nodes().forEach((node) => {
      const placed = node
        .neighborhood("node")
        .filter((neighbour) => !faded.has(neighbour));
      if (placed.length > 0) node.position(centre(placed.map((n) => n.position())));
    });
  }

  fadeTo(outgoing, 0);
  fadeTo(faded, 1);

  // Interrupted animations never complete, so cleaning up cannot rely on them
  setTimeout(() => {
    if (!cy.destroyed() && cy.scratch("versionTransition") === transition) {
      outgoing.remove();
      faded.removeStyle("opacity");
    }
  }, FADE_MS + 50);

  const pinned = new Map();
  Object.entries(sources).forEach(([nodeId, points]) => {
    const position = centre(points);
    const spot = `${position.x},${position.y}`;
    // A node split in two would pin both halves to one spot
    if (incomingIds.has(nodeId) && !pinned.has(spot)) {
      pinned.set(spot, { nodeId, position });
    }
  });

  transition.layout = incoming.layout(
    positions
      ? {
          name: "preset",
          positions,
          animate: true,
          animationDuration: MOVE_MS,
          animationEasing: "ease-in-out",
          fit: true,
          padding: 30,
        }
      : {
          ...fcoseLayoutConfig,
          animationDuration: MOVE_MS,
          fixedNodeConstraint: [...pinned.values()],
        }
  );
  transition.layout.one("layoutstop", () => {
    if (cy.scratch("versionTransition") === transition) onSettled();
  });
  transition.layout.run();
}

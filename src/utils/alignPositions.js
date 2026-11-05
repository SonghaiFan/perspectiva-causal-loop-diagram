/**
 * Converts positions keyed by left-graph node id into positions keyed by
 * right-graph node id. Without anchors, ids are assumed to match. When several
 * left nodes merge into one right node, it sits at their centre.
 */
export function alignPositions(positions, anchors = {}) {
  const grouped = {};
  Object.entries(positions).forEach(([id, position]) => {
    const targetId = anchors[id] ?? id;
    (grouped[targetId] ||= []).push(position);
  });

  return Object.fromEntries(
    Object.entries(grouped).map(([id, group]) => [
      id,
      {
        x: group.reduce((sum, { x }) => sum + x, 0) / group.length,
        y: group.reduce((sum, { y }) => sum + y, 0) / group.length,
      },
    ])
  );
}

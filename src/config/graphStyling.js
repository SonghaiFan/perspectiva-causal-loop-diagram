export const graphStyles = [
  {
    selector: "node",
    style: {
      shape: "round-rectangle",
      width: "label",
      height: "label",
      padding: "5px",
      "background-color": "#fbbf24",
      "border-color": "#f8fafc",
      "border-width": "1px",
      label: "data(label)",
      "text-wrap": "wrap",
      "text-max-width": "50px",
      "text-valign": "center",
      "text-halign": "center",
      "font-size": "6px",
    },
  },
  {
    selector: "node.highlighted",
    style: {
      color: "#ffffff",
      "background-color": "#ff0000",
    },
  },
  {
    selector: "node.selected",
    style: {
      "border-color": "#000",
      "border-width": "2px",
    },
  },
  {
    selector: "edge",
    style: {
      width: 2,
      "curve-style": "unbundled-bezier",
      "line-color": "#AAA", // Grey line color
      "target-arrow-color": "#AAA", // Grey arrow color
      "target-arrow-shape": "triangle",
      "arrow-scale": 0.8,
      "control-point-distances": [20, -20], // Use positive and negative values to alternate curves
      "control-point-weights": [0.5], // Adjust this to control the curvature
      label: "data(label)",
      // "edge-text-rotation": "autorotate",
      // add border to edge label
      "text-outline-color": "#fff",
      "text-outline-width": "1px",
    },
  },
  {
    selector: 'edge[type="negative"]',
    style: {
      "line-style": "dashed",
      "curve-style": "unbundled-bezier",
      "control-point-distances": [-20, 20],
      "control-point-weights": [0.5],
    },
  },
];

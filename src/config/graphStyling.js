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
      "background-color": "#f66667",
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
    selector: 'node[type = "clarification"]',
    style: {
      "background-color": "#E97451",
    }
  },
  {
    selector: 'node[type = "added"]',
    style: {
      "background-color": "#9fc5e8",
    }
  },

  {
    selector: "edge",
    style: {
      width: 2,
      "curve-style": "unbundled-bezier",
      "line-color": "#808080",
      "target-arrow-color": "#808080",
      "target-arrow-shape": "triangle",
      "arrow-scale": 0.8,
      "control-point-distances": [-20, 20], // Use positive and negative values to alternate curves
      "control-point-weights": [0.5], // Adjust this to control the curvature
      label: "data(label)",
      // "edge-text-rotation": "autorotate",
      // add border to edge label
      "text-outline-color": "#fff",
      "text-outline-width": "1px",
    },
  },

  {
    selector: 'edge[type="clarification"]',
    style: {
      "line-color": "#E97451",
      "target-arrow-color": "#E97451",
    },
  },

  {
    selector: 'edge[type="conflict"]',
    style: {
      //"line-style": "dashed",
      "line-color": "#00FFFF",
      "target-arrow-color": "#00FFFF",
      "curve-style": "unbundled-bezier",
      "control-point-distances": [-20, 20],
      "control-point-weights": [0.5],
    },
  },

  {
    selector: 'edge[type="negative"]',
    style: {
      //"line-style": "dashed",
      "line-color": "#808080",
      "target-arrow-color": "#808080",
      "curve-style": "unbundled-bezier",
      "control-point-distances": [-20, 20],
      "control-point-weights": [0.5],
    },
  },

];

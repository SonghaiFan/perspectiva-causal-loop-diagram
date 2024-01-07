export const colaLayoutConfig = {
  name: "cola",
  nodeSpacing: 5,
  edgeLengthVal: 45,
  randomize: false,
  maxSimulationTime: 1500,
  fit: true,
  padding: 30,
};

export const fcoseLayoutConfig = {
  name: "fcose",
  nodeRepulsion: 80000,
  idealEdgeLength: 50,
  edgeElasticity: 0.1,
  gravity: 0.4,
  numIter: 2000,
  animate: true,
  animationDuration: 500,
  fit: true,
  avoidOverlap: true,
  nodeDimensionsIncludeLabels: true,
  padding: 20,
};

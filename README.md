# Perspectiva: Causal Loop Diagram (CLD) Comparison Tool

**Perspectiva** is a visual analytics platform for **comparing and documenting versions of Causal Loop Diagrams (CLDs)**. It enhances transparency in collaborative modelling by enabling layout-synchronised visual comparisons between different versions of system models.

> **TL;DR:** Based on dataset provided, select one or two versions, and Perspectiva anchors the layout of the second diagram to the first—making structural changes immediately visible.

## Links

- **VIS 2025 Paper**  
  _Out of the Loop: Enhancing Documentation and Transparency in Collaborative Causal Loop Diagrams to Capture Multiple Perspectives_  
  [Link to be added]

- **Connected COMPASS Paper**  
  [COMPASS Paper title here] \
  [Link to be added]


## Overview of repository

This repository contains the **web interface** for Perspectiva, implemented in **Next.js + React** with **Cytoscape.js** under the hood (refer to the `Graph`/`Diagram` component).

The main page `pages/index.tsx` is responsible for:

- Loading the appropriate **dataset** and **version(s)** from `allCyDataSets`.
- Letting the user choose:
  - Which **dataset** to view,
  - Which **versions** to compare (e.g. `V1` vs `final`),
  - Which **graph layout** to use (e.g. `fcose`),
  - Whether to view **1 graph** or **2 graphs**.
- Computing node positions from a **baseline version** (left graph, usually `V1`) and then **forcing those positions** on the right-hand graph (e.g. `final`), so that shared nodes appear in the same place in both diagrams.

Core features as listed in **VIS 2025 Paper** Paper:

- **R1 – Support navigation between individual CLDs**  
  The page renders **two synchronised graphs** (`graph-1` and `graph-2`) and allows quick switching between versions and view modes (`1 Graph` vs `2 Graphs`).
- **R2 – Support the depiction of changes and conflicts**  
  By enforcing a **shared layout** across versions, added/removed/changed variables and links can be visually highlighted (e.g. via colour, line style) in `Diagram.tsx` and the Cytoscape styles.
- **R3 – Document the provenance of terminology**  
  Node metadata (e.g. original term, standardised label, stakeholder group) can be passed via `data1`/`data2` and surfaced in the graph component (e.g. hover pop-ups).
- **R4 – Document participant contributions in merged CLDs**  
This interface is the base for representing merged C-CLDs, contributor groups, and contribution counts via encodings and legends.


## Code Structure

All application code lives under `src/`:

```text
src/
  components/
    DatasetSelector.js     # Choosing dataset
    Diagram.js             # CLD view 
    Header.js              # Title bar
    LayoutSelector.js      # Choosing graph layout
    Legend.js
    Sidebar.js             # Selectors and view controls
    Tooltip.js             # Hover tooltip
    VersionSelector.js     # Switching between CLD

  config/
    colorSchema.js
    graphLayout.js
    graphStyling.js

  data/
    data.js
    new_data.js

  pages/
    api/
    _app.js
    _document.js
    index.js

  styles/
  utils/
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

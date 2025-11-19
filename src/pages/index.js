import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Graph from "@/components/Diagram";
import { allCyDataSets } from "../data/new_data";
import { layoutConfigs } from "@/config/graphLayout";
import cloneDeep from "lodash/cloneDeep";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { dataset: queryDataset, debug: debug } = router.query;

  /**
   * Default dataset (from URL query if available,
   * otherwise first dataset in the collection).
   */
  const defaultDataset = queryDataset || Object.keys(allCyDataSets)[0];

  /**
   * Application state
   * - dataset: which dataset is selected
   * - version1 / version2: versions compared in two-graph mode
   * - singleVersion: version shown in one-graph mode
   * - focusVersion: version highlighted on hover
   * - layout: selected layout type
   * - layoutConfig: actual Cytoscape config for the chosen layout
   * - viewMode: "1 Graph" or "2 Graphs"
   * - v1Positions: stores node positions computed from version1 (baseline)
   */
  const [dataset, setDataset] = useState(defaultDataset);
  const [version1, setVersion1] = useState("V1");
  const [version2, setVersion2] = useState("final");
  const [singleVersion, setSingleVersion] = useState(version1);
  const [focusVersion, setFocusVersion] = useState(null);
  const [layout, setLayout] = useState("fcose");
  const [layoutConfig, setLayoutConfig] = useState(layoutConfigs[layout]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("2 Graphs");

  // Stores positions computed from the baseline version (V1)
  const [v1Positions, setV1Positions] = useState({});

  /**
   * Utility function:
   * Returns a deep-cloned version of the requested dataset + version.
   * Ensures Cytoscape never mutates the original dataset.
   */
  const getCyData = (dataset, version) =>
    cloneDeep(allCyDataSets[dataset][version]);

  // Graph data for left (data1) and right (data2) diagrams
  const [data1, setData1] = useState(getCyData(dataset, version1));
  const [data2, setData2] = useState(getCyData(dataset, version2));

  // Options used in selectors
  const datasetItems = Object.keys(allCyDataSets);
  const versionItems = Object.keys(allCyDataSets[dataset]);
  const layoutTypes = Object.keys(layoutConfigs);

  /**
   * Load dataset + versions after router is ready.
   * Ensures query parameters (e.g., ?dataset=X) are handled correctly.
   */
  useEffect(() => {
    if (router.isReady) {
      const newDataset =
        queryDataset && allCyDataSets[queryDataset]
          ? queryDataset
          : defaultDataset;

      setDataset(newDataset);
      setData1(getCyData(newDataset, version1));
      setData2(getCyData(newDataset, version2));
      setLoading(false);
    }
  }, [router.isReady, queryDataset, defaultDataset, version1, version2]);

  /**
   * Ensure selected versions exist in the dataset.
   * If a dataset changes, reset versions to defaults (V1 + final).
   */
  useEffect(() => {
    const versionItems = Object.keys(allCyDataSets[dataset]);
    if (!versionItems.includes(version1)) {
      setVersion1("V1");
    }
    if (!versionItems.includes(version2)) {
      setVersion2("final");
    }
  }, [dataset, version1, version2]);

  /**
   * Update graph data when:
   * - dataset changes
   * - versions change
   * - user switches between 1-graph and 2-graph view
   * - layout changes
   *
   * In 1-graph mode: only one version is shown.
   * In 2-graph mode: version1 and version2 are shown side by side.
   */
  useEffect(() => {
    if (viewMode === "1 Graph") {
      setData1(getCyData(dataset, singleVersion));
    } else {
      setData1(getCyData(dataset, version1));
      setData2(getCyData(dataset, version2));
    }

    setLayoutConfig(layoutConfigs[layout]);
  }, [dataset, version1, version2, singleVersion, viewMode, layout]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex w-screen h-screen overflow-hidden">
      <div className="flex flex-grow flex-col p-4">
        <Header />

        {/* Main diagram area */}
        <div className="flex flex-grow flex-row gap-4">
          {viewMode === "1 Graph" ? (
            /**
             * 1-GRAPH MODE:
             * Only one version is shown, no layout anchoring required.
             */
            <div className="flex-1 border border-gray-300 h-full">
              <Graph
                key="single-graph"
                data1={data1}
                data2={data2}
                layout={layoutConfig}
                focusVersion={focusVersion}
                viewMode={viewMode}
                graphId="single-graph"
              />
            </div>
          ) : (
            /**
             * 2-GRAPH MODE:
             * Left graph computes the baseline layout (typically V1)
             * Right graph forces its nodes into the same positions
             * to allow version comparison.
             */
            <>
              <div className="flex-1 border border-gray-300 h-full">
                {/*  compute positions from V1 and pass them up */}
                <Graph
                  key="graph-1"
                  data1={data1}
                  data2={data2} // data2 is not used here for positions
                  layout={layoutConfig}
                  focusVersion={focusVersion}
                  viewMode={viewMode}
                  graphId="graph-1"
                  onLayoutComplete={setV1Positions}  // Collect positions from V1
                />
              </div>

              <div className="flex-1 border border-gray-300 h-full">
                {/* display final version and force positions from V1 */}
                <Graph
                  key="graph-2"
                  data1={data2}  // V2 data here
                  data2={data1}  // Not used in this instance
                  layout={layoutConfig}
                  focusVersion={focusVersion}
                  viewMode={viewMode}
                  graphId="graph-2"
                  forcedPositions={v1Positions} // Force positions computed from V1
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sidebar with dataset, version, layout, and view controls */}
      <Sidebar
        dataset={dataset}
        debug={debug}
        datasetItems={datasetItems}
        version={viewMode === "1 Graph" ? singleVersion : version1}
        versionItems={versionItems}
        data={data1}
        layout={layout}
        layoutTypes={layoutTypes}
        viewMode={viewMode}
        onDatasetChange={(dataset) => setDataset(dataset)}
        onVersionClick={(version) => {
          // Version selection behaves differently in 1-graph mode
          if (viewMode === "1 Graph") {
            setSingleVersion(version);
          } else {
            setVersion1(version);
          }
        }}
        onVersionHover={(version) => setFocusVersion(version)}
        onLayoutChange={(layout) => setLayout(layout)}
        onViewModeChange={(mode) => setViewMode(mode)}
      />
    </main>
  );
}

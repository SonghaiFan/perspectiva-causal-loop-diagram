import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Graph from "@/components/Diagram";
import { allCyDataSets } from "../data/data";
import { layoutConfigs } from "@/config/graphLayout";
import cloneDeep from "lodash/cloneDeep";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [dataset, setDataset] = useState(Object.keys(allCyDataSets)[0]);
  const [version, setVersion] = useState("final");
  const [focusVersion, setFocusVersion] = useState(null);
  const [layout, setLayout] = useState("cola");
  const [layoutConfig, setLayoutConfig] = useState(layoutConfigs[layout]);
  // Deep copy the data to avoid direct modification of original data
  const getCyData = (dataset, version) =>
    cloneDeep(allCyDataSets[dataset][version]);

  const [data, setData] = useState(getCyData(dataset, version));
  const datasetItems = Object.keys(allCyDataSets);
  const versionItems = Object.keys(allCyDataSets[dataset]);
  const layoutTypes = Object.keys(layoutConfigs);

  useEffect(() => {
    // Check if the selected version exists in the new dataset
    const versionItems = Object.keys(allCyDataSets[dataset]);
    if (!versionItems.includes(version)) {
      setVersion("final"); // Reset to default if version not found
    } else {
      setVersion(version); // Keep the current version if it exists in the new dataset
    }
  }, [dataset]);

  useEffect(() => {
    // Update data and layout configuration when dataset, version, or layout changes
    const updatedVersion = Object.keys(allCyDataSets[dataset]).includes(version)
      ? version
      : "final";
    setData(getCyData(dataset, updatedVersion));
    setLayoutConfig(layoutConfigs[layout]);
  }, [dataset, version, layout]);

  return (
    <main className="flex w-screen h-screen overflow-hidden">
      <div className="flex flex-grow flex-col p-4">
        {/* Title area */}
        <Header />
        {/* Diagram area */}
        <Graph data={data} layout={layoutConfig} focusVersion={focusVersion} />
      </div>

      {/* Sidebar */}
      <Sidebar
        dataset={dataset}
        datasetItems={datasetItems}
        version={version}
        versionItems={versionItems}
        data={data}
        layout={layout}
        layoutTypes={layoutTypes}
        onDatasetChange={(dataset) => setDataset(dataset)}
        onVersionClick={(version) => setVersion(version)}
        onVersionHover={(version) => setFocusVersion(version)}
        onLayoutChange={(layout) => setLayout(layout)}
      />
    </main>
  );
}

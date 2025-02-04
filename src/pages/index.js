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

  const defaultDataset = queryDataset || Object.keys(allCyDataSets)[0];

  console.log("defaultDataset", defaultDataset);
  const [dataset, setDataset] = useState(defaultDataset);
  const [version1, setVersion1] = useState("V1");
  const [version2, setVersion2] = useState("final");
  const [focusVersion, setFocusVersion] = useState(null);
  const [layout, setLayout] = useState("fcose");
  const [layoutConfig, setLayoutConfig] = useState(layoutConfigs[layout]);
  const [loading, setLoading] = useState(true);

  // Deep copy the data to avoid direct modification of original data
  const getCyData = (dataset, version) =>
    cloneDeep(allCyDataSets[dataset][version]);

  const [data1, setData1] = useState(getCyData(dataset, version1));
  const [data2, setData2] = useState(getCyData(dataset, version2));

  const datasetItems = Object.keys(allCyDataSets);
  const versionItems = Object.keys(allCyDataSets[dataset]);
  const layoutTypes = Object.keys(layoutConfigs);

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

  useEffect(() => {
    const versionItems = Object.keys(allCyDataSets[dataset]);
    if (!versionItems.includes(version1)) {
      setVersion1("V1");
    }
    if (!versionItems.includes(version2)) {
      setVersion2("final");
    }
  }, [dataset, version1, version2]);

  useEffect(() => {
    setData1(getCyData(dataset, version1));
    setData2(getCyData(dataset, version2));
    setLayoutConfig(layoutConfigs[layout]);
  }, [dataset, version1, version2, layout]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex w-screen h-screen overflow-hidden">
      <div className="flex flex-grow flex-col p-4">
        {/* Title area */}
        <Header />

        {/* Diagram area with two graphs side by side */}
        <div className="flex flex-grow flex-row gap-4">
          <div className="flex-1 border border-gray-300 h-full">
            <Graph data={data1} layout={layoutConfig} focusVersion={focusVersion} />
          </div>
          <div className="flex-1 border border-gray-300 h-full">
            <Graph data={data2} layout={layoutConfig} focusVersion={focusVersion} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        dataset={dataset}
        debug={debug}
        datasetItems={datasetItems}
        version={version1}
        versionItems={versionItems}
        data={data1}
        layout={layout}
        layoutTypes={layoutTypes}
        onDatasetChange={(dataset) => setDataset(dataset)}
        onVersionClick={(version) => setVersion1(version)}
        onVersionHover={(version) => setFocusVersion(version)}
        onLayoutChange={(layout) => setLayout(layout)}
      />
    </main>
  );
}

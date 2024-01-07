import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Graph from "@/components/Diagram";
import { cyDataSets } from "../data/data";
import { layoutConfig } from "@/config/graphLayout";
import cloneDeep from "lodash/cloneDeep";

import { useState, useEffect, useRef } from "react";
// Deep copy the data to avoid direct modification of original data
const getCyData = (key) => cloneDeep(cyDataSets[key]);

export default function Home() {
  const [data, setData] = useState(getCyData("final"));
  const [layout, setLayout] = useState(layoutConfig);

  const handleVersionClick = (version) => {
    setData(getCyData(version));
  };

  return (
    <main className="flex h-screen overflow-hidden">
      <div className="flex flex-grow flex-col p-4">
        {/* Title area */}
        <Header />
        {/* Diagram area */}
        <Graph data={data} layout={layout} />
      </div>

      {/* Sidebar */}
      <Sidebar dataSet={cyDataSets} data={data} onClick={handleVersionClick} />
    </main>
  );
}

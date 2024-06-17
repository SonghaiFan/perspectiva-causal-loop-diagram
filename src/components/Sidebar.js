import { useState } from "react";

import LayoutSelector from "./LayoutSelector";
import VersionSelector from "./VersionSelector";
import DatasetSelector from "./DatasetSelector";
import Legend from "./Legend";

const legendItems = [
  { label: "Relationship needs clarification", color: "#E97451" },
  { label: "Conflict with other participants", color: "#00FFFF" },
  { label: "Added", color: "#9fc5e8" },
];

const Sidebar = ({
  dataset,
  datasetItems,
  version,
  versionItems,
  data,
  layout,
  layoutTypes,
  onVersionClick,
  onVersionHover,
  onLayoutChange,
  onDatasetChange,
}) => {
  if (data.length == 0) return;

  return (
    <div className="w-[15%] p-4 h-full overflow-auto">
      <Legend legendItems={legendItems} />
      {/* 
      <DatasetSelector
        datasetItems={datasetItems}
        selectedDataset={dataset}
        onDatasetChange={onDatasetChange}
      /> */}

      <LayoutSelector
        layoutTypes={layoutTypes}
        selectedLayout={layout}
        onLayoutChange={onLayoutChange}
      />
      <VersionSelector
        versionItems={versionItems}
        selectedVersion={version}
        onVersionClick={onVersionClick}
        onVersionHover={onVersionHover}
      />

      <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
        <h4 className="text-lg font-semibold mb-2">Term List</h4>
        {data.nodes.map((nodes, i) => (
          <div
            key={i}
            className="items-center space-x-2 hover:cursor-pointer hover:bg-gray-100 p-1 rounded-md overflow-hidden overflow-ellipsis whitespace-nowrap"
          >
            <span className="w-4 h-4 rounded-full">{nodes.data.id}</span>{" "}
            {nodes.data.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

import { useState } from "react";

import LayoutSelector from "./LayoutSelector";
import VersionSelector from "./VersionSelector";
import DatasetSelector from "./DatasetSelector";
import Legend from "./Legend";

const Sidebar = ({
  dataset,
  debug,
  datasetItems,
  version,
  versionItems,
  data,
  layout,
  layoutTypes,
  viewMode,
  onVersionClick,
  onVersionHover,
  onLayoutChange,
  onDatasetChange,
  onViewModeChange,
}) => {
  if (data.length == 0) return;

  return (
    <div className="w-[15%] p-4 h-full overflow-auto">
      <Legend />

      {debug && (
        <DatasetSelector
          datasetItems={datasetItems}
          selectedDataset={dataset}
          onDatasetChange={onDatasetChange}
        />
      )}

      <LayoutSelector
        layoutTypes={layoutTypes}
        selectedLayout={layout}
        onLayoutChange={onLayoutChange}
      />

      {/* View Mode Selection */}
      <div className="bg-white border rounded-md p-2 mb-4 shadow-lg">
        <h4 className="text-lg font-semibold mb-2">View Mode</h4>
        <select
          value={viewMode}
          onChange={(e) => onViewModeChange(e.target.value)}
          className="w-full border rounded p-1"
        >
          <option value="1 Graph">1 Graph</option>
          <option value="2 Graphs">2 Graphs</option>
        </select>
      </div>

      {viewMode === "1 Graph" && (
        <VersionSelector
          versionItems={versionItems}
          selectedVersion={version}
          onVersionClick={onVersionClick}
          onVersionHover={onVersionHover}
        />
      )}

      <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
        <h4 className="text-lg font-semibold mb-2">Term List</h4>
        {data.nodes.map((nodes, i) => (
          <div
            key={i}
            className="items-center space-x-2 hover:cursor-pointer hover:bg-gray-100 p-1 rounded-md overflow-hidden overflow-ellipsis whitespace-nowrap"
          >
            <span className="w-4 h-4 rounded-full">{nodes.data.key}</span>{" "}
            {nodes.data.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

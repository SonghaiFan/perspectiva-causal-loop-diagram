import { useState } from "react";

const Sidebar = ({ dataSet, data, onClick, onHover, onHoverOut }) => {
  const versionItems = Object.keys(dataSet);

  if (data.length == 0) return;

  const nodeTypes = [...new Set(data.nodes.map((node) => node.classes))];

  return (
    <div className="w-64 p-4 ">
      <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
        <h4 className="text-lg font-semibold mb-2">Perspectiva</h4>
        {versionItems.map((version, i) => (
          <div
            key={i}
            className="flex items-center space-x-2 hover:cursor-pointer hover:bg-gray-100 p-1 rounded-md"
            onClick={() => onClick(version)}
          >
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <span>{version}</span>
          </div>
        ))}

        <div className="flex items-center space-x-2 border p-1 rounded-md mt-5">
          {nodeTypes.map((type, i) => (
            <div
              key={i}
              className="w-full h-fit text-center rounded hover:cursor-pointer hover:bg-gray-200"
              // onMouseEnter={() => onHover(type)}
              // onMouseLeave={onHoverOut}
            >
              <span>{type}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
        <h4 className="text-lg font-semibold mb-2">Perspectiva</h4>
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

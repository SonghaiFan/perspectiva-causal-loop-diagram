import { useState } from "react";

const LayoutSelector = ({ layoutTypes, selectedLayout, onLayoutChange }) => {
  return (
    <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
      <h4 className="text-lg font-semibold mb-2">Perspectiva</h4>
      <div className="flex items-center space-x-2 border p-1 rounded-md mt-5">
        {layoutTypes.map((type, i) => (
          <label
            key={i}
            className={`w-full h-fit text-center rounded hover:cursor-pointer ${
              selectedLayout === type ? "bg-gray-200" : "hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name="layout"
              value={type}
              checked={selectedLayout === type}
              onChange={() => onLayoutChange(type)}
              className="hidden" // Hide the default radio button
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LayoutSelector;

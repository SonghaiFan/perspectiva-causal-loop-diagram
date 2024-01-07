import { useState } from "react";

const DatasetSelector = ({
  datasetItems,
  selectedDataset,
  onDatasetChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDatasetChange = (value) => {
    onDatasetChange(value);
    setIsOpen(false);
  };

  return (
    <div className="bg-white border rounded-md p-2 mb-8 shadow-lg relative">
      <h4 className="text-lg font-semibold mb-2">Dataset</h4>
      <div className="w-full h-fit text-center rounded hover:cursor-pointer hover:bg-gray-100 relative">
        <div
          className="flex items-center justify-between w-full text-gray-700 px-4 py-2 bg-white rounded border cursor-pointer hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedDataset}</span>
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {isOpen && (
          <div className="absolute top-full w-full bg-white shadow-md mt-1 max-h-60 overflow-auto z-10 rounded-md">
            {datasetItems.map((dataset, i) => (
              <div
                key={i}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDatasetChange(dataset)}
              >
                {dataset}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DatasetSelector;

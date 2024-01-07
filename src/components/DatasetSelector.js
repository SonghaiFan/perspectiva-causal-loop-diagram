const DatasetSelector = ({
  datasetItems,
  selectedDataset,
  onDatasetChange,
}) => {
  return (
    <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
      <h4 className="text-lg font-semibold mb-2">Perspectiva</h4>
      <div className="flex items-center space-x-2 border p-1 rounded-md mt-5">
        <select
          value={selectedDataset}
          onChange={(e) => onDatasetChange(e.target.value)}
          className="w-full h-fit text-center rounded hover:cursor-pointer hover:bg-gray-100"
        >
          {datasetItems.map((dataset, i) => (
            <option key={i} value={dataset}>
              {dataset}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DatasetSelector;

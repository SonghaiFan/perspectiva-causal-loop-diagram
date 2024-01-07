const VersionSelector = ({ versionItems, onVersionClick, selectedVersion }) => {
  return (
    <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
      <h4 className="text-lg font-semibold mb-2">Perspectiva</h4>
      {versionItems.map((version, i) => (
        <label
          key={i}
          className="flex items-center space-x-2 hover:cursor-pointer hover:bg-gray-100 p-1 rounded-md"
        >
          <input
            type="radio"
            name="version"
            value={version}
            checked={selectedVersion === version}
            onChange={() => onVersionClick(version)}
            className="hidden" // Hide the default radio button
          />
          {version !== "final" ? (
            <>
              <div
                className={`w-4 h-4 rounded-full ${
                  selectedVersion === version ? "bg-yellow-400" : "bg-gray-400"
                }`}
              ></div>
              <span>{version}</span>
            </>
          ) : (
            <div
              className={`w-full h-fit text-center rounded border ${
                selectedVersion === version ? "bg-yellow-400" : ""
              }`}
            >
              <span>Final Version</span>
            </div>
          )}
        </label>
      ))}
    </div>
  );
};

export default VersionSelector;

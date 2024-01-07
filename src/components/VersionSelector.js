const VersionSelector = ({ versionItems, onVersionClick, selectedVersion }) => {
  return (
    <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
      <h4 className="text-lg font-semibold mb-2">Perspectiva</h4>
      {versionItems.map((version, i) => (
        <div
          key={i}
          className={`flex items-center space-x-2 hover:cursor-pointer hover:bg-gray-100 p-1 rounded-md
          ${version == "final" ? "border font-bold" : ""} `}
          onClick={() => onVersionClick(version)}
        >
          <div
            className={`w-4 h-4 rounded-full ${
              selectedVersion === version ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></div>
          <span className="truncate max-w-xs">
            {version
              .split("_")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default VersionSelector;

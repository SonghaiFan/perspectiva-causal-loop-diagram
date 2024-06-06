const VersionSelector = ({
  versionItems,
  onVersionClick,
  onVersionHover,
  selectedVersion,
}) => {
  return (
    <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
      <h4 className="text-lg font-semibold mb-2">Perspectiva</h4>
      {versionItems.map((version, i) => (
        <div
          key={i}
          className={`flex items-center space-x-2 hover:cursor-pointer hover:bg-gray-100 p-1 rounded-md
          ${version === "final" ? "border font-bold" : ""}`}
          onClick={() => onVersionClick(version)}
          onMouseEnter={() => onVersionHover(version)}
          onMouseLeave={() => onVersionHover(null)}
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
          {/* Add a rounded rect badge, default is V1, and indicate V2 if selected except for 'final' */}
          {version !== "final" && (
            <div
              className={`px-1 rounded-sm text-xs ${
                selectedVersion === version
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {selectedVersion == version || selectedVersion == "final"
                ? "V2"
                : "V1"}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VersionSelector;

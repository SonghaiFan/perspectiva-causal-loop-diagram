import { useState, useEffect, useRef, useMemo } from "react";

const Tooltip = ({ element, visible, position, placement }) => {
  const tooltipRef = useRef(null);
  const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });

  // Recalculate when tooltip becomes visible or the tooltip DOM element changes
  useEffect(() => {
    if (visible && tooltipRef.current) {
      setTooltipSize({
        width: tooltipRef.current.offsetWidth,
        height: tooltipRef.current.offsetHeight,
      });
    }
  }, [visible, tooltipRef.current]);

  // Ensure the useMemo hooks are always called
  const history = useMemo(
    () => (element ? element.data("history") || [] : []),
    [element]
  );

  const labelsWithGroups = useMemo(() => {
    return history.map((item, index) => `P${index + 1}: ${item.label}`);
  }, [history]);

  const contributionsByType = useMemo(() => {
    const contributions = {};
    history.forEach((item) => {
      const type = item.participant_type;
      contributions[type] = (contributions[type] || 0) + 1;
    });
    return contributions;
  }, [history]);

  if (!visible || !element) return null;

  const calculatePosition = () => {
    switch (placement) {
      case "right":
        return {
          top: position.y - tooltipSize.height / 2,
          left: position.x + 100,
        };
      case "left":
        return {
          top: position.y - tooltipSize.height / 2,
          left: position.x - tooltipSize.width - 100,
        };
      case "top":
        return {
          top: position.y - tooltipSize.height - 100,
          left: position.x - tooltipSize.width / 2,
        };
      case "bottom":
        return {
          top: position.y + 100,
          left: position.x - tooltipSize.width / 2,
        };
      default:
        return { top: position.y, left: position.x };
    }
  };
  // Get styles for positioning
  const tooltipStyle = calculatePosition();

  const label = element.data("label");

  // conver the first letter to uppercase
  const labelUpperCase = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <div
      ref={tooltipRef}
      style={tooltipStyle}
      className="absolute bg-white px-6 py-4 rounded-lg shadow-lg border border-gray-200 text-sm max-w-md"
    >
      <div className="text-gray-900">ID: {element.id()}</div>
      <div className="text-gray-700 mt-2 text-lg font-bold">
        {labelUpperCase}
      </div>
      {element.data("history").length > 0 && (
        <>
          <div className="mt-4">
            <strong className="text-gray-800 bg-yellow-400 rounded px-2 py-1">
              Terms
            </strong>
            <ul className="list-disc ml-4 mt-2 text-gray-700">
              {labelsWithGroups.map((label, index) => (
                <li key={index}>{label}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <strong className="text-white bg-red-400 rounded px-2 py-1">
              Contributions
            </strong>
            <ul className="list-disc ml-4 mt-2 text-gray-700">
              {Object.entries(contributionsByType).map(
                ([type, count], index) => (
                  <li key={index}>
                    <span className="font-bold">{count}</span> {` ${type}`}
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Tooltip;

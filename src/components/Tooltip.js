import { useState, useEffect, useRef } from "react";

const Tooltip = ({ element, visible, position, placement }) => {
  const tooltipRef = useRef(null);
  const [tooltipSize, setTooltipSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (tooltipRef.current) {
      setTooltipSize({
        width: tooltipRef.current.offsetWidth,
        height: tooltipRef.current.offsetHeight,
      });
    }
  }, [element]); // Recalculate when element changes

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

  const tooltipStyle = calculatePosition();

  return (
    <div
      ref={tooltipRef}
      style={tooltipStyle}
      className="absolute bg-white p-2 rounded-lg shadow-md border border-gray-200"
    >
      <div className="font-semibold text-gray-800">ID: {element.id()}</div>
      <div className="text-gray-600">Label: {element.data("label")}</div>
      <div className="text-gray-500 text-sm">Classes: {element.classes()}</div>
    </div>
  );
};

export default Tooltip;

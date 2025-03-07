import { colorSchema } from "@/config/colorSchema";

const Legend = () => {
  return (
    <div className="bg-white border rounded-md p-2 mb-8 shadow-lg">
      <h4 className="text-lg font-semibold mb-2">Legend</h4>
      <div className="space-y-4">
        {colorSchema.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div
              className="w-5 h-5 rounded-sm"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-gray-600 text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;

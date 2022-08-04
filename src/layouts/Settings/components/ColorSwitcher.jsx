import React, { useState } from "react";
import { useTheme } from "../../../context/themeContext";
import { CustomColorSelector } from "./CustomColorSelector";

export function ColorSwitcher() {
  const { mainColor, setMainColor } = useTheme();
  const [customColorSelected, setCustomColorSelected] = useState(false);

  const mainColors = [
    { name: "Cyan", value: "#06b6d4" },
    { name: "Teal", value: "#14b8a6" },
    { name: "Emerald", value: "#10b981" },
    { name: "Amber", value: "#f59e0b" },
    { name: "Red", value: "#ef4444" },
    { name: "Fuchsia", value: "#d946ef" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="text-xl font-light">Main color</div>
      <div className="flex flex-wrap gap-3">
        {mainColors.map((color) => (
          <label key={color.value}>
            <input
              type={"radio"}
              className="peer hidden"
              name="main-color"
              checked={color.value === mainColor}
              onChange={(e) => {
                setMainColor(color.value);
                setCustomColorSelected(false);
              }}
            />
            <div
              className="w-12 h-12 rounded-full peer-checked:ring dark:peer-checked:ring-white peer-checked:ring-dark"
              style={{ backgroundColor: color.value }}
            ></div>
          </label>
        ))}
        <CustomColorSelector
          customColorSelected={customColorSelected}
          setCustomColorSelected={setCustomColorSelected}
        />
      </div>
    </div>
  );
}

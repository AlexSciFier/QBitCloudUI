import { PencilIcon } from "@heroicons/react/outline";
import React from "react";
import { useTheme } from "../../../context/themeContext";

export function CustomColorSelector({
  setCustomColorSelected,
  customColorSelected,
}) {
  const { mainColor, setMainColor } = useTheme();
  return (
    <label className="relative">
      <input
        type={"color"}
        value={mainColor}
        className="hidden"
        onChange={(e) => {
          setCustomColorSelected(true);
          if (customColorSelected) {
            setMainColor(e.target.value);
          }
        }}
      ></input>
      <input
        type={"radio"}
        name="main-color"
        className="hidden peer"
        checked={customColorSelected}
        readOnly={true}
      ></input>
      <div
        className="w-12 h-12 rounded-full peer-checked:ring dark:ring-white ring-black"
        style={{ backgroundColor: mainColor }}
      ></div>
      <PencilIcon className="w-6 h-6 absolute top-3 left-3 text-white" />
    </label>
  );
}

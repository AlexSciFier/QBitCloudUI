import { MoonIcon, PencilIcon } from "@heroicons/react/outline";
import SunIcon from "@heroicons/react/outline/SunIcon";
import React, { useState } from "react";
import { useTheme } from "../../context/themeContext";

export default function Theme() {
  return (
    <div className="flex flex-col gap-3">
      <ThemeSwitcher />
      <ColorSwitcher />
    </div>
  );
}

function ColorSwitcher() {
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
      <div className="grid grid-cols-6 gap-3">
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
          ></input>
          <div
            className="w-12 h-12 rounded-full peer-checked:ring dark:ring-white ring-black"
            style={{ backgroundColor: mainColor }}
          ></div>
          <PencilIcon className="w-6 h-6 absolute top-3 left-3 text-white" />
        </label>
      </div>
    </div>
  );
}

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <label className="cursor-pointer flex items-center gap-1">
      <div className="flex border border-light dark:border-neutral/30 rounded-full p-1">
        <input
          className="hidden peer"
          type={"checkbox"}
          defaultChecked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        ></input>
        <SunIcon className="w-5 h-5 text-amber transition peer-checked:translate-x-full peer-checked:opacity-0 opacity-100" />
        <MoonIcon className="w-5 h-5 text-blue transition -translate-x-full peer-checked:translate-x-0 peer-checked:opacity-100 opacity-0" />
      </div>
      <div>Switch theme</div>
    </label>
  );
}

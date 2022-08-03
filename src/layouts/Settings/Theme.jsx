import { MoonIcon } from "@heroicons/react/outline";
import SunIcon from "@heroicons/react/outline/SunIcon";
import React from "react";
import { SelectInput } from "../../components/SelectInput";
import { useTheme } from "../../context/themeContext";

export default function Theme() {
  const { mainColor, setMainColor, secondaryColor, setSecondaryColor } =
    useTheme();
  const mainColors = [
    { name: "Cyan", value: "#06b6d4" },
    { name: "Teal", value: "#14b8a6" },
    { name: "Emerald", value: "#10b981" },
    { name: "Amber", value: "#f59e0b" },
    { name: "Red", value: "#ef4444" },
    { name: "Fuchsia", value: "#d946ef" },
  ];
  const secondaryColors = [
    { name: "Cyan", value: "#22d3ee" },
    { name: "Teal", value: "#2dd4bf" },
    { name: "Emerald", value: "#34d399" },
    { name: "Amber", value: "#fbbf24" },
    { name: "Red", value: "#f87171" },
    { name: "Fuchsia", value: "#e879f9" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <ThemeSwitcher />
      <div>
        <SelectInput
          items={mainColors}
          title="Main color"
          selectedIndex={mainColors.map((e) => e.value).indexOf(mainColor)}
          onSelect={(e) => setMainColor(e.target.value)}
        />
        <SelectInput
          items={secondaryColors}
          title="Additional color"
          selectedIndex={secondaryColors
            .map((e) => e.value)
            .indexOf(secondaryColor)}
          onSelect={(e) => setSecondaryColor(e.target.value)}
        />
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

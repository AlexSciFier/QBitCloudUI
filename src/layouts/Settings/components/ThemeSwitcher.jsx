import { MoonIcon } from "@heroicons/react/outline";
import SunIcon from "@heroicons/react/outline/SunIcon";
import React from "react";
import { useTheme } from "../../../context/themeContext";

export function ThemeSwitcher() {
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

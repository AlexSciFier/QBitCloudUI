import React from "react";
import { ColorSwitcher } from "./components/ColorSwitcher";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { InterfaceSettings } from "./components/InterfaceSettings";

export default function Theme() {
  return (
    <div className="flex flex-col gap-3">
      <ThemeSwitcher />
      <ColorSwitcher />
      <InterfaceSettings />
    </div>
  );
}

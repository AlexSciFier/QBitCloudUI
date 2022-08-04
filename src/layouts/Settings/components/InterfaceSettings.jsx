import React from "react";
import { CheckInput } from "../../../components/CheckInput";
import { useTheme } from "../../../context/themeContext";
import SettingsSubgroup from "../SettingsSubgroup";

export function InterfaceSettings() {
  const { leftPanelSettings, setLeftPanelSettings } = useTheme();
  function settingChangeHadler(e) {
    setLeftPanelSettings((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  }
  return (
    <div>
      <SettingsSubgroup title={"Left panel"}>
        <CheckInput
          defaultChecked={leftPanelSettings.showSpeedGraph}
          name="showSpeedGraph"
          onChange={settingChangeHadler}
          title={"Show speed graph"}
        />
        <CheckInput
          defaultChecked={leftPanelSettings.showCurentSpeedValues}
          name="showCurentSpeedValues"
          onChange={settingChangeHadler}
          title={"Show curent speed values"}
        />
        <CheckInput
          defaultChecked={leftPanelSettings.showAllTimeDataTransfer}
          name="showAllTimeDataTransfer"
          onChange={settingChangeHadler}
          title={"Show all-time data transfer"}
        />
        <CheckInput
          defaultChecked={leftPanelSettings.showFreeSpace}
          name="showFreeSpace"
          onChange={settingChangeHadler}
          title={"Show free space"}
        />
      </SettingsSubgroup>
    </div>
  );
}

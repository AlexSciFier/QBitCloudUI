import React, { useEffect } from "react";
import { useGlobalInfo } from "../../../context/globalInfoContext";
import { useTheme } from "../../../context/themeContext";
import { ConnectionStatus } from "./ConnectionStatus";
import { FreeSpace } from "./FreeSpace";
import { GlobalSpeedChart } from "./GlobalSpeedChart";
import { SpeedIndicator } from "./SpeedIndicator";
import { TotalDownloaded } from "./TotalDownloaded";

export default function GlobalInfo() {
  const { updateGlobalInfo } = useGlobalInfo();
  const { leftPanelSettings } = useTheme();
  useEffect(() => {
    updateGlobalInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <ConnectionStatus />
      {leftPanelSettings.showSpeedGraph && <GlobalSpeedChart />}
      {leftPanelSettings.showCurentSpeedValues && <SpeedIndicator />}
      {leftPanelSettings.showAllTimeDataTransfer && <TotalDownloaded />}
      {leftPanelSettings.showFreeSpace && <FreeSpace />}
    </div>
  );
}

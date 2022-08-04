import React, { useEffect } from "react";
import { useGlobalInfo } from "../../../context/globalInfoContext";
import { ConnectionStatus } from "./ConnectionStatus";
import { FreeSpace } from "./FreeSpace";
import { GlobalSpeedChart } from "./GlobalSpeedChart";
import { SpeedIndicator } from "./SpeedIndicator";
import { TotalDownloaded } from "./TotalDownloaded";

export default function GlobalInfo() {
  const { updateGlobalInfo } = useGlobalInfo();
  useEffect(() => {
    updateGlobalInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <ConnectionStatus />
      <GlobalSpeedChart />
      <SpeedIndicator />
      <TotalDownloaded />
      <FreeSpace />
    </div>
  );
}

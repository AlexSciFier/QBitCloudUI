import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/outline";
import React from "react";
import { useGlobalInfo } from "../../../context/globalInfoContext";
import { toReadableSize, toReadableSpeed } from "../../../utils/helpers";
import { StatusCard } from "./StatusCard";

export function SpeedIndicator() {
  const { globalInfo } = useGlobalInfo();
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <StatusCard
          icon={<ArrowSmDownIcon />}
          value={toReadableSpeed(globalInfo?.dl_info_speed || 0)}
        />
        <StatusCard
          icon={<ArrowSmDownIcon />}
          value={toReadableSize(globalInfo?.dl_info_data || 0)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <StatusCard
          icon={<ArrowSmUpIcon />}
          value={toReadableSpeed(globalInfo?.up_info_speed || 0)}
        />
        <StatusCard
          icon={<ArrowSmUpIcon />}
          value={toReadableSize(globalInfo?.up_info_data || 0)}
        />
      </div>
    </div>
  );
}

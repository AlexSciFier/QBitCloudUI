import { BanIcon, ExclamationIcon, LinkIcon } from "@heroicons/react/outline";
import React from "react";
import { useGlobalInfo } from "../../../context/globalInfoContext";

export function ConnectionStatus() {
  const { globalInfo } = useGlobalInfo();
  let statusMap = {
    connected: { icon: <LinkIcon />, color: "text-green", name: "connected" },
    firewalled: {
      icon: <ExclamationIcon />,
      color: "text-amber",
      name: "firewalled",
    },
    disconnected: {
      icon: <BanIcon />,
      color: "text-red",
      name: "disconnected",
    },
  };
  let currentStatus =
    statusMap[globalInfo?.connection_status || "disconnected"];
  return (
    <div className="flex gap-1 items-center">
      <div className={`w-5 h-5 ${currentStatus.color}`}>
        {currentStatus.icon}
      </div>
      <div className="capitalize flex-1">{currentStatus.name}</div>
      <div>DHT {globalInfo?.dht_nodes} nodes</div>
    </div>
  );
}

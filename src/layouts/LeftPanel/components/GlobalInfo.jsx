import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  BanIcon,
  ExclamationIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useGlobalInfo } from "../../../context/globalInfoContext";
import { toReadableSize, toReadableSpeed } from "../../../utils/helpers";
import Chart from "react-apexcharts";

export default function GlobalInfo() {
  const { updateGlobalInfo } = useGlobalInfo();
  useEffect(() => {
    updateGlobalInfo();
  }, []);

  return (
    <div>
      <ConnectionStatus />
      <GlobalSpeedChart />
      <SpeedIndicator />
    </div>
  );
}

function GlobalSpeedChart() {
  const { globalInfo } = useGlobalInfo();
  let dlspeed = globalInfo?.dl_info_speed || 0;
  let upspeed = globalInfo?.up_info_speed || 0;

  const options = {
    colors: ["#ef4444", "#22c55e"],
    chart: {
      animations: {
        dynamicAnimation: {
          enabled: false,
        },
      },
      type: "area",
      height: "100%",
      toolbar: {
        show: false,
      },
      foreColor: "#000",
      zoom: {
        autoScaleYaxis: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      show: false,
      labels: {
        formatter: (value) => {
          return value.toFixed(2) + " Mb/s";
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  const [speedData, setSpeedData] = useState([
    {
      name: "Upload",
      x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
    {
      name: "Download",
      x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ]);
  useEffect(() => {
    var nSpeedData = [...speedData];
    nSpeedData[0].data.shift();
    nSpeedData[1].data.shift();
    nSpeedData[0].data = [
      ...nSpeedData[0].data,
      (upspeed / 1000000).toFixed(2),
    ];
    nSpeedData[1].data = [
      ...nSpeedData[1].data,
      (dlspeed / 1000000).toFixed(2),
    ];
    setSpeedData(nSpeedData);
  }, [globalInfo]);

  return (
    <div className="speedTab">
      <Chart options={options} series={speedData} type="area" height={"100%"} />
    </div>
  );
}

function SpeedIndicator() {
  const { globalInfo } = useGlobalInfo();
  return (
    <div className="flex justify-between">
      <div className="flex gap-1 items-center xl:flex-row flex-col">
        <ArrowSmDownIcon className="flex-none w-5 h-5 text-green" />
        <div>
          <div>{toReadableSpeed(globalInfo?.dl_info_speed || 0)}</div>
          <div className="text-neutral">
            {toReadableSize(globalInfo?.dl_info_data || 0)}
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-center xl:flex-row flex-col">
        <ArrowSmUpIcon className="flex-none w-5 h-5 text-red" />
        <div>
          <div>{toReadableSpeed(globalInfo?.up_info_speed || 0)}</div>
          <div className="text-neutral">
            {toReadableSize(globalInfo?.up_info_data || 0)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectionStatus() {
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

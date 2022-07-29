import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  BanIcon,
  ExclamationIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { useGlobalInfo } from "../../../context/globalInfoContext";
import { toReadableSize, toReadableSpeed } from "../../../utils/helpers";

export default function GlobalInfo() {
  const { updateGlobalInfo } = useGlobalInfo();
  useEffect(() => {
    updateGlobalInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  let speedLimit =
    Math.max(globalInfo?.dl_rate_limit || 0, globalInfo?.up_rate_limit || 0) /
    1000000;
  let dlspeed = globalInfo?.dl_info_speed || 0;
  let upspeed = globalInfo?.up_info_speed || 0;

  const [speedData, setSpeedData] = useState(
    [...Array(10)].fill({ time: "", dl: 0, up: 0 })
  );

  useEffect(() => {
    setSpeedData((prev) => {
      let prevCopy = [...prev];
      prevCopy.shift();
      return [
        ...prevCopy,
        {
          time: new Date().toLocaleTimeString(),
          dl: dlspeed / 1000000,
          up: upspeed / 1000000,
        },
      ];
    });
  }, [globalInfo]);

  return (
    <div className="speedTab">
      <ResponsiveContainer minHeight={150}>
        <AreaChart data={speedData} dataKey={"time"}>
          <Tooltip content={CustomTooltip} />
          <CartesianGrid vertical={false} stroke="#e1e1e1" />
          <YAxis
            axisLine={false}
            tick={false}
            width={0}
            domain={[0, speedLimit > 0 ? speedLimit * 1.2 : "auto"]}
          />
          <Area
            type="monotone"
            name="Download"
            dataKey="dl"
            stroke="#22c55e"
            strokeWidth={3}
            fill="#22c55e"
            fillOpacity={0.3}
            isAnimationActive={false}
          />
          <Area
            type="monotone"
            name="Upload"
            dataKey="up"
            stroke="#06b6d4"
            strokeWidth={3}
            fill="#06b6d4"
            fillOpacity={0.3}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-1 flex flex-col gap-1 border border-light rounded bg-white">
        {payload.map((item) => (
          <div key={item.name} className="flex gap-1 items-center">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.stroke }}
            ></div>
            <div className="flex-1 flex justify-between gap-1 items-center">
              <div>{`${item.name}`}</div>
              <div>{`${item.value.toFixed(2)}`} mb/s</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
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

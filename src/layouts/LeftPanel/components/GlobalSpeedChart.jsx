import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { CustomTooltip } from "../../../components/CustomTooltip";
import { useGlobalInfo } from "../../../context/globalInfoContext";

export function GlobalSpeedChart() {
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

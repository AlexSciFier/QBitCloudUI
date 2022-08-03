import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { useGlobalInfo } from "../../../../context/globalInfoContext";
import { useTorrentItem } from "../../../../context/torrentItemContext";
import { CustomTooltip } from "../../../../components/CustomTooltip";

export default function SpeedTab() {
  return (
    <div className="h-80">
      <SpeedChart />
    </div>
  );
}

function SpeedChart() {
  const xAxisItemsCount = 20;
  const { torrentItem } = useTorrentItem();
  const { globalInfo } = useGlobalInfo();

  let speedLimit =
    Math.max(globalInfo?.dl_rate_limit || 0, globalInfo?.up_rate_limit || 0) /
    1000000;
  let dlspeed = torrentItem?.dlspeed || 0;
  let upspeed = torrentItem?.upspeed || 0;

  const [speedData, setSpeedData] = useState(
    [...Array(xAxisItemsCount)].fill({ time: "", dl: 0, up: 0 })
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
  }, [torrentItem]);

  return (
    <ResponsiveContainer minHeight={150}>
      <AreaChart data={speedData} dataKey={"time"}>
        <Tooltip content={CustomTooltip} />
        <CartesianGrid vertical={false} stroke="#e1e1e1" />
        <YAxis
          domain={[0, speedLimit > 0 ? speedLimit * 1.2 : "auto"]}
          tickFormatter={(value) => value.toFixed(2)}
          unit={"mb/s"}
          width={70}
        />
        {speedLimit > 0 && (
          <ReferenceLine
            y={speedLimit}
            label="Speed limit"
            stroke="red"
            strokeDasharray="3 3"
          />
        )}
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
  );
}

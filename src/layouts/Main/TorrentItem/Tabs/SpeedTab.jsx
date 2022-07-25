import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useTorrentItem } from "../../../../context/torrentItemContext";

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
  let dlspeed = torrentItem?.dlspeed || 0;
  let upspeed = torrentItem?.upspeed || 0;
  const options = {
    colors: ["#ef4444", "#22c55e"],
    chart: {
      animations: {
        dynamicAnimation: {
          enabled: false,
        },
      },
      type: "area",
      toolbar: {
        show: false,
      },
      foreColor: "#000",
      zoom: {
        autoScaleYaxis: false,
      },
    },

    tooltip: {
      x: {
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
      x: [...Array(xAxisItemsCount).keys()],
      data: [...Array(xAxisItemsCount).keys()].fill(0),
    },
    {
      name: "Download",
      x: [...Array(xAxisItemsCount).keys()],
      data: [...Array(xAxisItemsCount).keys()].fill(0),
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [torrentItem]);

  return (
    <Chart options={options} series={speedData} type="area" height={"100%"} />
  );
}

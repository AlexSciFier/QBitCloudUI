import React from "react";

export function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="px-3 py-1 flex flex-col gap-1 border border-light dark:border-neutral rounded bg-white dark:bg-dark">
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

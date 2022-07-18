import React from "react";

export function ProgressBar({ progress = 0 }) {
  return (
    <div className="flex gap-1 items-center">
      <div className="w-full h-2 bg-light rounded">
        <div
          className={`${
            progress === 1
              ? "bg-green"
              : "bg-gradient-to-r from-primary to-primaryLight"
          } h-2 rounded`}
          style={{ width: `${progress * 100}%` }}
        ></div>
      </div>
      <div className="w-12">{(progress * 100).toFixed(0)}%</div>
    </div>
  );
}

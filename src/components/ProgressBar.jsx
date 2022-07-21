import React from "react";

export function ProgressBar({ progress }) {
  return (
    <div className="flex gap-1">
      <div className="w-10 flex-1 border border-light rounded overflow-hidden">
        <div
          className="h-full basis-12 bg-gradient-to-r from-primary to-primaryLight"
          style={{ width: `${(progress * 100).toFixed(0)}%` }}
        ></div>
      </div>
      <div className="basis-12">{(progress * 100).toFixed(0)}%</div>
    </div>
  );
}

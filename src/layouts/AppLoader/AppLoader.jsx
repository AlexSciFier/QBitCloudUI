import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

export default function AppLoader() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center dark:bg-dark dark:text-white">
      <div className="text-2xl flex gap-3 items-center">
        <RefreshIcon className="w-8 h-8 loading-spin" />
        <div>Connecting to qBitTorrent...</div>
      </div>
    </div>
  );
}

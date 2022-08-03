import { XCircleIcon } from "@heroicons/react/outline";
import React from "react";

export default function ErrorAppLoader() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center dark:bg-dark dark:text-white">
      <div className="text-2xl flex gap-3 items-center">
        <XCircleIcon className="w-8 h-8 text-red" />
        <div>Cannot connect to qBitTorrent</div>
      </div>
    </div>
  );
}

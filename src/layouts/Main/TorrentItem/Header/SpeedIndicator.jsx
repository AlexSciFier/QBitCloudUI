import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/outline";
import React from "react";
import { toReadableSpeed } from "../../../../utils/helpers";

export function SpeedIndicator({ speed, isDirectionUpload }) {
  return (
    <div className="flex items-center">
      {isDirectionUpload ? (
        <ArrowSmUpIcon className="h-5 w-5 text-red" />
      ) : (
        <ArrowSmDownIcon className="h-5 w-5 text-green" />
      )}
      {toReadableSpeed(speed)}
    </div>
  );
}

import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import { useTorrentItem } from "../../../../context/torrentItemContext";
import { ProgressBar } from "./ProgressBar";
import { SpeedIndicator } from "./SpeedIndicator";
import { StateIcon } from "./StateIcon";

export function TorrentHeader({ isOpen, onClick }) {
  let { torrentItem } = useTorrentItem();
  return (
    <div className="flex flex-col gap-1 hover:cursor-pointer" onClick={onClick}>
      <div className="flex justify-between gap-1 items-center">
        <div
          className={`flex-none w-5 h-5 text-neutral transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <ChevronRightIcon />
        </div>
        <div className="flex flex-shrink min-w-0 gap-1 items-center">
          <div className="flex-none">
            <StateIcon state={torrentItem.state} />
          </div>
          <div className="truncate">{torrentItem.name}</div>
        </div>
        <div className="flex-1 flex gap-1 text-neutral">
          <div className="md:block hidden bg-primary text-white px-2 rounded">
            {torrentItem.category}
          </div>
          <div className="md:block hidden">{torrentItem.tags}</div>
        </div>
        <div className="flex flex-none gap-1">
          <SpeedIndicator
            speed={torrentItem.downSpeed}
            isDirectionUpload={false}
          />
          <SpeedIndicator
            speed={torrentItem.upSpeed}
            isDirectionUpload={true}
          />
        </div>
      </div>
      <div>
        <ProgressBar progress={torrentItem.progress} />
      </div>
    </div>
  );
}

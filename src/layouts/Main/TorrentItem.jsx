import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/outline";
import React from "react";
import { toReadableSize, toReadableSpeed } from "../../utils/helpers";
import { TORRENT_STATE } from "../../utils/torrentStates";

export default function TorrentItem({
  title,
  progress,
  state,
  size,
  downSpeed,
  upSpeed,
}) {
  return (
    <div className="flex flex-col gap-1 border rounded border-light px-2 py-3">
      <div className="flex justify-between gap-1">
        <div className="flex gap-1 align-middle">
          <StateIcon state={state} /> {title}
        </div>
        <div className="flex-1 text-neutral">{toReadableSize(size)}</div>
        <div className="flex gap-3">
          <SpeedIndicator speed={downSpeed} isDirectionUpload={false} />
          <SpeedIndicator speed={upSpeed} isDirectionUpload={true} />
        </div>
      </div>
      <div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
}

function SpeedIndicator({ speed, isDirectionUpload }) {
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
function ProgressBar({ progress = 0 }) {
  return (
    <div className="w-full h-2 bg-light rounded">
      <div
        className="bg-green h-2 rounded"
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
}

function StateIcon({ state }) {
  let torrentState = TORRENT_STATE[state];

  return (
    <IconTemplate
      icon={torrentState.icon}
      tooltip={torrentState.description}
      color={torrentState.color}
    />
  );
}

function IconTemplate({ icon, tooltip, color }) {
  return (
    <div className={color + " w-6 h-6 relative group"}>
      {icon}
      <div className="text-black absolute left-full top-0 group-hover:block hidden bg-white rounded shadow-lg px-3 py-1 w-fit whitespace-nowrap">
        {tooltip}
      </div>
    </div>
  );
}

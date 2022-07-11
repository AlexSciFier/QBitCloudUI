import React from "react";
import { TORRENT_STATE } from "../../utils/torrentStates";

export default function TorrentItem({ title, progress, state }) {
  return (
    <div className="flex flex-col gap-1 border rounded border-light px-2 py-3">
      <div className="flex justify-between">
        <div className="flex gap-1 align-middle">
          <StateIcon state={state} /> {title}
        </div>
        <div className="flex-1"></div>
        <div></div>
      </div>
      <div>
        <ProgressBar progress={progress} />
      </div>
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

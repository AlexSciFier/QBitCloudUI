import React, { useEffect } from "react";
import { useTorrentList } from "../../context/torrentListContext";
import TorrentItem from "./TorrentItem";

export default function TorrentList() {
  const { torrentList, updateTorrentList } = useTorrentList();
  useEffect(() => {
    updateTorrentList();
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {torrentList?.map((torrent) => (
        <TorrentItem
          key={torrent.hash}
          title={torrent.name}
          state={torrent.state}
          progress={torrent.progress}
          size={torrent.size}
          downSpeed={torrent.dlspeed}
          upSpeed={torrent.upspeed}
        />
      ))}
    </div>
  );
}

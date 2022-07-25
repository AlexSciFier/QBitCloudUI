import React, { useEffect, useState } from "react";
import Sync from "../../../../api/syncApi";
import { useTorrentItem } from "../../../../context/torrentItemContext";
import Table from "../../../../components/Table";
import { toReadableSpeed } from "../../../../utils/helpers";

export default function PeersTab() {
  const [peers, setPeers] = useState({});
  const { torrentItem } = useTorrentItem();

  let timer;

  useEffect(() => {
    manualUpdateData(true);
    startUpdate();
    return () => {
      stopUpdate();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const manualUpdateData = async (fullUpdate = false) => {
    let res = await Sync.getTorrentPeers(torrentItem.hash, fullUpdate);

    if (res?.full_update) {
      setPeers(res.peers);
      return;
    }
    if (res?.peers) updatePeers(res.peers);
    if (res?.peers_removed) deletePeers(res.peers_removed);
  };

  const startUpdate = async () => {
    timer = setInterval(async () => {
      manualUpdateData();
    }, 2000);
  };

  const stopUpdate = () => {
    clearInterval(timer);
  };

  function deletePeers(update) {
    setPeers((prevState) => {
      let objCopy = { ...prevState };
      update.forEach((item) => {
        delete objCopy[item];
      });
      return objCopy;
    });
  }

  function updatePeers(update) {
    setPeers((prevState) => {
      let localPeers = { ...prevState };
      for (const key in update) {
        if (Object.hasOwnProperty.call(update, key)) {
          const updateItem = update[key];
          localPeers[key] = { ...localPeers[key], ...updateItem };
        }
      }
      return localPeers;
    });
  }

  const rows = Object.entries(peers || {})
    .sort((peerA, peerB) =>
      peerA[1].country < peerB[1].country
        ? -1
        : peerA[1].country > peerB[1].country
        ? 1
        : 0
    )
    .map((peer) => ({
      id: peer[0],
      cells: [
        {
          id: peer[0] + "country",
          data: (
            <div className="flex gap-1">
              <div style={{ fontFamily: "Twemoji Country Flags" }}>
                {getFlagEmoji(peer[1].country_code)}
              </div>
              <div>{peer[1].country}</div>
            </div>
          ),
        },
        { id: peer[0] + "ip", data: peer[1].ip },
        { id: peer[0] + "port", data: peer[1].port },
        { id: peer[0] + "connection", data: peer[1].connection },
        { id: peer[0] + "flags", data: peer[1].flags },
        { id: peer[0] + "client", data: peer[1].client },
        {
          id: peer[0] + "progress",
          data: `${((peer[1].progress || 0) * 100).toFixed()}%`,
        },
        { id: peer[0] + "dl_speed", data: toReadableSpeed(peer[1].dl_speed) },
        { id: peer[0] + "up_speed", data: toReadableSpeed(peer[1].up_speed) },
      ],
    }));

  const cols = [
    { name: "Country" },
    { name: "IP" },
    { name: "Port" },
    { name: "Connection" },
    { name: "Flags" },
    { name: "Client" },
    { name: "Progress" },
    { name: "Download speed" },
    { name: "Upload speed" },
  ];

  function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  return (
    <div className="">
      {rows.length > 0 ? (
        <Table rows={rows} columns={cols} />
      ) : (
        <div className="border border-light rounded-lg px-3 text-center">
          No peers
        </div>
      )}
    </div>
  );
}

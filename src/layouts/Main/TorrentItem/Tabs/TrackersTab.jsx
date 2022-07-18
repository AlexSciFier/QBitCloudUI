import React, { useEffect, useState } from "react";
import Torrents from "../../../../api/torrentsApi";
import { useTorrentItem } from "../../../../context/torrentItemContext";
import { useUpdateData } from "../../../../context/updateDataContext";
import Table from "../../../LeftPanel/components/Table";

export default function TrackersTab() {
  const [trackers, setTrackers] = useState([]);
  const { torrentItem } = useTorrentItem();

  useEffect(() => {
    Torrents.getTrackers(torrentItem.hash).then((res) => {
      setTrackers(res);
    });
  }, []);

  const trackerNameMap = {
    url: "URL",
    tier: "Tier",
    status: "Status",
    num_seeds: "Seeds",
    num_peers: "Peers",
    num_leeches: "Leeches",
    num_downloaded: "Downloaded",
    msg: "Message",
  };

  const trackerStatusMap = {
    0: "Diasbled",
    1: "Not contacted yet",
    2: "Working",
    3: "Updating",
    4: "Not working",
  };

  const rows =
    trackers?.map((tracker) => {
      return {
        cells:
          Object.entries(tracker)
            ?.map((item) =>
              item[0] === "status"
                ? { data: trackerStatusMap[item[1]] }
                : item[0] === "tier" ||
                  item[0] === "num_seeds" ||
                  item[0] === "num_peers" ||
                  item[0] === "num_leeches" ||
                  item[0] === "num_downloaded"
                ? { data: item[1] < 0 ? "" : item[1] }
                : { data: item[1] }
            )
            ?.reverse() || [],
      };
    }) || [];

  const cols =
    Object.keys(trackers?.[0] || {})
      ?.map((key) => trackerNameMap[key])
      ?.reverse() || [];

  return (
    <div>
      <Table rows={rows} columns={cols} />
    </div>
  );
}

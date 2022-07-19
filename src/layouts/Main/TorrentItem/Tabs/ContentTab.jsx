import React, { useEffect, useState } from "react";
import Torrents from "../../../../api/torrentsApi";
import Table from "../../../../components/Table";
import { useTorrentItem } from "../../../../context/torrentItemContext";
import { toReadableSize } from "../../../../utils/helpers";

export default function ContentTab() {
  const [content, setContent] = useState([]);
  const { torrentItem } = useTorrentItem();
  useEffect(() => {
    const fetch = async () => {
      let res = await Torrents.getTorrentContents(torrentItem.hash);
      setContent(res);
    };
    fetch();
  }, []);

  const rows = content.map((file) => ({
    cells: [
      { data: file.name },
      { data: toReadableSize(file.size) },
      {
        data: (
          <div className="flex gap-1">
            <div className="w-10 flex-1 border border-light rounded overflow-hidden">
              <div
                className="h-full basis-12 bg-gradient-to-r from-primary to-primaryLight"
                style={{ width: `${(file.progress * 100).toFixed(0)}%` }}
              ></div>
            </div>
            <div className="basis-12">{(file.progress * 100).toFixed(0)}%</div>
          </div>
        ),
      },
    ],
  }));

  const cols = [
    { name: "File name" },
    { name: "Size", width: "8rem" },
    { name: "Progress", width: "15rem" },
  ];

  return (
    <div>
      <Table columns={cols} rows={rows} fixed={true} />
    </div>
  );
}

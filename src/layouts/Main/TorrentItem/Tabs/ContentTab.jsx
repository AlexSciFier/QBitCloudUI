import React, { useEffect, useState } from "react";
import Torrents from "../../../../api/torrentsApi";
import TreeView from "../../../../components/TreeView";
import { useTorrentItem } from "../../../../context/torrentItemContext";

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

  return (
    <div>
      <TreeView files={content} />
    </div>
  );
}

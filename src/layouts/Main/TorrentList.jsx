import React, { useEffect, useState } from "react";
import { useTorrentFilter } from "../../context/torrentFilterContext";
import { TorrentItemProvider } from "../../context/torrentItemContext";
import { useTorrentList } from "../../context/torrentListContext";
import TorrentItem from "./TorrentItem/TorrentItem";

export default function TorrentList() {
  const { torrentList, updateTorrentList } = useTorrentList();
  const [openedHash, setOpenedHash] = useState();
  const [filtered, setFiltered] = useState([]);
  const { filter } = useTorrentFilter();

  function openCard(hash) {
    if (openedHash === hash) {
      setOpenedHash(undefined);
      return;
    }
    setOpenedHash(hash);
  }

  useEffect(() => {
    updateTorrentList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let torrentListCopy = [...torrentList];
    if (filter.category !== "")
      torrentListCopy = torrentList.filter(
        (item) => item.category === filter.category
      );
    if (filter.tags.length > 0)
      torrentListCopy = torrentListCopy.filter((item) => {
        const found = item.tags
          .split(", ")
          .some((r) => filter.tags.indexOf(r) >= 0);
        return found > 0;
      });
    if (filter.states !== "") {
      torrentListCopy = torrentListCopy.filter((item) => {
        return filter.states.split(",").includes(item.state);
      });
    }
    if (filter.search !== "") {
      torrentListCopy = torrentListCopy.filter((item) => {
        return item.name
          .toLocaleLowerCase()
          .includes(filter.search.toLocaleLowerCase());
      });
    }
    setFiltered(torrentListCopy);
  }, [torrentList, filter]);

  return (
    <div className="flex flex-col gap-1">
      {filtered?.map((torrent) => (
        <TorrentItemProvider key={torrent.hash} torrentItem={torrent}>
          <TorrentItem
            isOpen={openedHash === torrent.hash}
            setIsOpen={() => openCard(torrent.hash)}
          />
        </TorrentItemProvider>
      ))}
    </div>
  );
}

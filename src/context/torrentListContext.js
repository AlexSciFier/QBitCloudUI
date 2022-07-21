import React, { createContext, useContext, useState } from "react";
import Torrents from "../api/torrentsApi";
import { updateArrayWithObject } from "../utils/helpers";
import { useIsLoggedIn } from "./isLoggedInContext";

const TorrentList = createContext();

/**
 * @typedef {Object} TorrentListProvider
 * @property {import("../api/torrentsApi").TorrentInfo[]} torrentList
 * @property {Function} updateTorrentList
 * @property {Function} deleteTorrents
 */

/**
 *
 * @returns {TorrentListProvider}
 */
export function useTorrentList() {
  return useContext(TorrentList);
}

export function TorrentListProvider({ children }) {
  const [torrentList, setTorrentList] = useState([]);
  const { setIsLoggedIn } = useIsLoggedIn();

  const deleteTorrents = (hashes) => {
    let arrayCopy = [...torrentList];
    hashes?.forEach((hash) => {
      arrayCopy = arrayCopy.filter((item) => item.hash !== hash);
    });
    setTorrentList(arrayCopy);
  };

  const updateTorrentList = (update) => {
    if (update) {
      setTorrentList(updateArrayWithObject(torrentList, update));
      return;
    }
    Torrents.getTorrentsInfo().then((res) => {
      if (res === undefined) setIsLoggedIn(false);
      setTorrentList(res);
    });
  };
  return (
    <TorrentList.Provider
      value={{ torrentList, updateTorrentList, deleteTorrents }}
    >
      {children}
    </TorrentList.Provider>
  );
}

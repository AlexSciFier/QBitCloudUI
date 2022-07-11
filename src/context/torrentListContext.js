import React, { createContext, useContext, useState } from "react";
import Torrents from "../api/torrentsApi";

const TorrentList = createContext();

/**
 * @typedef {Object} TorrentListProvider
 * @property {import("../api/torrentsApi").TorrentInfo[]} torrentList
 * @property {Function} updateTorrentList
 */

/**
 *
 * @returns {TorrentListProvider}
 */
export function useTorrentList() {
  return useContext(TorrentList);
}

export function TorrentListProvider({ children }) {
  const [torrentList, setTorrentList] = useState();

  const updateTorrentList = (update) => {
    if (update) {
      console.log(update);
      setTorrentList(combineUpdatedTorrentLists(torrentList, update));
      return;
    }
    Torrents.getTorrentsInfo().then((res) => {
      setTorrentList(res);
    });
  };

  return (
    <TorrentList.Provider value={{ torrentList, updateTorrentList }}>
      {children}
    </TorrentList.Provider>
  );
}
/**
 *
 * @param {Object[]} mainList
 * @param {Object} updateList
 * @returns {Object[]}
 */
function combineUpdatedTorrentLists(mainList, updateList) {
  let torrentListCopy = [...mainList];
  for (const key in updateList) {
    if (Object.hasOwnProperty.call(updateList, key)) {
      const objectItem = updateList[key];
      for (let i = 0; i < torrentListCopy.length; i++) {
        const arrayItem = torrentListCopy[i];
        if (arrayItem.hash === key) {
          torrentListCopy[i] = { ...torrentListCopy[i], ...objectItem };
        }
      }
    }
  }
  return torrentListCopy;
}

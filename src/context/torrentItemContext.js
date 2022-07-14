import React, { createContext, useContext } from "react";

const TorrentItem = createContext();

/**
 * @typedef {Object} TorrentItem
 * @property {import("../api/torrentsApi").TorrentInfo} torrentItem
 */

/**
 *
 * @returns {TorrentItem}
 */
export function useTorrentItem() {
  return useContext(TorrentItem);
}

export function TorrentItemProvider({ children, torrentItem }) {
  return (
    <TorrentItem.Provider value={{ torrentItem }}>
      {children}
    </TorrentItem.Provider>
  );
}

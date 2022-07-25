import React, { createContext, useContext, useState } from "react";

const TorrentFilter = createContext();
/**
 * @typedef {Object} Filter
 * @property {string} category
 * @property {string[]} tags
 * @property {string[]} states
 * @property {string} search
 */
/**
 * @typedef {Object} TorrentFilter
 * @property {Filter} filter
 * @property {React.Dispatch<React.SetStateAction<Filter>>} setFilter
 */

/**
 *
 * @returns {TorrentFilter}
 */
export function useTorrentFilter() {
  return useContext(TorrentFilter);
}

export function TorrentFilterProvider({ children }) {
  const [filter, setFilter] = useState({
    category: "",
    tags: [],
    states: "",
    search: "",
  });
  return (
    <TorrentFilter.Provider value={{ filter, setFilter }}>
      {children}
    </TorrentFilter.Provider>
  );
}

import React, { createContext, useContext, useState } from "react";
import Torrents from "../api/torrentsApi";

const Tags = createContext();

/**
 * @typedef {Object} TagsProvider
 * @property {string[]} tags
 * @property {Function} updateTags
 * @property {Function} deleteTags
 */

/**
 *
 * @returns {TagsProvider}
 */
export function useTags() {
  return useContext(Tags);
}

export function TagsProvider({ children }) {
  const [tags, setTags] = useState([]);

  const deleteTags = (hashes) => {
    let tagsCopy = [...tags];
    hashes.forEach((item) => {
      tagsCopy = tagsCopy.filter((tag) => tag !== item);
    });
    setTags(tagsCopy);
  };

  const updateTags = (update) => {
    if (update) {
      setTags([...tags, ...update]);
      return;
    }
    Torrents.getAllTags().then((res) => {
      setTags(res);
    });
  };
  return (
    <Tags.Provider value={{ tags, updateTags, deleteTags }}>
      {children}
    </Tags.Provider>
  );
}

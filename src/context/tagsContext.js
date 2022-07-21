import { uniq } from "lodash";
import React, { createContext, useContext, useState } from "react";
import Torrents from "../api/torrentsApi";
import { useIsLoggedIn } from "./isLoggedInContext";

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
  const { setIsLoggedIn } = useIsLoggedIn();

  const deleteTags = (hashes) => {
    let tagsCopy = [...tags];
    hashes.forEach((item) => {
      tagsCopy = tagsCopy.filter((tag) => tag !== item);
    });
    setTags(tagsCopy);
  };

  const updateTags = (update) => {
    if (update) {
      setTags(uniq([...tags, ...update]));
      return;
    }
    Torrents.getAllTags().then((res) => {
      if (res === undefined) setIsLoggedIn(false);
      setTags(res);
    });
  };
  return (
    <Tags.Provider value={{ tags, updateTags, deleteTags }}>
      {children}
    </Tags.Provider>
  );
}

import React, { createContext, useContext, useState } from "react";
import Torrents from "../api/torrentsApi";

const Categories = createContext();

/**
 * @typedef {Object<string,Category>} Categories
 */
/**
 * @typedef {Object} Category
 * @property {string} name
 * @property {string} savePath
 */

/**
 * @typedef {Object} CategoriesProvider
 * @property {Categories} categories
 * @property {Function} updateCategories
 * @property {Function} deleteCategories
 */

/**
 *
 * @returns {CategoriesProvider}
 */
export function useCategories() {
  return useContext(Categories);
}

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState({});

  const deleteCategories = (hashes) => {
    let objCopy = { ...categories };
    hashes.forEach((item) => {
      delete objCopy[item];
    });
    setCategories(objCopy);
  };

  const updateCategories = (update) => {
    if (update) {
      setCategories({ ...categories, ...update });
      return;
    }
    Torrents.getAllCategories().then((res) => {
      setCategories(res);
    });
  };
  return (
    <Categories.Provider
      value={{ categories, updateCategories, deleteCategories }}
    >
      {children}
    </Categories.Provider>
  );
}

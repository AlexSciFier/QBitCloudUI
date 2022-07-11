import React, { createContext, useContext, useEffect, useState } from "react";
import Sync from "../api/syncApi";
import { useTorrentList } from "./torrentListContext";

const UpdateData = createContext();
/**
 * @typedef {Object} MainDataContext
 * @property {Function} updateMainData
 * @property {Function} startUpdate
 * @property {Function} stopUpdate
 * @property {Object} mainData
 */
/**
 *
 * @returns {MainDataContext}
 */
export function useUpdateData() {
  return useContext(UpdateData);
}

export function UpdateDataProvider({ children }) {
  let timer;
  const [updatedData, setUpdateData] = useState();
  const { updateTorrentList } = useTorrentList();

  useEffect(() => {
    if (updatedData?.torrents) {
      updateTorrentList(updatedData?.torrents);
    }
  }, [updatedData]);

  const manualUpdateData = async () => {
    let res = await Sync.getMainData();
    setUpdateData(res);
  };

  const startUpdate = async (time = 2000) => {
    timer = setInterval(async () => {
      manualUpdateData();
    }, time);
  };

  const stopUpdate = () => {
    clearInterval(timer);
    timer = null;
  };

  return (
    <UpdateData.Provider
      value={{ updatedData, manualUpdateData, startUpdate, stopUpdate }}
    >
      {children}
    </UpdateData.Provider>
  );
}

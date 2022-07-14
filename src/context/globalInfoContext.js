import React, { createContext, useContext, useState } from "react";
import Transfer from "../api/transferApi";

const GlobalInfo = createContext();

/**
 * @typedef {Object} GlobalInfoProvider
 * @property {GlobalInfo} globalInfo
 * @property {Function} updateGlobalInfo
 */

/**
 * @typedef {Object} GlobalInfo
 * @property {number} dl_info_speed         - Global download rate (bytes/s)
 * @property {number} dl_info_data          - Data downloaded this session (bytes)
 * @property {number} up_info_speed         - Global upload rate (bytes/s)
 * @property {number} up_info_data          - Data uploaded this session (bytes)
 * @property {number} dl_rate_limit         - Download rate limit (bytes/s)
 * @property {number} up_rate_limit         - Upload rate limit (bytes/s)
 * @property {number} dht_nodes             - DHT nodes connected to
 * @property {string} connection_status     - Connection status. Possible values are `connected` `firewalled` `disconnected`
 * @property {boolean} queueing             - True if torrent queueing is enabled
 * @property {boolean} use_alt_speed_limits - True if alternative speed limits are enabled
 * @property {number} refresh_interval      - Transfer list refresh interval (milliseconds)
 */

/**
 *
 * @returns {GlobalInfoProvider}
 */
export function useGlobalInfo() {
  return useContext(GlobalInfo);
}

export function GlobalInfoProvider({ children }) {
  const [globalInfo, setGlobalInfo] = useState();

  const updateGlobalInfo = (update) => {
    if (update) {
      setGlobalInfo({ ...globalInfo, ...update });
      return;
    }
    Transfer.getInfo().then((res) => {
      setGlobalInfo(res);
    });
  };

  return (
    <GlobalInfo.Provider value={{ globalInfo, updateGlobalInfo }}>
      {children}
    </GlobalInfo.Provider>
  );
}

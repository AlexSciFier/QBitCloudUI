import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Sync from "../api/syncApi";
import { useCategories } from "./categoriesContext";
import { useGlobalInfo } from "./globalInfoContext";
import { useIsLoggedIn } from "./isLoggedInContext";
import { useTags } from "./tagsContext";
import { useTorrentList } from "./torrentListContext";

const UpdateData = createContext();
/**
 * @typedef {Object} MainDataContext
 * @property {Function} manualUpdateData
 * @property {React.Dispatch<React.SetStateAction<undefined>>} setUpdateData
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
  let timer = useRef(null);

  const [updatedData, setUpdateData] = useState();
  const [refreshRate, setRefreshRate] = useState(1500);
  const { updateTorrentList, deleteTorrents } = useTorrentList();
  const { updateCategories, deleteCategories } = useCategories();
  const { updateTags, deleteTags } = useTags();
  const { updateGlobalInfo } = useGlobalInfo();
  const { setIsLoggedIn } = useIsLoggedIn();

  useEffect(() => {
    return () => {
      stopUpdate();
    };
  }, []);

  useEffect(() => {
    if (updatedData?.torrents) updateTorrentList(updatedData.torrents);
    if (updatedData?.torrents_removed)
      deleteTorrents(updatedData.torrents_removed);

    if (updatedData?.categories) updateCategories(updatedData.categories);
    if (updatedData?.categories_removed)
      deleteCategories(updatedData.categories_removed);

    if (updatedData?.tags) updateTags(updatedData.tags);
    if (updatedData?.tags_removed) deleteTags(updatedData.tags_removed);

    updateGlobalInfo(updatedData?.server_state || {});

    if (updatedData?.server_state?.refresh_interval)
      setRefreshRate(updatedData.server_state.refresh_interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatedData]);

  useEffect(() => {
    timer.current = setInterval(async () => {
      manualUpdateData();
    }, refreshRate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshRate]);

  const manualUpdateData = async () => {
    let res = await Sync.getMainData();
    if (res === undefined) {
      setIsLoggedIn(false);
    }
    setUpdateData(res);
  };

  const startUpdate = async () => {
    timer = setInterval(async () => {
      manualUpdateData();
    }, refreshRate);
  };

  const stopUpdate = () => {
    clearInterval(timer.current);
  };

  return (
    <UpdateData.Provider
      value={{
        updatedData,
        setUpdateData,
        manualUpdateData,
        startUpdate,
        stopUpdate,
      }}
    >
      {children}
    </UpdateData.Provider>
  );
}

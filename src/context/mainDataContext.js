import React, { createContext, useContext, useState } from "react";
import { getMainData } from "../api/syncApi";

const MainData = createContext();

export function useMainData() {
  return useContext(MainData);
}

export function MainDataProvider({ children }) {
  const [mainData, setMainData] = useState();
  const updateMainData = () => {
    getMainData().then((res) => setMainData(res));
  };
  return (
    <MainData.Provider value={{ mainData, updateMainData }}>
      {children}
    </MainData.Provider>
  );
}

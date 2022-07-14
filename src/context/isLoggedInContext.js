import React, { createContext, useContext, useState } from "react";

const IsLoggedIn = createContext();

/**
 * @typedef {Object} ReturnItem
 * @property {boolean} isLoggedIn
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsLoggedIn
 */

/**
 *
 * @returns {ReturnItem}
 */
export function useIsLoggedIn() {
  return useContext(IsLoggedIn);
}

export function IsLoggedInProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <IsLoggedIn.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedIn.Provider>
  );
}

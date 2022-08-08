import React, { useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function getPreferedScheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

const ThemeContext = React.createContext();
/**
 * @typedef {Object} LeftPanelDefaulValues
 * @property {boolean} showSpeedGraph
 * @property {boolean} showCurentSpeedValues
 * @property {boolean} showAllTimeDataTransfer
 * @property {boolean} showFreeSpace
 */
/**
 * @typedef {Object} ThemeContextValue
 * @property {string} theme
 * @property {React.Dispatch<React.SetStateAction<string>>} setTheme
 * @property {string} mainColor
 * @property {React.Dispatch<React.SetStateAction<string>>} setMainColor
 * @property {LeftPanelDefaulValues} leftPanelSettings
 * @property {React.Dispatch<React.SetStateAction<LeftPanelDefaulValues>>} setLeftPanelSettings
 */

/**
 *
 * @returns {ThemeContextValue}
 */
export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ initialTheme, children }) => {
  const leftPanelDefaultSettings = {
    showSpeedGraph: true,
    showCurentSpeedValues: true,
    showAllTimeDataTransfer: true,
    showFreeSpace: true,
  };

  const [lSTheme, setLSTheme] = useLocalStorage(
    "theme-mode",
    getPreferedScheme()
  );
  const [lSMainColor, setLSMainColor] = useLocalStorage(
    "main-color",
    "#06b6d4"
  );
  const [lSLeftPanelSettings, setLSLeftPanelSettings] = useLocalStorage(
    "left-panel",
    leftPanelDefaultSettings
  );

  const [theme, setTheme] = useState(lSTheme);
  const [mainColor, setMainColor] = useState(lSMainColor);
  const [leftPanelSettings, setLeftPanelSettings] =
    useState(lSLeftPanelSettings);

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    if (rawTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    setLSTheme(rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    setLSMainColor(mainColor);
    document.documentElement.style.setProperty("--main-color", mainColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainColor]);

  useEffect(() => {
    setLSLeftPanelSettings(leftPanelSettings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftPanelSettings]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        mainColor,
        setMainColor,
        leftPanelSettings,
        setLeftPanelSettings,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

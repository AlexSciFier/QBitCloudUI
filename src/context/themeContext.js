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

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ initialTheme, children }) => {
  const [lSTheme, setLSTheme] = useLocalStorage(
    "theme-mode",
    getPreferedScheme()
  );
  const [lSMainColor, setLSMainColor] = useLocalStorage(
    "main-color",
    "#06b6d4"
  );

  const [theme, setTheme] = useState(lSTheme);
  const [mainColor, setMainColor] = useState(lSMainColor);

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
  }, [theme]);

  useEffect(() => {
    setLSMainColor(mainColor);
    document.documentElement.style.setProperty("--main-color", mainColor);
  }, [mainColor]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        mainColor,
        setMainColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

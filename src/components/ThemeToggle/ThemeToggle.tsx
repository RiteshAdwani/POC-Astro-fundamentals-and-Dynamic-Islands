import { useState, useLayoutEffect } from "react";

import "./ThemeToggle.css";
import SunIcon from "../icons/Sun";
import MoonIcon from "../icons/Moon";
import { Theme } from "../../types/global.types";
import { NEXT_THEME } from "../../constants/theme.constants";
import { LOCAL_STORAGE_KEYS } from "../../constants/localStorageKeys.constants";

/**
 * @description Component for toggling between light and dark themes.
 */
const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  /**
   * @description Effect to initialize the theme based on localStorage value.
   */
  useLayoutEffect(() => {
    setTheme(
      (localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) as Theme) ?? Theme.Dark,
    );
  }, []);

  const nextTheme = NEXT_THEME[theme];
  const title = `Switch to ${nextTheme} mode`;
  const label = title;
  const Icon = nextTheme === Theme.Light ? SunIcon : MoonIcon;

  /**
   * @description Handler for toggling the theme. It updates the theme state, sets the data-theme attribute on the document element for CSS theming, and saves the selected theme in localStorage for persistence across sessions.
   */
  const handleToggle = () => {
    const next = NEXT_THEME[theme];
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, next);
  };

  return (
    <button
      onClick={handleToggle}
      className="theme-toggle"
      aria-label={label}
      title={title}
    >
      <Icon />
    </button>
  );
};

export default ThemeToggle;

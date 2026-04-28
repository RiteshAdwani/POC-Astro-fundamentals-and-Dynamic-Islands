import { useState, useLayoutEffect } from "react";

import "./ThemeToggle.css";
import SunIcon from "../icons/Sun";
import MoonIcon from "../icons/Moon";
import { Theme } from "../../types/global.types";
import { NEXT_THEME } from "../../constants/theme.constants";
import { LOCAL_STORAGE_KEYS } from "../../constants/localStorageKeys.constants";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  useLayoutEffect(() => {
    setTheme(
      (localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) as Theme) ?? Theme.Dark,
    );
  }, []);

  const nextTheme = NEXT_THEME[theme];
  const title = `Switch to ${nextTheme} mode`;
  const label = title;
  const Icon = nextTheme === Theme.Light ? SunIcon : MoonIcon;

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
}

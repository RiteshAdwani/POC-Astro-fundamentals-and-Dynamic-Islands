import { Theme } from "../types/global.types";

export const NEXT_THEME: Record<Theme, Theme> = {
  [Theme.Dark]: Theme.Light,
  [Theme.Light]: Theme.Dark,
};

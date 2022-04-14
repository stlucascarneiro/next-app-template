import { createContext } from "react";
import { Devices } from "_config/device/types";
import { Theme } from "_config/theme";

interface IThemeContext extends Theme {
    setTheme: any
}

const theme = new Theme('light', Devices.desktop)

export const ThemeContext = createContext<IThemeContext>({ ...theme, setTheme: undefined });
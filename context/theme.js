import { createContext } from "react";

const Theme = {
    theme: 'dark',
    switchTheme: () => {}
}
export const ThemeContext = createContext(Theme);

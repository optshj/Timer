'use client';
import {createContext,useContext} from "react";
import { ThemeProvider } from "styled-components"
import useDarkMode from "../_hooks/useDarkmode"
import themes from "../_styles/theme";
import media from "../_styles/media";

const defaultValue = {
    theme: 'dark',
    toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultValue);

export default function DarkmodeProvider({children}: {children: React.ReactNode}){
    const darkmode = useDarkMode();

    return(
        <ThemeContext.Provider value={darkmode}>
            <ThemeProvider theme={{...darkmode.theme === 'light' ? themes.lightTheme : themes.darkTheme,media}}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
export function useTheme(){
    const {toggleTheme} = useContext(ThemeContext);
    const {theme} = useContext(ThemeContext);
    return {theme,toggleTheme};
}

'use client';
import {createContext,useContext} from "react";
import { ThemeProvider } from "styled-components"
import useDarkMode from "../_hooks/useDarkMode"
import themes from "../_styles/theme";

const defaultValue = {
    theme: 'dark',
    toggleTheme: () => {},
};

const ThemeContext = createContext(defaultValue);

export default function DarkmodeProvider({children}: {children: React.ReactNode}){
    const darkmode = useDarkMode();

    return(
        <ThemeContext.Provider value={darkmode}>
            <ThemeProvider theme={{...darkmode.theme === 'light' ? themes.lightTheme : themes.darkTheme}}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
export function useTheme(){
    const {theme,toggleTheme} = useContext(ThemeContext);
    return {theme,toggleTheme};
}

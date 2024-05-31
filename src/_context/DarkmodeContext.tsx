'use client';
import {createContext,useContext} from "react";
import { ThemeProvider } from "styled-components"
import useDarkmode from "../_hooks/useDarkmode";
import themes from "../_styles/theme";

const ThemeContext = createContext<any>(null);

export default function DarkmodeProvider({children}: {children: React.ReactNode}){
    const darkmode = useDarkmode();

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

'use client';
import { useState,createContext,useContext,useRef,useEffect } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../_styles/theme";
import useMediaQuery from "../_hooks/useMediaQuery";

const ThemeContext = createContext<any>(null);

export default function DarkmodeProvider({children}: {children: React.ReactNode}){
    const [theme, setTheme] = useState<string>('light');
    const systemPrefers = useMediaQuery('(prefers-color-scheme: dark)');
    const firstRender = useRef(true);

    const toggleTheme = () => {
        const root = window.document.documentElement;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        Object.entries(themes.themeProperties).forEach(([name, colorByTheme]) => {
            const cssVarName = `--${name}`;
            // @ts-ignore
            root.style.setProperty(cssVarName, colorByTheme[newTheme]);
        });
        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        if (firstRender.current) {
            const osTheme = systemPrefers ?  'dark':'light';
            const localTheme = window.localStorage.getItem('theme');
            const theme = localTheme || osTheme;
            setTheme(theme);
            firstRender.current = false;
        } else {
            setTheme(systemPrefers? 'dark' : 'light');
            toggleTheme();
        }
    }, [systemPrefers]);

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <ThemeProvider theme={{...themes.lightTheme}}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
export function useTheme(){
    const {theme,toggleTheme} = useContext(ThemeContext);
    return {theme,toggleTheme};
}
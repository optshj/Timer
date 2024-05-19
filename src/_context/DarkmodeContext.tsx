import {createContext,useContext} from "react";
import { ThemeProvider } from "styled-components"
import useDarkMode from "../_hooks/useDarkmode"
import themes from "../_styles/theme";

const defaultValue = {
    theme: true,
    toggleTheme: () => {},
};

const DarkmodeContext = createContext(defaultValue);

export default function DarkmodeProvider({children}: {children: React.ReactNode}){
    const darkmode = useDarkMode();
    return(
        <DarkmodeContext.Provider value={darkmode}>
            <ThemeProvider theme={{...darkmode.theme ? themes.darkTheme : themes.lightTheme }}>
                {children}
            </ThemeProvider>
        </DarkmodeContext.Provider>
    )
}
export function useTheme(){
    const {theme,toggleTheme} = useContext(DarkmodeContext);
    return {theme,toggleTheme};
}
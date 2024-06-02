import { ThemeProvider } from "styled-components"

import media from "../_styles/media";

export default function MediaProvider({children}: {children: React.ReactNode}){
    return(
        <ThemeProvider theme={{media}}>
            {children}
        </ThemeProvider>
    )
}
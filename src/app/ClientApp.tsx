'use client'
import ContextProvider from "../_context/ContextProvider";
import GlobalStyles from "../_styles/globalStyles";
import Header from "./_components/Header/Header";
import BottomTabBar from "./_components/BottomTabBar/BottomTabBar";
import DarkModeScript from "../_script/DarkModeScript";

export default function ClientApp({children}: Readonly<{children: React.ReactNode}>) {
    return(
        <ContextProvider>
            <GlobalStyles/>
            <DarkModeScript/>
            <Header/>
            {children}
            <BottomTabBar/>
        </ContextProvider>
    )

}
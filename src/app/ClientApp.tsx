'use client'
import { Roboto } from "next/font/google";
import ContextProvider from "../_context/ContextProvider";
import GlobalStyles from "../_styles/globalStyles";

import Header from "./_components/Header/Header";
import BottomTabBar from "./_components/BottomTabBar/BottomTabBar";
import KakaoDevelopers from "../_script/KakaoDevelopers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function ClientApp({children}: Readonly<{children: React.ReactNode}>){
    return(
        <ContextProvider>
          <GlobalStyles/>
          <body className={roboto.className}>
            <Header/>
              {children}
            <BottomTabBar/>
          </body> 
          <KakaoDevelopers/>
        </ContextProvider>
    )
}
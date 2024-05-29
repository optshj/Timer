'use client'
import { Roboto } from "next/font/google";
import RootStyleRegistry from "../_lib/registy";
import ContextProvider from "../_context/ContextProvider";
import GlobalStyles from "../_styles/globalStyles";
import Head from "next/head";

import Header from "./_components/Header/Header";
import BottomTabBar from "./_components/BottomTabBar/BottomTabBar";
import KakaoDevelopers from "../_script/KakaoDevelopers";
import DarkModeScript from "../_script/DarkModeScript";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <RootStyleRegistry>
        <ContextProvider>
          <GlobalStyles/>
          <body className={roboto.className}>
        <DarkModeScript/>
            <Header/>
            {children}
            <BottomTabBar/>
          </body> 
          <KakaoDevelopers/>
        </ContextProvider>
      </RootStyleRegistry>
    </html>
  );
}
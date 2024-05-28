'use client'
import styled from "styled-components";
import "../_styles/globals.css";
import { Roboto } from "next/font/google";
import RootStyleRegistry from "../_lib/registy";
import ContextProvider from "../_context/ContextProvider";
import Head from "next/head";

import Header from "./_components/Header/Header";
import BottomTabBar from "./_components/BottomTabBar/BottomTabBar";
import KakaoDevelopers from "../_script/KakaoDevelopers";

const Body = styled.body`
  background-color: ${({theme}) => theme.color.background};
`
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <RootStyleRegistry>
        <ContextProvider>
          <Body className={roboto.className}>
            <Header/>
            {children}
            <BottomTabBar/>
          </Body> 
          <KakaoDevelopers/>
        </ContextProvider>
      </RootStyleRegistry>
    </html>
  );
}
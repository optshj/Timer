'use client'
import { Roboto } from "next/font/google";
import "./globals.css";
import styled from "styled-components";
import RootStyleRegistry from "../_lib/registy";

import Header from "../_components/Header/Header";
import ContextProvider from "../_context/ContextProvider";

const Body = styled.body`
  background-color: ${({theme}) => theme.color.background};
  overflow:hidden;
`
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <RootStyleRegistry>
        <ContextProvider>
          <Body className={roboto.className}>
            <Header/>
            {children}
          </Body>
        </ContextProvider>
      </RootStyleRegistry>
    </html>
  );
}
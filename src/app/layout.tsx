'use client'
import { Roboto } from "next/font/google";
import "./globals.css";
import styled from "styled-components";

import Header from "../_components/Header/Header";
import Provider from "./DarkmodeProvider";

const Body = styled.body`
  background-color: ${({theme}) => theme.color.background};
`
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <Provider>
        <Body className={roboto.className}>
          <Header/>
          {children}
        </Body>
      </Provider>
    </html>
  );
}
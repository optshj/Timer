'use client'
import { Roboto } from "next/font/google";
import RootStyleRegistry from "../_lib/registy";
import ContextProvider from "../_context/ContextProvider";
import GlobalStyles from "../_styles/globalStyles";

import Header from "./_components/Header/Header";
import BottomTabBar from "./_components/BottomTabBar/BottomTabBar";

import DarkmodeScript from "../_script/DarkmodeScript";
import KakaoDevelopers from "../_script/KakaoDevelopers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ko">
      <head>
        <title>LifeTimer</title>
        <meta name="description" content="나의 남은 수명을 계산해보고, 건강관련 팁을 받아가세요."/>
        <meta name="robots" content="index,follow"/>
        <meta name="title" content="LifeTimer"/>
        <meta property="og:title" content="LifeTimer"/>
        <meta property='og:site_name' content="LifeTimer" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="남은 수명을 계산해보세요."/>
        <meta property="og:url" content="https://lifetimer1.vercel.app/"/>
        <meta property="og:locale" content="ko-KR" />
        <meta property="og:image" content="@/src/_asset/img/logo.jpg" />

        <link rel="canonical" href="https://lifetimer1.vercel.app/"/>
        <link rel="alternate" hrefLang="ko-KR" href="https://lifetimer1.vercel.app/" />

        <meta name="google-site-verification" content="huSHYvBftuJFa028T6tGdShVcrWecu4qHuQWqhyKrmU"/>
        <meta name="naver-site-verification" content="6a91f578032906178720889d161e75121aebd437" />
      </head>
      <RootStyleRegistry>
        <ContextProvider>
          <GlobalStyles/>
          <body className={roboto.className}>
            <DarkmodeScript/>
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
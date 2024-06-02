import RootStyleRegistry from "../_lib/registy";
import DarkmodeScript from "../_script/DarkmodeScript";
import ClientApp from "./ClientApp";
import Head from "next/head";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <Head>
        <title>LifeTimer</title>
        <meta name="description" content="나의 남은 수명을 계산해보고, 건강관련 팁을 받아가세요."/>
        <meta name="robots" content="index,follow"/>
        <meta property='og:site_name' content="LifeTimer" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="앞으로 얼마나 살 수 있을지 눈으로 확인해보세요"/>
        <meta property="og:url" content="https://lifetimer1.vercel.app/"/>
        <meta property="og:locale" content="ko_KR" />
        <link rel="canonical" href="https://lifetimer1.vercel.app/"/>
        <link rel="alternate" hrefLang="ko_KR" href="https://lifetimer1.vercel.app/" />
      </Head>
      <RootStyleRegistry>
        <ClientApp>
          {children}
        <DarkmodeScript/>
        </ClientApp>
      </RootStyleRegistry>
    </html>
  );
}
import Head from "next/head";

export default function SEO(){
    return(
        <Head>
            <title>LifeTimer</title>
            <meta name="description" content="나의 남은 수명을 계산해보고, 건강관련 팁을 받아가세요."/>
            <meta property="og:type" content="website" />
            <meta property="og:description" content="앞으로 얼마나 살 수 있을지 눈으로 확인해보세요"/>
            <meta property="og:url" content="https://lifetimer1.vercel.app/"/>
            <meta property="og:locale" content="ko_KR" />

            <link rel="canonical" href="https://lifetimer1.vercel.app/"/>
            <link rel="alternate" href="https://lifetimer1.vercel.app/" hrefLang="ko_KR"/>
            <link rel="manifest" href="manifest url"/>
        </Head>
    )
}
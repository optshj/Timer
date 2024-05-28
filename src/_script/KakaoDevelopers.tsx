import Script from "next/script";

export default function KakaoDevelopers() {
    const initKakao = () => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
    return(
        <>
            <link rel="preload" 
                href="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" 
                as="script" 
                crossOrigin="anonymous"/>
            <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
                integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4" 
                crossOrigin="anonymous"
                onLoad={initKakao}/>
        </>
    )
}
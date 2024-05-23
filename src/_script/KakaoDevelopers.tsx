import Script from "next/script";
import { useEffect } from "react";

export default function KakaoDevelopers() {
    const {Kakao} = window;
    useEffect(()=> {
        if (Kakao) {
            if (!Kakao.isInitialized()) {
            }
        }
    },[])
    return(
        <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"/>
    )
}
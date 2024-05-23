import { useEffect } from 'react';

export default function KaKaoShareButton() {
    const {Kakao} = window;
    useEffect(()=> {
        if (Kakao) {
            if (!Kakao.isInitialized()) {
                Kakao.init(process.env.KAKAO_DEVELOPERS_API_KEY);
            }
        }
        else {
            console.log("Kakao is not loaded");
        }
    },[])
    const handleKakaoShare = () => {
        if(Kakao) {

            Kakao.Share.sendScrap({
                requestUrl: 'https://optshj.github.io/',
                templateId: 108219,
            });
        }
    }
    return(
        <div onClick={handleKakaoShare}>카카오</div>
    )
}
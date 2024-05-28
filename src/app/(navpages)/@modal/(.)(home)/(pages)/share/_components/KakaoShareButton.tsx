import Image from "next/image";
import KakaoImg from "@/src/_asset/img/kakaotalk.svg";

import ShareButtonForm from "./ShareButtonForm";

export default function KaKaoShareButton() {
    const handleKakaoShare = () => {
        const {Kakao} = window;
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '내 남은수명은??',
                description: '',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
            },
        });
    }
    return(
        <ShareButtonForm text={"카카오톡"}>
            <Image src={KakaoImg} onClick={handleKakaoShare} alt="카카오톡 공유하기" width={60} height={60} priority={true}/>
        </ShareButtonForm>
    )
}

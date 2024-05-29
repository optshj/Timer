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
                description:'남은 수명을 계산하고 \n얼마나 남았는지 확인하자!',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
                imageUrl:'https://ifh.cc/g/Sxp7qR.png',
            },
        });
    }

    return(
        <ShareButtonForm text={"카카오톡"}>
            <Image src={KakaoImg} onClick={handleKakaoShare} alt="카카오톡 공유하기" width={60} height={60} priority={true}/>
        </ShareButtonForm>
    )
}

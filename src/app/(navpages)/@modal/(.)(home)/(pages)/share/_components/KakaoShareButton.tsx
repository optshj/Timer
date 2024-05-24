import styled from "styled-components";
import Image from "next/image";
import KakaoImg from "@/src/_asset/img/kakaotalk_sharing_btn_small.png";

const Button = styled.div`
    color: ${({theme}) => theme.color.header_font};
`
export default function KaKaoShareButton() {
    const handleKakaoShare = () => {
        const {Kakao} = window;
        
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '테스트',
                description: '테스트',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
            },
        });
    }
    return(
        <Image src={KakaoImg} onClick={handleKakaoShare} alt="카카오톡 공유하기" width={60} height={60}/>
    )
}

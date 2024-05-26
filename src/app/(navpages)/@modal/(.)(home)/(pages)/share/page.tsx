'use client'
import styled from "styled-components";

import KaKaoShareButton from "./_components/KakaoShareButton"
import UrlButton from "./_components/UrlButton"

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.div`
    margin-top:150px;
    font-size:32px;
    font-weight:600;
    color:${({theme}) => theme.color.text};
`
const ShareForm = styled.div`
    margin-top: 50px;
    display:flex;
    flex-direction: row;
    gap:20px;
`
export default function Page(){
    return(
        <Wrapper>
            <Title>공유하기</Title>
            <ShareForm>
                <KaKaoShareButton/>
                <UrlButton/>
            </ShareForm>
        </Wrapper>
    )
}
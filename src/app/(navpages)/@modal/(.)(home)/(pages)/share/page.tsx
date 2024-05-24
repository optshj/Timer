'use client'
import styled from "styled-components";

import KaKaoShareButton from "./_components/KakaoShareButton"

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.div`
    font-size:24px;
    color:${({theme}) => theme.color.text};
`
export default function Page(){
    return(
        <Wrapper>
            <Title>공유하기</Title>
            <KaKaoShareButton/>
        </Wrapper>
    )
}
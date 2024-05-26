'use client'
import styled from "styled-components"

import { useRouter } from "next/navigation";
import {useLeftLife} from "@/src/_context/LeftLifeContext"

import PercentageBar from "../_components/PercentageBar";

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    position:absolute;
    top:120px;
    font-size:24px;
    font-weight:600;
    text-align: center;
    white-space: nowrap;
    color: ${({theme}) => theme.color.text};
`
const DeathDate = styled.div`
    position: absolute;
    top:200px;
    font-size:36px;
    font-weight: 500;
    color: ${({theme}) => theme.color.text};
`
const Button = styled.button`
    position: absolute;
    bottom:${({theme}) => theme.position.modal_button}; 
    width:360px;
    height:70px;
    font-size:22px;
    color:${({theme}) => theme.color.background};
    border:none;
    border-radius: 10px;
    text-align: center;
    background-color: ${({theme}) => theme.color.input_focus};
    cursor:pointer;
    ${({theme}) => theme.media.small`
        width:calc(100vw - 88px);
    `}
`

export default function Page(){
    const {deathDate} = useLeftLife();

    const router = useRouter();
    const onExit = () => router.back();
    return(
        <Wrapper>
            <Title>사망 예정일</Title>
            <DeathDate>{`${deathDate.years}년 ${deathDate.months}월 ${deathDate.days}일`}</DeathDate>
            <PercentageBar/>
            <Button onClick={onExit}>타이머 구경하러 가기</Button>
        </Wrapper>
    )
}
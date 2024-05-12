'use client'
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.button`
    border: none;
    font-size:24px;
    padding:10px;
    cursor:pointer;
    color:${({theme}) => theme.color.button_text};
    background-color:${({theme}) => theme.color.button_background};
    border-radius: 5px;
    &:hover{
        background-color: ${({theme}) => theme.color.hover_color};
    }
`

export default function CalcLifeButton(){
    return(
        <Link href={"/birthdate"} scroll={false}>
            <Wrapper>
                수명 계산하기
            </Wrapper>
        </Link>
    )
}
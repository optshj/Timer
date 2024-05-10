'use client'
import { useState } from 'react';
import styled from "styled-components";
import CalcLifeModal from './CalcLifeModal';

const Wrapper = styled.button`
    border: none;
    font-size:24px;
    padding:6px;
    cursor:pointer;
    color:${({theme}) => theme.color.button_text};
    background-color:${({theme}) => theme.color.button_background};
    &:hover{
        background-color: ${({theme}) => theme.color.hover_color};
    }
`

export default function CalcLifeButton(){
    const [openModal,setOpenModal] = useState(false);

    return(
        <Wrapper onClick={() => setOpenModal(true)}>
            수명 계산하기
            <CalcLifeModal isOpen={openModal} onRequestClose={() => setOpenModal(false)}/>
        </Wrapper>
    )
}
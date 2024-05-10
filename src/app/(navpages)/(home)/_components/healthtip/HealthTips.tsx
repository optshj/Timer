'use client'
import React from "react";
import styled from "styled-components"

import healthTips from "./HealthTips.json";

const Wrapper = styled.div`
    display:flex;
    width:600px;
    padding:12px;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color:${({theme}) => theme.color.text_color};
    box-shadow: 
        5px 5px 10px ${({theme}) => theme.color.shadow},
        -5px -5px 10px ${({theme}) => theme.color.shadow},
        -5px 5px 10px ${({theme}) => theme.color.shadow},
        5px -5px 10px ${({theme}) => theme.color.shadow};
`
const Tip = styled.div`
    font-size:24px;
`
const Summary = styled.div`
    font-size:18px;
`
function getRandomNumber(){
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 2**32;
}
function getRandomHealthTip(){
    const healtyTipArrays = healthTips.tips;
    const randomIndex = Math.floor(getRandomNumber() * healtyTipArrays.length);
    return healtyTipArrays[randomIndex];
}

function HealthTip(){
    const randomTip = getRandomHealthTip();
    return(
        <Wrapper>
            <Tip>{randomTip.tip}</Tip>
            <Summary>{randomTip.summary}</Summary>
        </Wrapper>
    )
}
export default React.memo(HealthTip);
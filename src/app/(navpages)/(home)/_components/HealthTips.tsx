import React from "react";
import styled from "styled-components"

import healthTipsData from "@/src/_data/healthTips.json";

const Wrapper = styled.div`
    display:flex;
    width:600px;
    padding:12px;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color:${({theme}) => theme.color.text_color};
    border-radius: 10px;
    box-shadow: 
        5px 5px 10px ${({theme}) => theme.color.shadow},
        -5px -5px 10px ${({theme}) => theme.color.shadow},
        -5px 5px 10px ${({theme}) => theme.color.shadow},
        5px -5px 10px ${({theme}) => theme.color.shadow};
`
const Font = styled.div<{$fontSize:string}>`
    font-size:${(props) => props.$fontSize};
`

function getRandomNumber(){
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 2**32;
}
function getRandomHealthTip(){
    const healtyTipArrays = healthTipsData.tips;
    const randomIndex = Math.floor(getRandomNumber() * healtyTipArrays.length);
    return healtyTipArrays[randomIndex];
}

export default React.memo(function HealthTip(){
    const randomTip = getRandomHealthTip();
    
    return(
        <Wrapper>
            <Font $fontSize={"24px"}>{randomTip.tip}</Font>
            <Font $fontSize={"18px"}>{randomTip.summary}</Font>
        </Wrapper>
    )
})
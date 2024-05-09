import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:400px;
    height:30px;
    background-color: #909090;
    margin-top:20px;
    border-radius:6px;
    ${({theme}) => theme.media.medium`
        width:300px;
    `}
`
interface ProgressProps{
    $ratio:number;
}
const Percentage = styled.div<ProgressProps>`
    width: ${props => props.$ratio}%;
    height:30px;
    background-color: ${({theme}) => theme.color.text_color};
    border-radius: 6px;
`

interface PercentageBarProps {
    ratio: number;
}
export default function PercentageBar({ratio}:PercentageBarProps){
    const percentage = Math.floor(ratio);
    
    return(
        <Wrapper>
            <Percentage $ratio={percentage}/>
        </Wrapper>
    )
}
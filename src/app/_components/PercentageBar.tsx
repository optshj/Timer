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
    background-color: ${({theme}) => theme.color.text};
    border-radius: 6px;
`

interface PercentageBarProps {
    ratio: number;
}
export default React.memo(function PercentageBar(props:PercentageBarProps){
    const percentage = Math.floor(props.ratio);
    return(
        <Wrapper>
            <Percentage $ratio={percentage}/>
        </Wrapper>
    )
})
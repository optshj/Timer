import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:600px;
    height:50px;
    background-color: #909090;
    margin-top:20px;
    border-radius:6px;
    ${({theme}) => theme.media.medium`
        width:300px;
    `}
`
const Percentage = styled.div<{$ratio:number}>`
    width: ${props => props.$ratio}%;
    height:100%;
    background-color: var(--text);
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
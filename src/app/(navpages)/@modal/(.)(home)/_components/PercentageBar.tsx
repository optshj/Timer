import React, { useState } from "react";
import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext";
import { useTime } from "@/src/_context/TimeContext";
import useAnimationFrame from "@/src/_hooks/useAnimationFrame";

const Wrapper = styled.div`
    position:absolute;
    bottom:200px;
`
const PercentageBackground = styled.div`
    width:300px;
    height:30px;
    background-color: #909090;
    margin-top:20px;
    border-radius:6px;
`
const Text = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({theme}) => theme.color.text};
    text-align: center;
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

interface calcSecondsProps{
    years: number;
    months: number;
    days: number;
}
function calcSeconds({years,months,days}: calcSecondsProps): number {
    const seconds = years * 365 * 24 * 60 * 60 + months * 30 * 24 * 60 * 60 + days * 24 * 60 * 60;
    return seconds;
}

export default React.memo(function PercentageBar(){
    const {fullLife,leftLife} = useLeftLife();
    const {midnight} = useTime();
    const [lifeRatio,setLifeRatio] = useState<number>(0);
    
    useAnimationFrame(() => {
        const today = new Date();
        const timeDiff = Math.abs(midnight.getTime() - today.getTime());
        const fullLifeSeconds = calcSeconds(fullLife);
        const leftLifeSeconds = calcSeconds(leftLife) + timeDiff/1000;

        const ratio = (1 -  leftLifeSeconds / fullLifeSeconds)*100;
        setLifeRatio(ratio > 100 ? 100 : ratio);
    })

    return(
        <Wrapper>
            <Text>인생이 {lifeRatio.toFixed(8)}% 지났습니다</Text>
            <PercentageBackground>
                <Percentage $ratio={Math.floor(lifeRatio)}/>
            </PercentageBackground>
        </Wrapper>
    )
})
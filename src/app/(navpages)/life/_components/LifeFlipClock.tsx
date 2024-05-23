import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext"

import Text from "../../../_components/Public/Text";
import FlipClockDate from "../../../_components/FlipClocks/FlipClockDate"
import FlipClockTime from "../../../_components/FlipClocks/FlipClockTime"


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function LifeFlipClock(){
    const {leftLife} = useLeftLife();
    
    return(
        <>
            <Wrapper>
                <Text text={"남은 수명"}/>
            </Wrapper>
            <FlipClockDate text={"년"} date={leftLife.years}/>
            <FlipClockDate text={"월"} date={leftLife.months}/>
            <FlipClockDate text={"일"} date={leftLife.days}/>
            <FlipClockTime/>
        </>
    )
}
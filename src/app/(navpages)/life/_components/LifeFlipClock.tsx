import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext"

import Text from "../../_components/Text";
import FlipClockYear from "../../_components/FlipClocks/FlipClockYear"
import FlipClockMonth from "../../_components/FlipClocks/FlipClockMonth"
import FlipClockDay from "../../_components/FlipClocks/FlipClockDay"
import FlipClockTime from "../../_components/FlipClocks/FlipClockTime"


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
                <Text text={"죽기까지 남은 시간"}/>
            </Wrapper>
            <FlipClockYear date={leftLife.years}/>
            <FlipClockMonth date={leftLife.months}/>
            <FlipClockDay date={leftLife.days}/>
            <FlipClockTime/>
        </>
    )
}
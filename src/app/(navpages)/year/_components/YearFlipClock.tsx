import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext";

import Text from "../../_components/Text";
import FlipClockMonth from "../../_components/FlipClocks/FlipClockMonth";
import FlipClockDay from "../../_components/FlipClocks/FlipClockDay";
import FlipClockTime from "../../_components/FlipClocks/FlipClockTime";


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function YearFlipClock(){
    const currentDate = new Date();
    const {todayDate} = useLeftLife();
    const lastDayOfMonth = new Date(todayDate.years, todayDate.months + 1, 0).getDate();
    return(
        <>
            <Wrapper>
                <Text text={"올해가 끝나기까지 남은 시간"}/>
            </Wrapper>
            <FlipClockMonth date={11-currentDate.getMonth()}/>
            <FlipClockDay date={lastDayOfMonth-currentDate.getDay()}/>
            <FlipClockTime/>
        </>
    )
}
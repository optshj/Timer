import styled from "styled-components";

import { useTime } from "@/src/_context/TimeContext";

import Text from "../../../_components/Shared/Text";
import FlipClockDate from "../../../_components/FlipClocks/FlipClockDate";
import FlipClockTime from "../../../_components/FlipClocks/FlipClockTime";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function YearFlipClock(){
    const currentDate = new Date();
    const {lastDayOfMonth} = useTime();

    return(
        <>
            <Wrapper>
                <Text text={"올해가 끝나기까지 남은 시간"}/>
            </Wrapper>
            <FlipClockDate text={"월"} date={11-currentDate.getMonth()}/>
            <FlipClockDate text={"일"} date={lastDayOfMonth-currentDate.getDate()}/>
            <FlipClockTime/>
        </>
    )
}
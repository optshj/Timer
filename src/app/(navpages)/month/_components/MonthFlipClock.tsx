import styled from "styled-components";

import { useTime } from "@/src/_context/TimeContext";

import Text from "../../../_components/Public/Text";
import FlipClockDate from "../../../_components/FlipClocks/FlipClockDate";
import FlipClockTime from "../../../_components/FlipClocks/FlipClockTime";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function MonthFlipClock() {
    const {today, lastDayOfMonth} = useTime();

    return(
        <>
            <Wrapper>
                <Text text={"이번 달이 끝나기까지"}/>
            </Wrapper>
            <FlipClockDate text={"일"} date={lastDayOfMonth - today.getDate()}/>
            <FlipClockTime/>
        </>
    )
}
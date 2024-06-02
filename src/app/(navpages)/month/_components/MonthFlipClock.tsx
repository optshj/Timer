import { useTime } from "@/src/_context/TimeContext";

import Text from "../../../_components/Public/Text";
import FlipClockDate from "../../../_components/FlipClocks/FlipClockDate";
import FlipClockTime from "../../../_components/FlipClocks/FlipClockTime";

export default function MonthFlipClock() {
    const {today, lastDayOfMonth} = useTime();

    return(
        <>
            <Text text={"이번 달이 끝나기까지"}/>
            <FlipClockDate text={"일"} date={lastDayOfMonth - today.getDate()}/>
            <FlipClockTime/>
        </>
    )
}
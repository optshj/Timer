import { useTime } from "@/src/_context/TimeContext";

import Text from "../../../_components/Public/Text";
import FlipClockDate from "../../../_components/FlipClocks/FlipClockDate";
import FlipClockTime from "../../../_components/FlipClocks/FlipClockTime";

export default function YearFlipClock(){
    const currentDate = new Date();
    const {lastDayOfMonth} = useTime();

    return(
        <>
            <Text text={"올해가 끝나기까지"}/>
            <FlipClockDate text={"월"} date={11-currentDate.getMonth()}/>
            <FlipClockDate text={"일"} date={lastDayOfMonth-currentDate.getDate()}/>
            <FlipClockTime/>
        </>
    )
}
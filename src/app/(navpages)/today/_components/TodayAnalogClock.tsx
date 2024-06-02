import { useTime } from "@/src/_context/TimeContext";

import Text from "@/src/app/_components/Public/Text";
import AnalogClock from "@/src/app/_components/Public/AnalogClock";

export default function TodayAnalogClock(){
    const { today } = useTime();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    return(
        <>
            <Text text={`오늘 하루 중`}/>
            <Text text={`${hours}시 ${minutes}분 ${seconds}초를`}/>
            <Text text={`지나가고 있습니다`}/>
            <AnalogClock hour={hours} minute={minutes} second={seconds}/>
        </>
    )
}
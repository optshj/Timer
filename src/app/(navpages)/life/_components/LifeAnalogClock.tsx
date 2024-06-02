import { useLeftLife } from "@/src/_context/LeftLifeContext";

import Text from "@/src/app/_components/Public/Text";
import AnalogClock from "@/src/app/_components/Public/AnalogClock";

interface calcSecondsProps{
    years: number;
    months: number;
    days: number;
}
function calcSeconds({years,months,days}: calcSecondsProps){
    const seconds = years * 365 * 24 * 60 * 60 + months * 30 * 24 * 60 * 60 + days * 24 * 60 * 60;
    return seconds;
}

export default function LifeAnalogClock(){
    const { leftLife,fullLife } = useLeftLife();
    const fullLifeSeconds = calcSeconds(fullLife);
    const leftLifeSeconds = calcSeconds(leftLife);
    const ratio = 1 - leftLifeSeconds/fullLifeSeconds;
    const remainingHours = ratio*24;

    const hours = Math.floor(remainingHours);
    const minutes = Math.floor((remainingHours - hours) * 60);
    const seconds = Math.floor(((remainingHours - hours) * 60 - minutes) * 60);

    return(
        <>
            <Text text={`인생의 하루 중`}/>
            <Text text={`${hours}시 ${minutes}분 ${seconds}초를`}/>
            <Text text={`지나가고 있습니다`}/>
            <AnalogClock hour={hours} minute={minutes} second={seconds}/>
        </>
    )
}
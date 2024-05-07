import {useState} from "react"

import useAnimationFrame from "@/src/_hooks/useAnimationFrame";
import { useTime } from "@/src/_context/TimeContext";

import Text from "../../_components/Text"

const calcSeconds = (days: number) => {
    const seconds = days * 24 * 60 * 60
    return seconds;
}

function MonthPercentage(){
    const {today,lastDayOfMonth,timeDiff} = useTime();
    const [monthRatio,setMonthRatio] = useState<number>(0);

    const monthSeconds = calcSeconds(today.getDate());
    const leftMonthSeconds = calcSeconds(lastDayOfMonth);
    
    useAnimationFrame(() => {
        const ratio = ((leftMonthSeconds) / monthSeconds)*100;
        setMonthRatio(ratio);
    })
    return(
        <Text text={`이번 달이 ${monthRatio.toFixed(5)}% 지났습니다`}/>
    )
}
export default MonthPercentage;
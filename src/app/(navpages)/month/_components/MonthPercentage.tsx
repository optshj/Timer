import {useState} from "react"

import Text from "../../_components/Text"
import useAnimationFrame from "@/src/_hooks/useAnimationFrame";
import { useLeftLife } from "@/src/_context/LeftLifeContext";

const calcSeconds = (days: number) => {
    const today = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const timeDiff = Math.abs(midnight.getTime() - today.getTime());
    const seconds = days * 24 * 60 * 60 + timeDiff/1000;
    return seconds;
}

function MonthPercentage(){
    const {todayDate} = useLeftLife();
    const lastDayOfMonth = new Date(todayDate.years, todayDate.months + 1, 0).getDate();
    
    const [lifeRatio,setLifeRatio] = useState<number>(0);

    useAnimationFrame(() => {
        const monthSeconds = calcSeconds(todayDate.days);
        const leftMonthSeconds = calcSeconds(lastDayOfMonth);
        const ratio = (1 - (leftMonthSeconds) / monthSeconds)*100;
        setLifeRatio(ratio);
    })
    return(
        <Text text={`이번 달이 ${lifeRatio.toFixed(10)}% 지났습니다`}/>
    )
}
export default MonthPercentage;
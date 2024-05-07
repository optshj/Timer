import {useState} from "react"

import Text from "../../_components/Text"
import useAnimationFrame from "@/src/_hooks/useAnimationFrame";
import { useLeftLife } from "@/src/_context/LeftLifeContext";
import { useTime } from "@/src/_context/TimeContext";

interface Date{
    years: number;
    months: number;
    days: number;
}
const calcSeconds = ({years, months, days}: Date) => {
    const seconds = years * 365 * 24 * 60 * 60 + months * 30 * 24 * 60 * 60 + days * 24 * 60 * 60;
    return seconds;
}

function LifePercentage(){
    const {fullLife,leftLife} = useLeftLife();
    const [lifeRatio,setLifeRatio] = useState<number>(0);
    const fullLifeSeconds = calcSeconds(fullLife);
    let leftLifeSeconds = calcSeconds(leftLife);
    
    useAnimationFrame(() => {
        const {timeDiff} = useTime();

        const ratio = (1 - (leftLifeSeconds) / fullLifeSeconds)*100;
        setLifeRatio(ratio > 100 ? 100 : ratio);
    })
    return(
        <Text text={` 인생이 ${lifeRatio.toFixed(10)}% 지났습니다`}/>
    )
}
export default LifePercentage;
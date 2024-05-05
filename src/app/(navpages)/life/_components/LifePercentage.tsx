import {useState} from "react"

import Text from "../../_components/Text"
import useAnimationFrame from "@/src/_hooks/useAnimationFrame";
import { useLeftLife } from "@/src/_context/LeftLifeContext";

interface Date{
    years: number;
    months: number;
    days: number;
}
const calcSeconds = ({years = 0, months = 0, days = 0}: Date) => {
    const today = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const timeDiff = Math.abs(midnight.getTime() - today.getTime());
    const seconds = years * 365 * 24 * 60 * 60 + months * 30 * 24 * 60 * 60 + days * 24 * 60 * 60 + timeDiff/1000;
    return seconds;
}

function LifePercentage(){
    const {fullLife,leftLife} = useLeftLife();
    const [lifeRatio,setLifeRatio] = useState<number>(0);
    useAnimationFrame(() => {
        const fullLifeSeconds = calcSeconds(fullLife);
        const leftLifeSeconds = calcSeconds(leftLife);
        const ratio = (1 - (leftLifeSeconds) / fullLifeSeconds)*100;
        setLifeRatio(ratio);
    })
    return(
        <Text text={` 인생이 ${lifeRatio.toFixed(10)}% 지났습니다`}/>
    )
}
export default LifePercentage;
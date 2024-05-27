import { useState } from "react"

import { useLeftLife } from "@/src/_context/LeftLifeContext";
import { useTime } from "@/src/_context/TimeContext";
import useAnimationFrame from "@/src/_hooks/useAnimationFrame";

import Text from "../../../_components/Public/Text"
import PercentageBar from "../../../_components/Public/PercentageBar";

interface calcSecondsProps{
    years: number;
    months: number;
    days: number;
}
function calcSeconds({years,months,days}: calcSecondsProps): number {
    const seconds = years * 365 * 24 * 60 * 60 + months * 30 * 24 * 60 * 60 + days * 24 * 60 * 60;
    return seconds;
}

export default function LifePercentage(){
    const {fullLife,leftLife} = useLeftLife();
    const {midnight} = useTime();
    const [lifeRatio,setLifeRatio] = useState<number>(0);
    
    useAnimationFrame(() => {
        const today = new Date();
        const timeDiff = Math.abs(midnight.getTime() - today.getTime());
        const fullLifeSeconds = calcSeconds(fullLife);
        const leftLifeSeconds = calcSeconds(leftLife) + timeDiff/1000;

        const ratio = (1 -  leftLifeSeconds / fullLifeSeconds)*100;
        setLifeRatio(ratio > 100 ? 100 : ratio);
    })
    
    return(
        <>
            <Text text={`지나간 인생`}/>
            <Text text={`${lifeRatio.toFixed(8)}%`}/>
            <PercentageBar ratio={Math.floor(lifeRatio)}/>
        </>
    )
}
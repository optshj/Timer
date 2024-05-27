import { useState } from "react"

import useAnimationFrame from "@/src/_hooks/useAnimationFrame"

import Text from "../../../_components/Public/Text"
import PercentageBar from "../../../_components/Public/PercentageBar"

export default function TodayPercentage(){
    const [todayRatio,setTodayRatio] = useState<number>(0);

    useAnimationFrame(() => {
        const today = new Date();
        const startOfDay = new Date(today.getFullYear(),today.getMonth(),today.getDate());
        const elapsedDaySeconds = today.getTime() - startOfDay.getTime();
        const fullDaySeconds = 24 * 60 * 60 * 1000;
        const ratio = (elapsedDaySeconds/fullDaySeconds)*100;
        setTodayRatio(ratio > 100 ? 100 : ratio);
    })
    return(
        <>
            <Text text={"오늘이"}/>
            <Text text={`${todayRatio.toFixed(4)}%`}/>
            <Text text={"지났습니다"}/>
            <PercentageBar ratio={Math.floor(todayRatio)}/>
        </>
    )
}
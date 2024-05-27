import { useState } from "react"

import { useTime } from "@/src/_context/TimeContext";
import useAnimationFrame from "@/src/_hooks/useAnimationFrame";

import Text from "../../../_components/Public/Text"
import PercentageBar from "../../../_components/Public/PercentageBar";

export default function MonthPercentage(){
    const {lastDayOfMonth} = useTime();
    const [monthRatio,setMonthRatio] = useState<number>(0);

    useAnimationFrame(() => {
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(),today.getMonth(),0);
        const elapsedMonthSeconds = today.getTime() - startOfMonth.getTime();
        const fullMonthSeconds = lastDayOfMonth * 24 * 60 * 60 * 1000;
        const ratio = elapsedMonthSeconds/fullMonthSeconds*100;
        setMonthRatio(ratio > 100 ? 100 : ratio);
    })
    return(
        <>
            <Text text={"이번 달이"}/>
            <Text text={`${monthRatio.toFixed(5)}%`}/>
            <Text text={"지났습니다"}/>
            <PercentageBar ratio={Math.floor(monthRatio)}/>
        </>
    )
}
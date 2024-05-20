import { useState } from "react"

import useAnimationFrame from "@/src/_hooks/useAnimationFrame"

import Text from "../../../_components/Shared/Text"
import PercentageBar from "../../../_components/Shared/PercentageBar";

export default function YearPercentage(){
    const [yearRatio,setYearRatio] = useState<number>(0);
    
    useAnimationFrame(() => {
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(),0,0);
        const elapsedYearSeconds = today.getTime() - startOfYear.getTime();
        const fullYearSeconds = today.getFullYear() % 4 === 0 ? 366 * 24 * 60 * 60 * 1000 : 365 * 24 * 60 * 60 * 1000;
        const ratio = (elapsedYearSeconds/fullYearSeconds)*100;
        setYearRatio(ratio > 100 ? 100 : ratio);
    })
    
    return(
        <>
            <Text text={`올해가 ${yearRatio.toFixed(6)}% 지났습니다`}/>
            <PercentageBar ratio={Math.floor(yearRatio)}/>
        </>
    )
}
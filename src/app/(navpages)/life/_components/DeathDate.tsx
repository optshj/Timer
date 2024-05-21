import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext"

import Text from "@/src/app/_components/Shared/Text"

export default function DeathDate(){
    const {deathDate} = useLeftLife();

    return(
        <>
            <Text text={'사망예정일'}/>
            <Text text={`${deathDate.years}년 ${deathDate.months}월 ${deathDate.days}일`}/>
        </>
    )
}
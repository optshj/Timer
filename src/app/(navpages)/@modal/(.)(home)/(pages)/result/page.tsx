'use client'
import styled from "styled-components"

import {useLeftLife} from "@/src/_context/LeftLifeContext"

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const DeathDate = styled.div`
    font-size:24px;
`

export default function Page(){
    const {deathDate} = useLeftLife();
    return(
        <Wrapper>
            <DeathDate>{`${deathDate.years}년 ${deathDate.months}월 ${deathDate.days}일`}</DeathDate>
        </Wrapper>
    )
}
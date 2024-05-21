import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext"

const Title = styled.div`
    font-size:48px;
    color:${({theme}) => theme.color.text};
`
const TextWrapper = styled.div`
    display: flex;
`
const Text = styled.div<{$highlight?:boolean}>`
    font-size:60px;
    font-weight:600;
    color:${props => props.$highlight ? props.theme.color.input_focus : props.theme.color.text};
    white-space: pre;
`

export default function DeathDate(){
    const {deathDate} = useLeftLife();
    return(
        <>
            <Title>사망예정일</Title>
            <TextWrapper>
                <Text $highlight={true}>{deathDate.years}년 </Text>
                <Text>{deathDate.months}월 </Text>
                <Text>{deathDate.days}일</Text>
            </TextWrapper>
        </>
    )
}
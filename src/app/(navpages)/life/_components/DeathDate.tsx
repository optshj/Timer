import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext"

const Title = styled.div`
    font-size:48px;
    color: var(--text);
    margin-bottom:16px;
`
const TextWrapper = styled.div`
    display: flex;
`
const Text = styled.div`
    font-size:60px;
    font-weight:600;
    color:var(--text);
    white-space: pre;
    ${({theme}) => theme.media.small`
        font-size:40px;
    `}
`
const HighLightText = styled(Text)`
    color: var(--input_focus);
`

export default function DeathDate(){
    const {deathDate} = useLeftLife();
    return(
        <>
            <Title>사망예정일</Title>
            <TextWrapper>
                <HighLightText>{deathDate.years}년 </HighLightText>
                <Text>{deathDate.months}월 </Text>
                <Text>{deathDate.days}일</Text>
            </TextWrapper>
        </>
    )
}
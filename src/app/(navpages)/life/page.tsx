'use client';
import { useState } from "react";
import styled from "styled-components";

import TimeCalender from "../_components/TimeCalender";
import Text from "../_components/Text";
import FlipClockYear from "../_components/FlipClocks/FlipClockYear";

import { useLeftLife } from "@/src/_context/LeftLifeContext";
import FlipClockMonth from "../_components/FlipClocks/FlipClockMonth";
import FlipClockDay from "../_components/FlipClocks/FlipClockDay";
import FlipClockTime from "../_components/FlipClocks/FlipClockTime";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Life() {
  const { birthDate, deathDate, todayDate, leftLife, fullLife } = useLeftLife();
  
  const componentCount = 2;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }

  return (
    <Wrapper onClick={changeComponent}>
      {currentComponent === 1 && 
      <>
        <FlipClockYear date={leftLife.years}/>
        <FlipClockMonth date={leftLife.months}/>
        <FlipClockDay date={leftLife.days}/>
        <FlipClockTime/>
      </>} 
      {currentComponent === 2 && 
      <>
        <Text text={`남은 인생이 ${leftLife.years}년 남았어요`} />
        <TimeCalender start={birthDate.years} middle={todayDate.years} end={deathDate.years}/>
      </>}
    </Wrapper>
  );
}
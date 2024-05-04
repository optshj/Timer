'use client';
import { useState } from "react";
import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext";

import TimeCalender from "../_components/TimeCalender";
import Text from "../_components/Text";
import FlipClockYear from "../_components/FlipClocks/FlipClockYear";
import FlipClockMonth from "../_components/FlipClocks/FlipClockMonth";
import FlipClockDay from "../_components/FlipClocks/FlipClockDay";
import FlipClockTime from "../_components/FlipClocks/FlipClockTime";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
        <Wrapper>
          <Text text={"죽기까지 남은 시간"}/>
        </Wrapper>
        <FlipClockYear date={leftLife.years}/>
        <FlipClockMonth date={leftLife.months}/>
        <FlipClockDay date={leftLife.days}/>
        <FlipClockTime/>
      </>} 
      {currentComponent === 2 && 
      <>
          <Text text={`인생이 ${leftLife.years}년 남았습니다`} />
        <TimeCalender start={birthDate.years} middle={todayDate.years} end={deathDate.years}/>
      </>}
    </Wrapper>
  );
}
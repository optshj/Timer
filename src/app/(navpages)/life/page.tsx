'use client';
import { useState } from "react";
import styled from "styled-components";

import TimeCalender from "../_components/TimeCalender";
import Text from "../_components/Text";

import { useLeftLife } from "@/src/_context/LeftLifeContext";
import FlicpClock from "../_components/FlipClock";

const Wrapper = styled.div`
`
export default function Life() {
  const { birthDate, deathDate, todayDate, leftLife, fullLife } = useLeftLife();
  
  const componentCount = 1;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }

  return (
    <Wrapper onClick={changeComponent}>
      <FlicpClock></FlicpClock>
      <Text text={`남은 인생이 ${leftLife.years}년 남았어요`} />
      <TimeCalender start={birthDate.years} middle={todayDate.years} end={deathDate.years}/>
    </Wrapper>
  );
}
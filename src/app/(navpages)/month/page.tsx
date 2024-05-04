'use client';
import {useState} from "react";
import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext";

import TimeCalender from "../_components/TimeCalender";
import Text from "../_components/Text";
import FlipClockDay from "../_components/FlipClocks/FlipClockDay";
import FlipClockTime from "../_components/FlipClocks/FlipClockTime";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function Life() {
  const { todayDate } = useLeftLife();
  const lastDayOfMonth = new Date(todayDate.years, todayDate.months + 1, 0).getDate();

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
          <Text text={"이번 달이 끝나기까지 남은 시간"}/>
        </Wrapper>
        <FlipClockDay date={lastDayOfMonth - todayDate.days}/>
        <FlipClockTime/>
      </>
      }
      {currentComponent === 2 &&
      <>
        <Text text={`이번 달이 ${lastDayOfMonth - todayDate.days}일 남았습니다`} />
        <TimeCalender start={1} middle={todayDate.days} end={lastDayOfMonth}/>
      </>}
    </Wrapper> 
  );
}
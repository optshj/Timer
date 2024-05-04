'use client';
import { useState } from "react";
import styled from "styled-components";

import LifeCalender from "../_components/TimeCalender";
import Text from "../_components/Text";
import FlipClockMonth from "../_components/FlipClocks/FlipClockMonth";
import FlipClockDay from "../_components/FlipClocks/FlipClockDay";
import FlipClockTime from "../_components/FlipClocks/FlipClockTime";
import { useLeftLife } from "@/src/_context/LeftLifeContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function getWeekNumber(date:Date) {
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((Number(date) - Number(yearStart)) / 86400000) + 1) / 7);

  return weekNumber;
}

export default function Life() {
  const currentDate = new Date();

  const {todayDate} = useLeftLife();

  const currentWeek = getWeekNumber(currentDate);
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
          <Text text={"올해가 끝나기까지 남은 시간"}/>
        </Wrapper>
        <FlipClockMonth date={11-currentDate.getMonth()}/>
        <FlipClockDay date={lastDayOfMonth-currentDate.getDay()}/>
        <FlipClockTime/>

      </>}
      {
        currentComponent === 2 &&
        <>
          <Text text={`올해가 ${52-currentWeek}주 남았습니다`} />
          <LifeCalender start={0} middle={currentWeek} end={52} />
        </>
      }
    </Wrapper> 
  );
}
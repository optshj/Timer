'use client';
import { useState } from "react";
import styled from "styled-components";

import { useLeftLife } from "@/src/_context/LeftLifeContext";

import TimeCalender from "../_components/TimeCalender";
import Text from "../_components/Text";
import FlipClockTime from "../_components/FlipClocks/FlipClockTime";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Life() {
  const currentDate = useLeftLife().today;
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
          <Text text={"오늘이 끝나기까지 남은 시간"}/>
        </Wrapper>
        <FlipClockTime/>
      </>
      }
      {currentComponent === 2 &&
      <>
        <Text text={`오늘이 ${23 - currentDate.getHours()}시간 ${59-currentDate.getMinutes()}분 ${59-currentDate.getSeconds()}초 남았습니다`} />
        <TimeCalender start={0} middle={currentDate.getHours()+1} end={24} />
      </>
      }
    </Wrapper> 
  );
}
'use client';
import { useState } from "react";
import styled from "styled-components";

import TodayCalender from "./_components/TodayCalender";
import TodayFlipClock from "./_components/TodayFlipClock";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Life() {
  const componentCount = 2;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }
  return (
    <Wrapper onClick={changeComponent}>
      {currentComponent === 1 && <TodayFlipClock/>}
      {currentComponent === 2 && <TodayCalender/>}
    </Wrapper> 
  );
}
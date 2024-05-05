'use client';
import {useState} from "react";
import styled from "styled-components";

import MonthsCalender from "./_components/MonthCalender";
import MonthsFlipClock from "./_components/MonthFlipClock";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function Month() {
  const componentCount = 2;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }

  return (
    <Wrapper onClick={changeComponent}>
      {currentComponent === 1 &&<MonthsFlipClock/>}
      {currentComponent === 2 && <MonthsCalender/>}
    </Wrapper> 
  );
}
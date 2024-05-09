'use client';
import { useState } from "react";

import Wrapper from "../_components/Wrapper";
import TodayCalender from "./_components/TodayCalender";
import TodayFlipClock from "./_components/TodayFlipClock";
import TodayPercentage from "./_components/TodayPercentage";


export default function Life() {
  const componentCount = 3;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }
  return (
    <Wrapper onClick={changeComponent}>
      {currentComponent === 1 && <TodayFlipClock/>}
      {currentComponent === 2 && <TodayCalender/>}
      {currentComponent === 3 && <TodayPercentage/>}
    </Wrapper> 
  );
}
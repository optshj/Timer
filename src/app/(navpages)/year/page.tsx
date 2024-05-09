'use client';
import { useState } from "react";

import Wrapper from "../_components/Wrapper";
import YearFlipClock from "./_components/YearFlipClock";
import YearCalender from "./_components/YearCalender";
import YearPercentage from "./_components/YearPercentage";

export default function Life() {
  const componentCount = 3;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }
  return (
    <Wrapper onClick={changeComponent}>
      {currentComponent === 1 && <YearFlipClock/>}
      {currentComponent === 2 && <YearCalender/>}
      {currentComponent === 3 && <YearPercentage/>}
    </Wrapper> 
  );
}
'use client';
import { useState } from "react";

import PageWrapper from "../../_components/Public/PageWrapper";
import TodayCalender from "./_components/TodayCalender";
import TodayFlipClock from "./_components/TodayFlipClock";
import TodayPercentage from "./_components/TodayPercentage";
import TodayAnalogClock from "./_components/TodayAnalogClock";

export default function Life() {
  const componentCount = 4;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }
  return (
    <PageWrapper onClick={changeComponent}>
      {currentComponent === 1 && <TodayFlipClock/>}
      {currentComponent === 2 && <TodayCalender/>}
      {currentComponent === 3 && <TodayPercentage/>}
      {currentComponent === 4 && <TodayAnalogClock/>}
    </PageWrapper> 
  );
}
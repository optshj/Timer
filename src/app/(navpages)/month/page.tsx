'use client';
import {useState} from "react";

import PageWrapper from "../../_components/Public/PageWrapper";
import MonthCalender   from "./_components/MonthCalender";
import MonthPercentage from "./_components/MonthPercentage";
import MonthFlipClock  from "./_components/MonthFlipClock";

export default function Month() {
  const componentCount = 3;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }

  return (
    <PageWrapper onClick={changeComponent}>
      {currentComponent === 1 && <MonthFlipClock/>}
      {currentComponent === 2 && <MonthCalender/>}
      {currentComponent === 3 && <MonthPercentage/>}
    </PageWrapper> 
  );
}
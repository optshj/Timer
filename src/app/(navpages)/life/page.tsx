'use client';
import { useState,useEffect } from "react";

import Wrapper from "../../_components/Shared/Wrapper";
import DeathDate from "./_components/DeathDate";
import NotCalc from "./_components/NotCalc";
import LifeFlipClock from "./_components/LifeFlipClock";
import LifeCalender from "./_components/LifeCalender";
import LifePercentage from "./_components/LifePercentage";
import LifeAnalogClock from "./_components/LifeAnalogClock";

export default function Life() {
  const [isCalc,setIsCalc] = useState<boolean>(false);
  useEffect(() => {
    const deathDate = window.localStorage.getItem('deathDate');
    if (!deathDate) {
      setIsCalc(false);
    }
    else {
      setIsCalc(true);
    }
  },[])
  const componentCount = 5;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }

  return (
    <>{
      !isCalc ? <NotCalc/> 
      :
      <Wrapper onClick={changeComponent}>
        {currentComponent === 1 && <DeathDate/>}
        {currentComponent === 2 && <LifeFlipClock/>}
        {currentComponent === 3 && <LifeCalender/>}
        {currentComponent === 4 && <LifePercentage/>}
        {currentComponent === 5 && <LifeAnalogClock/>}
      </Wrapper>
      }
      </>
  );
}
'use client';
import { useState,useEffect } from "react";

import Wrapper from "../../_components/Wrapper";
import NotCalc from "./_components/NotCalc";
import LifeFlipClock from "./_components/LifeFlipClock";
import LifeCalender from "./_components/LifeCalender";
import LifePercentage from "./_components/LifePercentage";


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
  const componentCount = 3;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }

  return (
    <>{
      !isCalc ? 
      <NotCalc/> 
      :
      <Wrapper onClick={changeComponent}>
        {currentComponent === 1 && <LifeFlipClock/>}
        {currentComponent === 2 && <LifeCalender/>}
        {currentComponent === 3 && <LifePercentage/>}
      </Wrapper>
    }
      </>
  );
}
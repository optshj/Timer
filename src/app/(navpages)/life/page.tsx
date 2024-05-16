'use client';
import { useState } from "react";

import Wrapper from "../../_components/Wrapper";
import LifeFlipClock from "./_components/LifeFlipClock";
import LifeCalender from "./_components/LifeCalender";
import LifePercentage from "./_components/LifePercentage";

export default function Life() {
  const componentCount = 3;
  const [currentComponent,setCurrentComponent] = useState<number>(1);

  const changeComponent = () => {
    setCurrentComponent((prev) => (prev%componentCount) + 1);
  }

  return (
    <Wrapper onClick={changeComponent}>
      {currentComponent === 1 && <LifeFlipClock/>}
      {currentComponent === 2 && <LifeCalender/>}
      {currentComponent === 3 && <LifePercentage/>}
    </Wrapper>
  );
}
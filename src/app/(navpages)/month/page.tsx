'use client';
import LifeCalender from "../_components/TimeCalender";
import Text from "../_components/Text";

import { useLeftLife } from "@/src/_context/LeftLifeContext";

export default function Life() {
  const { todayDate } = useLeftLife();
  const lastDayOfMonth = new Date(todayDate.years, todayDate.months + 1, 0).getDate();
  return (
    <>
      <Text text={`이번 달이 ${lastDayOfMonth-todayDate.days + 1}일 남았어요`} />
      <LifeCalender start={1} middle={todayDate.days} end={lastDayOfMonth}/>
    </> 
  );
}
'use client';
import LifeCalender from "../_components/TimeCalender";
import { useLeftLife } from "@/src/_context/LeftLifeContext";

export default function Life() {
  const { todayDate } = useLeftLife();
  const lastDayOfMonth = new Date(todayDate.years, todayDate.months + 1, 0).getDate();
  return (
    <>
      <LifeCalender start={1} middle={todayDate.days} end={lastDayOfMonth}/>
    </> 
  );
}
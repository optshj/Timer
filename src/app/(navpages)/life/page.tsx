'use client';
import TimeCalender from "../_components/TimeCalender";
import { useLeftLife } from "@/src/_context/LeftLifeContext";

export default function Life() {
  const { birthDate, deathDate, todayDate, leftLife, fullLife } = useLeftLife();
  return (
    <>
      <TimeCalender start={birthDate.years} middle={todayDate.years} end={deathDate.years}/>
    </> 
  );
}
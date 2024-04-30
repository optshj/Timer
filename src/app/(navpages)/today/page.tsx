'use client';
import LifeCalender from "../_components/TimeCalender";

export default function Life() {
  const currentDate = new Date();
  return (
    <>
      <LifeCalender start={0} middle={currentDate.getHours()} end={24} />
    </> 
  );
}
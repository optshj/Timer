'use client';
import LifeCalender from "../_components/TimeCalender";
import Text from "../_components/Text";

function getWeekNumber(date:Date) {
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((Number(date) - Number(yearStart)) / 86400000) + 1) / 7);

  return weekNumber;
}

export default function Life() {
  const currentDate = new Date();
  const currentWeek = getWeekNumber(currentDate);
  return (
    <>
      <Text text={`올해가 ${52-currentWeek}주 남았어요`}/>
      <LifeCalender start={0} middle={currentWeek} end={52}/>
    </> 
  );
}
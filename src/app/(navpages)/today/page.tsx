'use client';
import LifeCalender from "../_components/TimeCalender";
import Text from "../_components/Text";

export default function Life() {
  const currentDate = new Date();
  return (
    <>
      <Text text={`오늘 하루가 ${24 - currentDate.getHours()}시간 남았어요`} />
      <LifeCalender start={0} middle={currentDate.getHours()} end={24} />
    </> 
  );
}
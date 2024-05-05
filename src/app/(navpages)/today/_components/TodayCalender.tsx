import Text from "../../_components/Text";
import TimeCalender from "../../_components/TimeCalender";

import { useLeftLife } from "@/src/_context/LeftLifeContext";

function TodayCalender(){
    const currentDate = useLeftLife().today;
    return(
        <>
            <Text text={`오늘이 ${23 - currentDate.getHours()}시간 ${59-currentDate.getMinutes()}분 ${59-currentDate.getSeconds()}초 남았습니다`} />
            <TimeCalender start={0} middle={currentDate.getHours()+1} end={24} />
        </>
    )
}
export default TodayCalender;
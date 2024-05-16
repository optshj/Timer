import { useTime } from "@/src/_context/TimeContext";

import Text from "../../../_components/Text";
import TimeCalender from "../../../_components/TimeCalender";

export default function TodayCalender(){
    const {today} = useTime();

    return(
        <>
            <Text text={`오늘이 ${23 - today.getHours()}시간 ${59-today.getMinutes()}분 ${59-today.getSeconds()}초 남았습니다`} />
            <TimeCalender start={0} middle={today.getHours()+1} end={24} />
        </>
    )
}
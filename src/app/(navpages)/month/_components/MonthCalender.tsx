import { useTime } from "@/src/_context/TimeContext";

import Text from "../../../_components/Public/Text";
import TimeCalender from "../../../_components/Public/TimeCalender";

export default function MonthCalender() {
    const { today, lastDayOfMonth } = useTime();

    return (
        <>
            <Text text={`이번 달이 ${lastDayOfMonth - today.getDate()}일 남았습니다`} />
            <TimeCalender start={1} middle={today.getDate()} end={lastDayOfMonth}/>
        </>
    );
}
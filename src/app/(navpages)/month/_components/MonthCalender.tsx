import { useTime } from "@/src/_context/TimeContext";

import Text from "../../../_components/Shared/Text";
import TimeCalender from "../../../_components/Shared/TimeCalender";

export default function MonthCalender() {
    const { today, lastDayOfMonth } = useTime();

    return (
        <>
            <Text text={`이번 달이 ${lastDayOfMonth - today.getDate()}일 남았습니다`} />
            <TimeCalender start={1} middle={today.getDate()} end={lastDayOfMonth}/>
        </>
    );
}
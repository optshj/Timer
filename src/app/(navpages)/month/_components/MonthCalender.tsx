import { useLeftLife } from "@/src/_context/LeftLifeContext";

import Text from "../../_components/Text";
import TimeCalender from "../../_components/TimeCalender";

export default function MonthCalender() {
    const { todayDate } = useLeftLife();
    const lastDayOfMonth = new Date(todayDate.years, todayDate.months + 1, 0).getDate();

    return (
        <>
            <Text text={`이번 달이 ${lastDayOfMonth - todayDate.days}일 남았습니다`} />
            <TimeCalender start={1} middle={todayDate.days} end={lastDayOfMonth}/>
        </>
    );
}
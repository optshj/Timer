import { useLeftLife } from "@/src/_context/LeftLifeContext";
import { useTime } from "@/src/_context/TimeContext";

import Text from "../../../_components/Shared/Text";
import TimeCalender from "../../../_components/Shared/TimeCalender";

export default function LifeCalender(){
    const {birthDate, deathDate, leftLife} = useLeftLife();
    const {today} = useTime();

    return(
        <>
            <Text text={`인생이 ${leftLife.years}년 남았습니다`} />
            <TimeCalender start={birthDate.years} middle={today.getFullYear()} end={deathDate.years}/>
        </>
    )
}
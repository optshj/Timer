import { useLeftLife } from "@/src/_context/LeftLifeContext";
import { useTime } from "@/src/_context/TimeContext";

import Text from "../../../_components/Public/Text";
import TimeCalender from "../../../_components/Public/TimeCalender";

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
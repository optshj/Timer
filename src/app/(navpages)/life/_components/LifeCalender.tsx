import { useLeftLife } from "@/src/_context/LeftLifeContext";

import Text from "../../_components/Text";
import TimeCalender from "../../_components/TimeCalender";


export default function LifeCalender(){
    const {birthDate, deathDate, todayDate, leftLife} = useLeftLife();

    return(
        <>
            <Text text={`인생이 ${leftLife.years}년 남았습니다`} />
            <TimeCalender start={birthDate.years} middle={todayDate.years} end={deathDate.years}/>
        </>
    )
}
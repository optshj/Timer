import styled from 'styled-components';

import FlipCard from '../FlipClockComponents/FlipCard';
import Text from '../Text';
import { useTime } from '@/src/_context/TimeContext';

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`
function FlipClockTime(){
    const {timeDiff} = useTime();
    const quotient = (a:number) => {
        return Math.floor(a/10);
    }

    const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return(
        <Wrapper>
            <FlipCard front={quotient(hoursLeft)} back={quotient(hoursLeft)+1}/>
            <FlipCard front={hoursLeft%10} back={(hoursLeft+1)%10}/>
            <Text text="시"/>
            <FlipCard front={quotient(minutesLeft)} back={quotient(minutesLeft)+1}/>
            <FlipCard front={minutesLeft%10} back={(minutesLeft+1)%10}/>
            <Text text="분"/>
            <FlipCard front={quotient(secondsLeft)} back={quotient(secondsLeft)+1}/>
            <FlipCard front={secondsLeft%10} back={(secondsLeft+1)%10}/>
            <Text text="초"/>
        </Wrapper>
    )
}
export default FlipClockTime;
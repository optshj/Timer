import styled from 'styled-components';

import FlipCard from '../FlipClockComponents/FlipCard';
import Text from '../Text';
import { useLeftLife } from '@/src/_context/LeftLifeContext';

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`
function FlipClockTime(){
    const {today} = useLeftLife();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const timeDiff = Math.abs(midnight.getTime() - today.getTime());

    const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return(
        <Wrapper>
            <FlipCard front={hoursLeft} back={hoursLeft+1}/>
        </Wrapper>
    )
}
export default FlipClockTime;
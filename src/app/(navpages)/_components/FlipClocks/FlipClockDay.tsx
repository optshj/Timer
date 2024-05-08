import styled from 'styled-components';

import FlipCard from '../FlipClockComponents/FlipCard';
import Text from '../Text';

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`

interface FlipClockYearProps{
    date:number;
}
export default function FlipClockDay({date}:FlipClockYearProps){
    const flipCards = []; 

    for (let i = 1; i >= 0; i--) {
        const digit = Math.floor(date / Math.pow(10, i)) % 10;
        flipCards.push(<FlipCard key={i} front={digit} back={digit+1}/>);
    }
    return(
        <Wrapper>
            {flipCards}
            <Text text={"일"}/>
        </Wrapper>
    )
}
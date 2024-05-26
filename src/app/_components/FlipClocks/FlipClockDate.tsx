import styled from 'styled-components';

import FlipCard from './FlipCard';
import Text from '../Public/Text';

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    transform: translate(15px, 0px);
    ${({theme}) => theme.media.medium`
        transform: translate(12px, 0px);
    `}
`

interface FlipClockYearProps{
    text:string;
    date:number;
}
export default function FlipClockMonth(props:FlipClockYearProps){
    const flipCards = [];
    for (let i = 1; i >= 0; i--) {
        const digit = Math.floor(props.date / Math.pow(10, i)) % 10;
        flipCards.push(<FlipCard key={i} front={digit} back={digit+1}/>);
    }
    return(
        <Wrapper>
            {flipCards}
            <Text text={`${props.text}`}/>
        </Wrapper>
    )
}
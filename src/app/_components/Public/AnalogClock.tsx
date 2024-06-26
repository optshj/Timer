import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: var(--text);
    ${({theme}) => theme.media.small`
        width: 200px;
        height: 200px;
    `}
`
const Hand = styled.div<{$angle: number}>`
    position: absolute;
    left:50%;
    bottom:50%;
    transform-origin: bottom;
    background-color:var(--background);
    transform: rotate(${({$angle}) => $angle}deg);
`
const SecondHand = styled(Hand)`
    width:2px;
    height:190px;
    background-color: var(--input_focus);
    ${({theme}) => theme.media.small`
        height:95px;
    `}
`
const MinuteHand = styled(Hand)`
    width:5px;
    height:180px;
    ${({theme}) => theme.media.small`
        height:90px;
    `}
`
const HourHand = styled(Hand)`
    width:5px;
    height:100px;
    ${({theme}) => theme.media.small`
        height:50px;
    `}
`
const Center = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    background-color:var(--background);
    border-radius: 50%;
    transform: translate(-50%, -50%);
`

interface AnalogClockProps{
    hour: number;
    minute: number;
    second: number;
}
export default function AnalogClock(props:AnalogClockProps){
    const secondAngle = (props.second / 60) * 360;
    const minuteAngle = (props.minute / 60) * 360 + (props.second / 60) * 6;
    const hourAngle = (props.hour / 12) * 360 + (props.minute / 60) * 30;

    return (
        <Wrapper>
            <SecondHand $angle={secondAngle}/>
            <MinuteHand $angle={minuteAngle}/>
            <HourHand $angle={hourAngle}/>
            <Center />
        </Wrapper>
    );
};
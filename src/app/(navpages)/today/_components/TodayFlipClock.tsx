import styled from "styled-components";

import Text from "../../_components/Text";
import FlipClockTime from "../../_components/FlipClocks/FlipClockTime";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

function TodayFlipClock(){
    return(
        <>
            <Wrapper>
                <Text text={"오늘이 끝나기까지 남은 시간"}/>
            </Wrapper>
            <FlipClockTime/>
        </>
    )
}
export default TodayFlipClock;
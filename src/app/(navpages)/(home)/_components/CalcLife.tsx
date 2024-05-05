'use client'
import styled from "styled-components";

import CalcLifeButton from "./calcLife/CalcLifeButton";

const Wrapper = styled.div`
    display:flex;
    justify-content: center;
`
function CalcLife(){
    return(
        <Wrapper>
            <CalcLifeButton/>
        </Wrapper>
    )
}
export default CalcLife;
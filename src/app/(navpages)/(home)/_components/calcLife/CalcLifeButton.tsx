'use client'
import styled from "styled-components";

const Wrapper = styled.button`
    font-size:24px;
    cursor:pointer;
    color:${({theme}) => theme.color.text_color};
    background-color:${({theme}) => theme.color.background};
`
function CalcLifeButton(){
    return(
        <Wrapper>
            수명 계산하기
        </Wrapper>
    )
}
export default CalcLifeButton;
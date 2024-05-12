'use client'
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${({theme}) => theme.color.text_color};
    text-align: center;
    margin-top: 140px;
    margin-bottom: 30px;
`
const SubTitle = styled.div`
    font-size: 20px;
    color: ${({theme}) => theme.color.header_font};
    font-weight:500;
    text-align: center;
    margin-bottom: 30px;
    white-space: pre-line;
`
const InputWrapper = styled.div`
    display:flex;
    flex-direction: row;
    gap:4px;
`
const InputArea = styled.input`
    width:100px;
    height:60px;
    font-size:24px;
    padding:0 12px;
    border-radius: 5px;
    border:2px solid ${({theme}) => theme.color.header_font};
    background-color: ${({theme}) => theme.color.background};
    color:${({theme}) => theme.color.icon_color};
    &::placeholder{
        font-size: 24px;
        color: ${({theme}) => theme.color.header_font};
    }
    &:focus{
        transition: border 0.3s ease-in-out;
        border:2px solid ${({theme}) => theme.color.input_focus_color};
        caret-color: ${({theme}) => theme.color.input_focus_color};
        outline:none;
    }
`
const NextButton = styled.button`
    width:360px;
    height:80px;
    font-size:22px;
    margin-top: 60px;
    cursor:pointer;
    text-align: center;
    border:none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.input_focus_color};
    color:#fff;

`
export default function BirthDate(){
    return(
        <Wrapper>
            <Title>생년월일을 알려주세요</Title>
            <SubTitle>{`입력정보를 기반으로 \n남은 수명을 알려드릴게요!`}</SubTitle>
            <InputWrapper>
                <InputArea type="text" placeholder="YYYY" maxLength={4}/>
                <InputArea type="text" placeholder="MM" maxLength={2} style={{'width':'80px'}}/>
                <InputArea type="text" placeholder="DD" maxLength={2} style={{'width':'80px'}}/>
            </InputWrapper>
            <NextButton>다음으로</NextButton>
        </Wrapper>
    )
}
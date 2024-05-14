'use client'
import { useState } from 'react';
import styled from 'styled-components';

import { useLeftLife } from '@/src/_context/LeftLifeContext';
import Link from 'next/link';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
const ButtonWrapper = styled.div`
    position:absolute;
    bottom:${({theme}) => theme.position.modal_button}; 
`
const NextButton = styled.button`
    width:360px;
    height:70px;
    font-size:22px;
    color:#fff;
    cursor:pointer;
    text-align: center;
    border:none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.input_focus_color};
`

export default function Page(){
    const {setBirth} = useLeftLife();
    const [year,setYear] = useState<string>('');
    const [month,setMonth] = useState<string>('');
    const [date,setDate] = useState<string>('');
    
    const handleYear = (e:React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value)
    }
    const handleMonth = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMonth(e.target.value)
    }
    const handleDate = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }
    const submitBirth = () => {
        setBirth(new Date(`${year}-${month}-${date}`))
    }

    return(
        <Wrapper>
            <Title>생년월일을 알려주세요</Title>
            <SubTitle>{`입력정보를 기반으로 \n남은 수명을 알려드릴게요!`}</SubTitle>
            <InputWrapper>
                <InputArea type="text" placeholder="YYYY" maxLength={4} value={year} onChange={handleYear}/>
                <InputArea type="text" placeholder="MM" maxLength={2} style={{'width':'80px'}} value={month} onChange={handleMonth}/>
                <InputArea type="text" placeholder="DD" maxLength={2} style={{'width':'80px'}} value={date} onChange={handleDate}/>
            </InputWrapper>
                <ButtonWrapper>
                <Link href={"/0"} scroll={false}>
                    <NextButton onClick={submitBirth}>다음으로</NextButton>
                </Link>
            </ButtonWrapper>
        </Wrapper>
    )
}
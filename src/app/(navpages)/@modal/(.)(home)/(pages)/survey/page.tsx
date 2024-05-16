'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

import { useLeftLife } from '@/src/_context/LeftLifeContext';
import Link from 'next/link';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const TitleWrapper = styled.div`
    text-align: center;
    margin-top: 140px;
`
const Title = styled.div`
    color: ${({theme}) => theme.color.text_color};
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
`
const SubTitle = styled.div`
    color: ${({theme}) => theme.color.header_font};
    font-size: 20px;
    font-weight:500;
    margin-bottom: 30px;
    white-space: pre-line;
`
const InputWrapper = styled.div`
    display:flex;
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
    caret-color: ${({theme}) => theme.color.input_focus_color}; 
    outline:none;
    &::placeholder{
        font-size: 24px;
        color: ${({theme}) => theme.color.header_font};
    }
    &:focus{
        transition: border 0.3s ease-in-out;
        border:2px solid ${({theme}) => theme.color.input_focus_color};
    }
`
const ErrorMessage = styled.div`
    margin-top:30px;
    text-align: center;
    white-space: pre-line;
    color:${({theme}) => theme.color.error_color};
`
const ButtonWrapper = styled.div`
    position:absolute;
    bottom:${({theme}) => theme.position.modal_button}; 
`
const NextButton = styled.button`
    width:360px;
    height:70px;
    font-size:22px;
    color:${({theme}) => theme.color.background};
    border:none;
    border-radius: 10px;
    text-align: center;
    background-color: ${({theme}) => theme.color.input_focus_color};
    cursor:pointer;
`

const validateBirthdate = (birthDate:string[]): boolean => {
    const [year, month, date] = birthDate;
    const birthDateObj = new Date(`${year}-${month}-${date}`);
    if ((birthDateObj > new Date()) || (year.length !== 4 || month.length !== 2 || date.length !== 2)) {
        return false;
    }
    return !isNaN(birthDateObj.getTime());
}

export default function Page(){
    const {setBirth,setDeath} = useLeftLife();
    const [birthDate, setBirthDate] = useState<string[]>(['', '', '']);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newBirthDate = [...birthDate];
        newBirthDate[index] = e.target.value;
        setBirthDate(newBirthDate);
    };

    const submitBirth = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const isValidBirthDate = validateBirthdate(birthDate);
        
        if (isValidBirthDate) {
            const [year, month, date] = birthDate;
            const birthDateObj = new Date(`${year}-${month}-${date}`);
            setBirth(birthDateObj);
            setDeath(birthDateObj);
            setErrorMessage('');
        } else {
            setErrorMessage('올바르지 않은 생년월일이에요\n올바른 생년월일을 입력해주세요');
            e.preventDefault();
        }
    };

    return(
        <Wrapper>
            <TitleWrapper>
                <Title>생년월일을 알려주세요</Title>
                <SubTitle>{`입력정보를 기반으로 \n남은 수명을 알려드릴게요!`}</SubTitle>
            </TitleWrapper>

            <InputWrapper>
                <InputArea maxLength={4} value={birthDate[0]} onChange={handleChange(0)} placeholder='YYYY'/>
                <InputArea maxLength={2} value={birthDate[1]} onChange={handleChange(1)} placeholder='MM' style={{'width':'80px'}}/>
                <InputArea maxLength={2} value={birthDate[2]} onChange={handleChange(2)} placeholder='DD' style={{'width':'80px'}}/>
            </InputWrapper>

            <ErrorMessage>{errorMessage}</ErrorMessage>
            
            <ButtonWrapper>
                <Link href={"/0"} scroll={false} onClick={submitBirth} replace={true}>
                    <NextButton >다음으로</NextButton>
                </Link>
            </ButtonWrapper>
        </Wrapper>
    )
}
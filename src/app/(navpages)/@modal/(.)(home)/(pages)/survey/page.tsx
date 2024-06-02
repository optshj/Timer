'use client'
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { useLeftLife } from '@/src/_context/LeftLifeContext';
import { useScoreArray } from '@/src/_context/ScoreContext';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`
const TitleWrapper = styled.div`
    text-align: center;
    margin-top: 100px;
`
const Title = styled.div`
    color: var(--text);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
`
const SubTitle = styled.div`
    color: var(--header_font);
    font-size: 20px;
    font-weight:500;
    margin-bottom: 30px;
    white-space: pre-line;
`
const InputWrapper = styled.div`
    display:flex;
    gap:4px;
`
interface InputProps{
    $short?:boolean;
}
const InputArea = styled.input<InputProps>`
    width:${(props) => props.$short ? '80px' : '100px'};
    height:60px;
    font-size:24px;
    padding:0 12px;
    border-radius: 5px;
    border:2px solid var(--header_font);
    background-color: var(--background);
    color: var(--icon);
    caret-color: var(--input_focus);
    outline:none;
    &::placeholder{
        font-size: 20px;
        color: var(--header_font);
    }
    &:focus{
        transition: border 0.3s ease-in-out;
        border:2px solid var(--input_focus);
    }
    ${({theme}) => theme.media.small`
        width:${(props:InputProps) => props.$short ? '60px' : '80px'};
    `}
`
const ErrorMessage = styled.div`
    margin-top:30px;
    text-align: center;
    white-space: pre-line;
    color: var(--error);
`
const NextButton = styled.button`
    position: absolute;
    transform: translateX(-50%);
    bottom:${({theme}) => theme.position.modal_button}; 
    width:360px;
    height:70px;
    font-size:22px;
    color : var(--background);
    border:none;
    border-radius: 10px;
    text-align: center;
    background-color: var(--input_focus);
    cursor:pointer;
    ${({theme}) => theme.media.small`
        width:calc(100vw - 88px);
        bottom:140px;
    `}
`

const validateBirthdate = (birthDate:string[]): boolean => {
    const [year, month, date] = birthDate;
    const birthDateObj = new Date(`${year}-${month}-${date}`);
    
    if ((birthDateObj > new Date()) || (year.length !== 4 || month.length !== 2 || date.length !== 2)) 
        return false;
    return !isNaN(birthDateObj.getTime());
}

export default function Page(){
    const inputRef1 = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);
    const inputRef3 = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef1.current) inputRef1.current.focus();
    },[])

    const {setBirthDate} = useLeftLife();
    const {setScoreArray} = useScoreArray();
    const [birthDateArray, setBirthDateArray] = useState<string[]>(['', '', '']);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const submitBirth = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const isValidBirthDate = validateBirthdate(birthDateArray);
        
        if (isValidBirthDate) {
            const [year, month, date] = birthDateArray;
            setBirthDate(new Date(`${year}-${month}-${date}`));
            setErrorMessage('');
            setScoreArray([]);
        } else {
            setErrorMessage('올바르지 않은 생년월일이에요\n올바른 생년월일을 입력해주세요');
            e.preventDefault();
        }
    };
    
    const handleChange = (index: number,nextInputRef:React.RefObject<HTMLInputElement>|null) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const newBirthDate = [...birthDateArray];
        newBirthDate[index] = e.target.value;
        setBirthDateArray(newBirthDate);
        setErrorMessage('');
        if (e.target.value.length >= e.target.maxLength && nextInputRef && nextInputRef.current) {
            nextInputRef.current.focus();
        }
    };


    return(
        <Wrapper>
            <TitleWrapper>
                <Title>생년월일을 알려주세요</Title>
                <SubTitle>{`입력정보를 기반으로 \n남은 수명을 알려드릴게요!`}</SubTitle>
            </TitleWrapper>

            <InputWrapper>
                <InputArea maxLength={4} value={birthDateArray[0]} onChange={handleChange(0,inputRef2)} placeholder='YYYY' ref={inputRef1}/>
                <InputArea maxLength={2} value={birthDateArray[1]} onChange={handleChange(1,inputRef3)} placeholder='MM' ref={inputRef2} $short={true}/>
                <InputArea maxLength={2} value={birthDateArray[2]} onChange={handleChange(2,null)} placeholder='DD' ref={inputRef3} $short={true}/>
            </InputWrapper>

            <ErrorMessage>{errorMessage}</ErrorMessage>
        
            <Link href={"/0"} scroll={false} onClick={submitBirth} replace={true}>
                <NextButton >다음으로</NextButton>
            </Link>
        </Wrapper>
    )
}
'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

import surveyData from '@/src/_data/surveys.json';

import BottomButton from '../_components/BottomButton';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ProgressbarWrapper = styled.div`
    position:absolute;
    top:180px;
    width:350px;
    height:10px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.color.button_disable};
    ${({theme}) => theme.media.small`
        width: ${theme.size.modal_width_small};
    `};
`
const Progressbar = styled.div<{$percentage:number}>`
    width:${(props) => props.$percentage}%;
    height:100%;
    transition: width 0.5s linear;
    border-radius: ${(props) => props.$percentage === 100 ? '20px' : '20px 0 0 20px'};
    background-color: ${({theme}) => theme.color.button_enable};
`
const Question = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin:60px 12px;
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.text};
    text-align: center;
    white-space: pre-line;
`
const SelectionWrapper = styled.div`
    position:absolute;
    top:200px;
`
const Selection = styled.input.attrs({ type: 'radio' })`
    display:none;
    &:checked + label {
        background-color:${({theme}) => theme.color.button_enable};
        transition: all 0.3s linear;
    }
    &:checked + label span {
        color:${({theme}) => theme.color.background};
    }
`
const SelectionLabel = styled.label`
    display: flex;
    top:150px;
    width: 350px;
    align-items: center;
    margin-top: 15px;
    border: 2px solid ${({ theme }) => theme.color.input_focus};
    border-radius: 8px;
    padding: 8px 0;
    cursor: pointer;
    ${({theme}) => theme.media.small`
        width:${theme.size.modal_width_small};
    `};
`
const SelectionSpan = styled.span`
    font-size: 20px;
    font-weight: 600;
    color:${({ theme }) => theme.color.text};
    margin-left:10px;
`

export default function Page(props: { params: { id: string } }) {
    const [selectScore,setSelectScore] = useState<number>(0);
    const [isSelect,setIsSelect] = useState<boolean>(false);

    const id = parseInt(props.params.id);
    const survey = surveyData.surveys[id];

    const surveyArrayLength = (JSON.parse(JSON.stringify(surveyData.surveys)) as string[]).length;

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectScore(parseInt(e.target.value));
        setIsSelect(true);
    }
    const SelectionArray = survey && survey.selections ? Object.entries(survey.selections).map(([key, value]) => (
        <React.Fragment key={key}>
            <Selection value={survey.scores[key as keyof typeof survey.scores]} onChange={handleSelect} name="selection" id={`selection_${key}`}/>
            <SelectionLabel htmlFor={`selection_${key}`}>
                <SelectionSpan>{value}</SelectionSpan>
            </SelectionLabel>
        </React.Fragment>
    )) : null;

    return (
        <Wrapper>
            {survey && survey.question && <Question>{survey.question}</Question>}
            <ProgressbarWrapper>
                <Progressbar $percentage={(id+1)/surveyArrayLength*100}/>
            </ProgressbarWrapper>
            
            <SelectionWrapper>
                {SelectionArray}
            </SelectionWrapper>
            <BottomButton selectScore={selectScore} isSelect={isSelect}/>
        </Wrapper>
    );
}

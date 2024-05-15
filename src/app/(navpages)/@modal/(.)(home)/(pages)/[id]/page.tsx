'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

import surveyData from './survey.json';
import Button from '../_components/Button';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Question = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.text_color};
    text-align: center;
    margin-top: 140px;
    margin-bottom: 30px;
    white-space: pre-line;
`;
const SelectionLabel = styled.label`
    display: flex;
    top:150px;
    width: 350px;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    border: 2px solid ${({ theme }) => theme.color.input_focus_color};
    border-radius: 8px;
    padding: 8px 0;
    cursor: pointer;
`;
const Selection = styled.input`
    display:none;
    &:checked + label {
        transition: all 0.3s linear;
        color:#fff;
        background-color:${({theme}) => theme.color.button_enable_color};
    }
`;
const SelectionSpan = styled.span`
    margin-left:10px;
    font-size: 20px;
    font-weight: 600;
`

function getSurvey(id: number) {
    const surveyArray = surveyData.surveys;
    return surveyArray[id] ;
}

export default function Page(props: any) {
    const [selectScore,setSelectScore] = useState<number>(-999);

    const id = parseInt(props.params.id);
    const survey = getSurvey(id);

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectScore(parseInt(e.target.value));
    }
    const SelectionArray = Object.entries(survey.selections).map(([key, value]) => (
        <>
            <Selection type="radio" value={survey.scores[key as keyof typeof survey.scores]} name="selection" id={`selection_${key}`} onChange={handleSelect}/>
            <SelectionLabel key={key} htmlFor={`selection_${key}`}>
                <SelectionSpan>{value}</SelectionSpan>
            </SelectionLabel>
        </>
    ));

    return (
        <Wrapper>
            <Question>{survey.question}</Question>
            {SelectionArray}
            <Button selectScore={selectScore}></Button>
        </Wrapper>
    );
}

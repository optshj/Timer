'use client'
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

const SelectionWrapper = styled.label`
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    border: 1px solid ${({ theme }) => theme.color.input_focus_color};
    border-radius: 5px;
    padding: 8px 0;
    cursor: pointer;
    &:focus{
        border:5px solid ${({theme}) => theme.color.input_focus_color};
    }
`;
const Selection = styled.input`
    margin-right:10px;
`;
const SelectionLabel = styled.label`
    font-size: 20px;
    font-weight: 600;
    margin-left: 10px;
`;

function getSurvey(id: number) {
    const surveyArray = surveyData.surveys;
    return surveyArray[id] ;
}

export default function Page(props: any) {
    const id = parseInt(props.params.id);
    const survey = getSurvey(id);

    const SelectionArray = Object.entries(survey.selections).map(([key, value]) => (
        <SelectionWrapper key={key}>
            <SelectionLabel htmlFor={`selection_${key}`}>{value}</SelectionLabel>
            <Selection type="radio" value={value} name="selection" id={`selection_${key}`} />
        </SelectionWrapper>
    ));

    return (
        <Wrapper>
            <Question>{survey.question}</Question>
            {SelectionArray}
            <Button id={id}></Button>
        </Wrapper>
    );
}

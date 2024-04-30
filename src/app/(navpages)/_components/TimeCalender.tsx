import React from 'react';
import styled from 'styled-components';
import { useLeftLife } from '@/src/_context/LeftLifeContext';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
`;
const BoxWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:300px;
`
const Box = styled.div`
    width: 40px;
    height: 40px;
    margin: 2px;
    border-radius:3px;
`;
const EmptyBox = styled(Box)`
    background-color: #c1c1c1;
`;
const FillBox = styled(Box)`
    background-color: #000;
`;
const Text = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.color.text_color};
`

interface LifeCalenderProps {
    start:number;
    middle:number;
    end:number;
}

function TimeCalender({start, middle, end }:LifeCalenderProps) {

    const renderBoxes = () => {
        const boxes = [];
        for (let i = start; i < middle; i++) {
            boxes.push(<FillBox key={`fill-${i}`} />);
        }
        for (let i = middle; i < end; i++) {
            boxes.push(<EmptyBox key={`empty-${i}`} />);
        }
        return boxes;
    };

    return (
        <Wrapper>
            <Text>{start}</Text>
            <BoxWrapper>
            {renderBoxes()}
            </BoxWrapper>
            <Text>{end}</Text>
        </Wrapper>
    );
}

export default TimeCalender;

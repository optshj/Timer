import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`
const BoxWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:264px;
    ${({theme}) => theme.media.medium`
        width: 144px;
    `}
`
const Box = styled.div`
    width: 40px;
    height: 40px;
    margin: 2px;
    border-radius:5px;
    ${({theme}) => theme.media.medium`
        width: 20px;
        height: 20px;   
    `}
`;
const EmptyBox = styled(Box)`
    background-color: #c1c1c1;
`;
const FillBox = styled(Box)`
    background-color: #000;
`;
const Text = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.color.text};
    margin-top:6px;
`

interface LastTextProps {
    $cnt:number;
}
const LastText = styled.div<LastTextProps>`
    font-size: 12px;
    color: ${({ theme }) => theme.color.text};
    margin-left: ${({ $cnt }) => $cnt*44}px;
    ${({theme}) => theme.media.medium`
        margin-left: ${({ $cnt }:LastTextProps) => $cnt*24}px;
    `}
`

function remainder(amount:number,divide:number) {
    return amount%divide === 0 ? divide: amount%divide;
}

interface LifeCalenderProps {
    start:number;
    middle:number;
    end:number;
}
export default function TimeCalender({start, middle, end }:LifeCalenderProps) {
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
            <LastText $cnt={remainder(end-start,6)}>{end}</LastText>
        </Wrapper>
    );
}
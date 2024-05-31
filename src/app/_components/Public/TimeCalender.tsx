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
    width:312px;
    ${({theme}) => theme.media.small`
        width: 216px;
    `}
`
const Box = styled.div`
    width: 35px;
    height: 35px;
    margin: 2px;
    border-radius:5px;
    color:transparent;
    font-size:14px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({theme}) => theme.media.small`
        width: 25px;
        height: 25px;
        font-size:10px;
        margin:1px;
    `}
    &:hover{
        z-index:10;
        transform: scale(2.5);
        transition: all 0.5s linear;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        cursor: default;
    }
`
const EmptyBox = styled(Box)`
    background-color: #c1c1c1;
    &:hover{
        color:#fff;
    }
`
const FillBox = styled(Box)`
    background-color: #000;
    &:hover{
        color:#fff;
    }
`
const Text = styled.div`
    font-size: 12px;
    color: var(--text);
    margin-top:6px;
`

interface LastTextProps {
    $cnt:number;
}
const LastText = styled.div<LastTextProps>`
    font-size: 12px;
    color: var(--text);
    margin-left: ${({ $cnt }) => $cnt*39}px;
    ${({theme}) => theme.media.small`
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
            boxes.push(<FillBox key={`fill-${i}`}>{i}</FillBox>);
        }
        for (let i = middle; i < end+1; i++) {
            boxes.push(<EmptyBox key={`empty-${i}`}>{i}</EmptyBox>);
        }
        return boxes;
    };

    return (
        <Wrapper>
            <Text>{start}</Text>
            <BoxWrapper>
                {renderBoxes()}
            </BoxWrapper>
            <LastText $cnt={remainder(end-start+1,8)}>{end}</LastText>
        </Wrapper>
    );
}
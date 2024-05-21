import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    display:flex;
    width:500px;
    padding:12px;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color:${({theme}) => theme.color.text};
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.bright_background};
    ${({theme}) => theme.media.large`
        width:calc(100% - 48px);
    `};
`
const Title = styled.div`
    white-space: pre-line;
    font-size:24px;
    ${({theme}) => theme.media.large`
        font-size:20px;
    `}
    ${({theme}) => theme.media.small`
        font-size:16px;
    `}
`
const SubTitle = styled.div`
    white-space: pre-line;
    font-size:20px;
    ${({theme}) => theme.media.large`
        font-size:16px;
    `}
    ${({theme}) => theme.media.small`
        font-size:12px;
    `}
`

function getRandomNumber(){
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 2**32;
}
interface JSONData {
    data:Array<{
        title:string;
        subTitle:string;
    }>
}
interface TextFieldProps{
    json:JSONData;
}
export default React.memo(function TextField(props:TextFieldProps){
    const textArray = props.json.data;
    const randomIndex = Math.floor(getRandomNumber() * textArray.length);
    const randomText = textArray[randomIndex];
    return(
        <Wrapper>
            <Title>{randomText.title}</Title>
            <SubTitle>{randomText.subTitle}</SubTitle>
        </Wrapper>
    )
})
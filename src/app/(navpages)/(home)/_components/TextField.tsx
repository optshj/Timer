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
    box-shadow:
        5px 5px 10px ${({theme}) => theme.color.shadow},
        -5px -5px 10px ${({theme}) => theme.color.shadow},
        -5px 5px 10px ${({theme}) => theme.color.shadow},
        5px -5px 10px ${({theme}) => theme.color.shadow};
    ${({theme}) => theme.media.large`
        width:calc(100% - 48px);
    `};
`
const Font = styled.div<{$fontSize:string}>`
    white-space: pre-line;
    font-size:${(props) => props.$fontSize};
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
            <Font $fontSize={"24px"}>{randomText.title}</Font>
            <Font $fontSize={"18px"}>{randomText.subTitle}</Font>
        </Wrapper>
    )
})
import React from "react";
import styled from "styled-components"

import quotesData from "@/src/_data/quotes.json";

const Wrapper = styled.div`
    display:flex;
    width:600px;
    padding:12px;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color:${({theme}) => theme.color.text_color};
    border-radius: 10px;
    box-shadow:
        5px 5px 10px ${({theme}) => theme.color.shadow},
        -5px -5px 10px ${({theme}) => theme.color.shadow},
        -5px 5px 10px ${({theme}) => theme.color.shadow},
        5px -5px 10px ${({theme}) => theme.color.shadow};
`
const Font = styled.div<{fontSize:string}>`
    font-size:${(props) => props.fontSize};
`

function getRandomNumber(){
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 2**32;
}
function getRandomQuote(){
    const quotesArray = quotesData.quotes;
    const randomIndex = Math.floor(getRandomNumber() * quotesArray.length);
    return quotesArray[randomIndex];
}

export default React.memo(function Quote(){
    const randomQuote = getRandomQuote();
    return(
        <Wrapper>
            <Font fontSize={"24px"}>{randomQuote.quote}</Font>
            <Font fontSize={"18px"}>{randomQuote.author}</Font>
        </Wrapper>
    )
})
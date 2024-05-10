'use client'
import React from "react";
import styled from "styled-components"

import quotes from "./Quotes.json";

const Wrapper = styled.div`
    display:flex;
    width:600px;
    padding:12px;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    color:${({theme}) => theme.color.text_color};
    box-shadow:
        5px 5px 10px ${({theme}) => theme.color.shadow},
        -5px -5px 10px ${({theme}) => theme.color.shadow},
        -5px 5px 10px ${({theme}) => theme.color.shadow},
        5px -5px 10px ${({theme}) => theme.color.shadow};
`
const Quotes = styled.div`
    font-size:24px;
`
const Author = styled.div`
    font-size:18px;
`

function getRandomNumber(){
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 2**32;
}
function getRandomQuote(){
    const quotesArray = quotes.quotes;
    const randomIndex = Math.floor(getRandomNumber() * quotesArray.length);
    return quotesArray[randomIndex];
}

function Quote(){
    const randomQuote = getRandomQuote();
    return(
        <Wrapper>
            <Quotes>{randomQuote.quote}</Quotes>
            <Author>{randomQuote.author}</Author>
        </Wrapper>
    )
}
export default React.memo(Quote);
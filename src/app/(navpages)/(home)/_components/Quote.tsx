'use client'
import styled from "styled-components"

import quotes from "./Quotes.json";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    white-space: nowrap;
    color:${({theme}) => theme.color.text_color};
`
const Quotes = styled.div`
    font-size:24px;
`
const Author = styled.div`
    font-size:18px;
`

function getRandomNumber(){
    const seed = new Date().getTime();
    const random = (seed * 9301 + 49297) % 233280;
    return random / 233280;
}
function getRandomQuote(){
    const quotesArray = quotes.quotes;
    const randomIndex = Math.floor(getRandomNumber() * quotesArray.length);
    return quotesArray[randomIndex];
}

export default function Quote(){
    const randomQuote = getRandomQuote();

    return(
        <Wrapper>
            <Quotes>{randomQuote.quote}</Quotes>
            <Author>{randomQuote.author}</Author>
        </Wrapper>
    )
}
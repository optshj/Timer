'use client'
import styled from "styled-components";

import CalcLifeButton from "./_components/CalcLifeButton";
import TextField from "./_components/TextField";

import quotesData from "@/src/_data/quotes.json";
import healthTipsData from "@/src/_data/healthTips.json";
import dynamic from "next/dynamic";


const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100%;
`
const TextWrapper = styled.div`
  display:flex;
  margin-top:24px;
  gap:24px;
  ${({theme}) => theme.media.small`
    flex-direction:column;
    gap:12px;
  `}
`
export default function Home() {
    return (
      <Wrapper>
        <CalcLifeButton/>

        <TextWrapper>
          <TextField json={quotesData}/>
          <TextField json={healthTipsData}/>
        </TextWrapper>
      </Wrapper>
    );
  }
'use client'
import styled from "styled-components";
import dynamic from "next/dynamic";

const TextField = dynamic(() => import("./_components/TextField"), { ssr: false });
import CalcLifeButton from "./_components/CalcLifeButton";

import quotesData from "@/src/_data/quotes.json";
import healthTipsData from "@/src/_data/healthTips.json";


const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:calc(100vh - ${({theme}) => theme.size.header_height});
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

export default function Homes() {
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
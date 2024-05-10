'use client'
import styled from "styled-components";

import Quote from "./_components/quote/Quote";
import HealthTips from "./_components/healthtip/HealthTips";
import CalcLife from "./_components/calcLife/CalcLife";

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:absolute;
  width:100%;
  height:100%;
`
const TextWrapper = styled.div`
  display:flex;
  margin-top:24px;
  flex-direction:row;
  gap:24px;
`
export default function Home() {
    return (
      <Wrapper>
        <CalcLife/>

        <TextWrapper>
          <Quote/>
          <HealthTips/>
        </TextWrapper>
      </Wrapper>
    );
  }
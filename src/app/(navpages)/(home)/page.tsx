'use client'
import styled from "styled-components";

import Quote from "./_components/Quote";
import HealthTips from "./_components/HealthTips";
import CalcLifeButton from "./_components/CalcLife";

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
  height:100%;
`
const TextWrapper = styled.div`
  display:flex;
  margin-top:24px;
  gap:24px;
`
export default function Home() {
    return (
      <Wrapper>
        <CalcLifeButton/>

        <TextWrapper>
          <Quote/>
          <HealthTips/>
        </TextWrapper>
      </Wrapper>
    );
  }
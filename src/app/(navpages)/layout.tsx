'use client'
import React,{ useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top:70px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height:100%;
`
function Layout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (  
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Layout;
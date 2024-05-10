'use client'
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  height:calc(100vh - 67px);
  width:100%;
  display:flex;
  flex-direction: column;
`
function Layout({children,modal}: Readonly<{children: React.ReactNode;modal:React.ReactNode}>) {
  return (  
    <Wrapper>
      {children}
      {modal}
    </Wrapper>
  );
}

export default Layout;
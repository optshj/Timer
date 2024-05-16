'use client'
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height:calc(100vh - ${({theme}) => theme.size.header_height});
`
export default function Layout({children,modal}:{children: React.ReactNode;modal:React.ReactNode}) {
  return (  
    <Wrapper>
      {children}
      {modal}
    </Wrapper>
  );
}
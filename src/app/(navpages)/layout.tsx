'use client'
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top:70px;
`
function Layout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Layout;
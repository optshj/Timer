'use client';
import styled from "styled-components";

const Wrap = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

interface WrapperProps{
    onClick: () => void;
    children: React.ReactNode;
}
export default function Wrapper({onClick, children}:WrapperProps){
    return(
        <Wrap onClick={onClick}>
            {children}
        </Wrap>
    )
}
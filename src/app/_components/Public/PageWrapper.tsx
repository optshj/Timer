import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width:100%; 
    height:100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

interface WrapperProps{
    onClick: () => void;
    children: React.ReactNode;
}
export default function PageWrapper({onClick, children}:WrapperProps){
    return(
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    )
}
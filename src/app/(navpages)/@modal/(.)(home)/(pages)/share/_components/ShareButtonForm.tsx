import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor:pointer;
`
const Text = styled.div`
    margin-top:5px;
    text-align: center;
    font-size: 14px;
    color: var(--text);
`
export default function ShareButtonForm({children,text}:{children:React.ReactNode,text:string}){
    return(
        <Wrapper>
            {children}
            <Text>{text}</Text>
        </Wrapper>
    )
}
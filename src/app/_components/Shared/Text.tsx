import styled from "styled-components";

const Wrapper = styled.div`
    font-size:32px;
    font-weight:500;
    color:${({theme})=>theme.color.text};
    white-space: nowrap;
    cursor:default;
    ${({theme}) => theme.media.medium`
        font-size:20px;
    `}
`

interface TextProps {
    text: string;
}
export default function Text(props:TextProps){
    return(
        <Wrapper>
            {props.text}
        </Wrapper>
    )
}
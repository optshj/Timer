import styled from "styled-components";

const Wrapper = styled.div`
    font-size:32px;
    font-weight:500;
    color:${({theme})=>theme.color.text_color};
    white-space: nowrap;
    ${({theme}) => theme.media.medium`
        font-size:24px;
    `}
`

interface TextProps {
    text: string;
}
function Text({text}:TextProps){
    return(
        <Wrapper>
            {text}
        </Wrapper>
    )
}
export default Text;
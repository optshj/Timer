import styled from "styled-components";

const Wrapper = styled.div`
    font-size:28px;
    font-weight:600;
    color:${({theme})=>theme.color.text_color};
    white-space: nowrap;
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
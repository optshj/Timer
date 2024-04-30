import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import useRipple from "@/src/_hooks/useRipple";

const ButtonText = styled.div`
    color: ${({theme}) => theme.color.header_font};
    font-size:24px;
`
const Wrapper = styled.div`
    width:80px;
    text-align: center;
    padding:18px 24px;
    cursor:pointer;
    overflow:hidden;
    position: relative;
    &:hover{
        ${ButtonText}{
            color:${({theme}) => theme.color.font_animation};
            transition: color 0.5s linear;
        }
    }
`

interface HeaderButtonProps {
    text: string;
    url: string;
}
function HeaderButton({ text,url }: HeaderButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const ripples = useRipple(buttonRef);

    return (
        <Link href={`/${url}`} >
            <Wrapper ref={buttonRef}>
                <ButtonText>
                    {text}
                    {ripples}
                </ButtonText>
            </Wrapper>
        </Link> 
    );
}
export default HeaderButton;

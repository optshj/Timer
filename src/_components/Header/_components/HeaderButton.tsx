import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import useRipple from "@/src/_hooks/useRipple";

const ButtonText = styled.div`
    color:#808080;
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
            color:#fff;
            transition: color 0.5s linear;
        }

    }
`

interface HeaderButtonProps {
    text: string;
}
function HeaderButton({ text }: HeaderButtonProps) {
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1); //첫글자를 대문자로 변경
    const buttonRef = useRef<HTMLDivElement>(null);
    const ripples = useRipple(buttonRef);

    return (
        <Link href={`/${text}`} >
            <Wrapper ref={buttonRef}>
                <ButtonText>
                    {capitalizedText}
                    {ripples}
                </ButtonText>
            </Wrapper>
        </Link> 
    );
}
export default HeaderButton;

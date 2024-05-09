import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import useRipple from "@/src/_hooks/useRipple";

const ButtonText = styled.div`

`
const Wrapper = styled.div`
    width:80px;
    text-align: center;
    padding:18px 24px;
    cursor:pointer;
    overflow:hidden;
    position: relative;
    color: ${({theme}) => theme.color.header_font};
    font-size:24px;
    &:hover{
        ${ButtonText}{
            color:${({theme}) => theme.color.font_animation};
            transition: color 0.5s linear;
        }
    }
    ${({theme}) => theme.media.medium`
        width:60px;
        font-size:20px;
        padding:21px 16px;
    `}
    ${({theme}) => theme.media.small`
        width:50px;
        font-size:14px;
        padding:24px 0;
    `}
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
                {text}
                {ripples}
            </Wrapper>
        </Link> 
    );
}
export default HeaderButton;

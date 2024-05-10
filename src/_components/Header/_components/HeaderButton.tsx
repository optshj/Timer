import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import useRipple from "@/src/_hooks/useRipple";

const ButtonText = styled.div`

`
const Wrapper = styled.div`
    width:100px;
    height:65px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
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
        width:80px;
        font-size:20px;
    `}
    ${({theme}) => theme.media.small`
        width:60px;
        font-size:14px;
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
                <ButtonText>{text}</ButtonText>
                {ripples}
            </Wrapper>
        </Link> 
    );
}
export default HeaderButton;

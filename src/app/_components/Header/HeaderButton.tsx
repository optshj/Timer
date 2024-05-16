import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import useRipple from "@/src/_hooks/useRipple";

const ButtonText = styled.div`
    text-align: center;
`
const Wrapper = styled.div`
    width:100px;
    position: relative;
    height:${({theme}) => theme.size.header_height};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:24px;
    color: ${({theme}) => theme.color.header_font};
    overflow:hidden;
    cursor:pointer;
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
export default function HeaderButton(props:HeaderButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const ripples = useRipple(buttonRef);

    return (
        <Link href={`/${props.url}`} >
            <Wrapper ref={buttonRef}>
                <ButtonText>{props.text}</ButtonText>
                {ripples}
            </Wrapper>
        </Link> 
    );
}
import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

import useRipple from "@/src/_hooks/useRipple";

const Wrapper = styled.div`
    display: flex;
    position: relative;
    width:100px;
    height:${({theme}) => theme.size.header_height};
    align-items: center;
    justify-content: center;
    font-size:24px;
    color: ${({theme}) => theme.color.header_font};
    overflow:hidden;
    cursor:pointer;
    &:hover{
        color:${({theme}) => theme.color.font_animation};
        transition: color 0.5s linear;
    }
    ${({theme}) => theme.media.medium`
        width:80px;
        font-size:20px;
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
                {props.text}
                {ripples}
            </Wrapper>
        </Link> 
    );
}
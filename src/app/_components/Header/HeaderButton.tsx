import { useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";

import useRipple from "@/src/_hooks/useRipple";

const Wrapper = styled.div<{$active:boolean}>`
    display: flex;
    position: relative;
    width:100px;
    height:${({theme}) => theme.size.header_height};
    align-items: center;
    justify-content: center;
    font-size:24px;
    color: ${(props) => props.$active ? 'var(--active_font)':'var(--header_font)'};
    overflow:hidden;
    cursor:pointer;
    &:hover{
        color: var(--active_font);
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
    const pathname = usePathname();

    return (
        <Link href={`${props.url}`} >
            <Wrapper ref={buttonRef} $active={pathname === props.url}>
                {props.text}
                {ripples}
            </Wrapper>
        </Link> 
    );
}
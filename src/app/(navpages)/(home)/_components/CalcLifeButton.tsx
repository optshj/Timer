import styled from "styled-components";
import Link from "next/link";

import useRipple from "@/src/_hooks/useRipple";
import { useRef } from "react";

const Button = styled.button`
    position:relative;
    overflow: hidden;
    font-size:24px;
    padding:10px;
    cursor:pointer;
    border: none;
    border-radius: 5px;
    color:${({theme}) => theme.color.button_text};
    background-color:${({theme}) => theme.color.button_background};
    white-space: nowrap;
    &:hover{
        background-color: ${({theme}) => theme.color.hover};
    }
`

export default function CalcLifeButton(){
    const ref = useRef<HTMLButtonElement>(null);
    const ripple = useRipple(ref);
    return(
        <Link href={"/survey"} scroll={false}>
            <Button ref={ref}>
                수명 계산하기
                {ripple}
            </Button>
        </Link>
    )
}
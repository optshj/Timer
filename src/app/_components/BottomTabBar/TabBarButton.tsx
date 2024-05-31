'use client'
import { useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

import useRipple from "@/src/_hooks/useRipple";

const Wrapper = styled.div`
    flex:1;
`
const IconWrapper = styled.div<{$active:boolean}>`
    height:60px;
    position:relative;
    overflow: hidden;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    font-size:24px;
    color:${(props) => props.$active ? props.theme.color.input_focus : "#bdbfc3"};
`
const Text = styled.div`
    font-size:12px;
    margin-top: 4px;
`
interface TabBarButtonProps {
    icon:IconType;
    text:string;
    url:string;
}
export default function TabarButton(props:TabBarButtonProps){
    const ref = useRef<HTMLDivElement>(null);
    const ripple = useRipple(ref);
    const pathname = usePathname();

    return(
        <Wrapper>
            <Link href={`${props.url}`}>
                <IconWrapper $active={pathname === props.url} ref={ref}>
                    {ripple}
                    <props.icon/>
                    <Text>{props.text}</Text>
                </IconWrapper>
            </Link>
        </Wrapper>
    )
}
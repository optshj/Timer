import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
    font-size:24px;
    color:#000;
`

interface TabBarButtonProps {
    icon:string;
    text:string;
    url:string;
}
export default function TabarButton(props:TabBarButtonProps){
    return(
        <Link href={`${props.url}`}>
            <Wrapper>
                {props.text}
            </Wrapper>
        </Link>
    )
}
import styled from "styled-components";
import Link from "next/link";

const Button = styled.button`
    font-size:24px;
    padding:10px;
    cursor:pointer;
    border: none;
    border-radius: 5px;
    color:${({theme}) => theme.color.button_text};
    background-color:${({theme}) => theme.color.button_background};
    &:hover{
        background-color: ${({theme}) => theme.color.hover_color};
    }
`

export default function CalcLife(){
    return(
        <Link href={"/survey"} scroll={false}>
            <Button>수명 계산하기</Button>
        </Link>
    )
}
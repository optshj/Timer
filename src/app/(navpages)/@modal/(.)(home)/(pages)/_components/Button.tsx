import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
    display: flex;
    gap:20px;
    position:absolute;
    bottom:${({theme}) => theme.position.modal_button};
`
const ButtonForm = styled.button`
    width:170px;
    height:70px;
    font-size:22px;
    border-radius: 8px;
    text-align: center;
    justify-content: center;
    background-color: transparent;
    cursor:pointer;
`
const NextButton = styled(ButtonForm)`
    border:none;
    background-color: ${({theme}) => theme.color.input_focus_color};
    color:${({theme}) => theme.color.background};
`
const PrevButton = styled(ButtonForm)`
    border:2px solid ${({theme}) => theme.color.input_focus_color};
    color:${({theme}) => theme.color.input_focus_color};
`
const SubmitButton = styled.button`
    width:360px;
    height:70px;
    font-size:22px;
    color:#fff;
    cursor:pointer;
    text-align: center;
    border:none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.color.input_focus_color};
`
interface ButtonProps {
    id: number;
}
export default function Button({id}:ButtonProps){
    return(
        <Wrapper>
            {id === 24 ?
                <Link href="/result">
                    <SubmitButton>제출하기</SubmitButton>
                </Link>
                :
                <>
                <Link href={id-1 === -1 ? `survey`:`${id-1}`} scroll={false}>
                    <PrevButton>이전</PrevButton>
                </Link>
                <Link href={`${id + 1}`} scroll={false}>
                    <NextButton>다음</NextButton>
                </Link>
                </>
            }
        </Wrapper>
    )
}
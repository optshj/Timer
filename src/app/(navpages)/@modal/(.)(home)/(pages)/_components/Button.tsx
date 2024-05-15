import styled from "styled-components";
import Link from "next/link";

import { useParams } from "next/navigation";
import { useLeftLife } from "@/src/_context/LeftLifeContext";

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
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    background-color: transparent;
    border:none;
    cursor:pointer;
    transition: all 0.3s linear;    
`
interface ButtonFormProps{
    $selectScore: number;
}
const NextButton = styled(ButtonForm)<ButtonFormProps>`
    background-color: ${(props) => (props.$selectScore) === -999 ? '#bfbfbf' : (props) => props.theme.color.button_enable_color};
    color:${({theme}) => theme.color.background};
    cursor:${(props) => (props.$selectScore) === -999 ? 'default' : 'pointer'};
`
const PrevButton = styled(ButtonForm)`
    border:2px solid ${({theme}) => theme.color.button_enable_color};
    color:${({theme}) => theme.color.button_enable_color};
`
const SubmitButton = styled(ButtonForm)<ButtonFormProps>`
    background-color:${(props) => (props.$selectScore) === -999 ? '#bfbfbf' : (props) => props.theme.color.button_enable_color};
    color:${({theme}) => theme.color.background};
    cursor:${(props) => (props.$selectScore) === -999 ? 'default' : 'pointer'};
`

function getRandomNumber(a:number, b:number) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

interface ButtonProps {
    selectScore: number;    
}
export default function Button({selectScore}:ButtonProps){
    const {birthDate,deathDate,setDeath} = useLeftLife();
    console.log(deathDate);
    const id = parseInt(useParams().id as string);

    const handleNext = (e:React.MouseEvent<HTMLAnchorElement>) => {
        if (selectScore === -999) e.preventDefault();
        else setDeath(new Date(`${deathDate.years + selectScore}-${getRandomNumber(1,12)}-${getRandomNumber(1,28)}`))
    }
    const handlePrev = (e:React.MouseEvent<HTMLAnchorElement>) => {
        setDeath(new Date(`${deathDate.years - (deathDate.years - birthDate.years)}-${getRandomNumber(1,12)}-${getRandomNumber(1,28)}`));
    }
    
    return(
        <Wrapper>
            <Link href={id-1 === -1 ? `survey`:`${id-1}`} scroll={false} replace={true} onClick={handlePrev}>
                <PrevButton>이전</PrevButton>
            </Link>
            {id === 8?
                <Link href="/result" scroll={false} replace={true} onClick={handleNext}>
                    <SubmitButton $selectScore={selectScore}>제출</SubmitButton>
                </Link>
                :
                <Link href={`${id + 1}`} scroll={false} replace={true} onClick={handleNext}>
                    <NextButton $selectScore={selectScore}>다음</NextButton> 
                </Link>
            }
        </Wrapper>
    )
}
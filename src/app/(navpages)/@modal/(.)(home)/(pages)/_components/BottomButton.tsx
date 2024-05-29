import styled from "styled-components";
import Link from "next/link";

import surveyData from '@/src/_data/surveys.json';

import { useParams } from "next/navigation";
import { useScoreArray } from "@/src/_context/ScoreContext";
import { useLeftLife } from "@/src/_context/LeftLifeContext";

const Wrapper = styled.div`
    position:absolute;
    display: flex;
    gap:20px;
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
    ${({theme}) => theme.media.small`
        width:140px;
    `}
`
interface ButtonFormProps{
    $isSelect: boolean
}
const NextButton = styled(ButtonForm)<ButtonFormProps>`
    background-color: ${(props) => props.$isSelect ? props.theme.color.button_enable : props.theme.color.button_disable};
    color:${({theme}) => theme.color.background};
    cursor:${(props) => props.$isSelect ?  'pointer' : 'default'};
`
const PrevButton = styled(ButtonForm)`
    border:2px solid ${({theme}) => theme.color.button_enable};
    color:${({theme}) => theme.color.button_enable};
`
const SubmitButton = styled(ButtonForm)<ButtonFormProps>`
    background-color: ${(props) => props.$isSelect ? props.theme.color.button_enable : props.theme.color.button_disable};
    color:${({theme}) => theme.color.background};
    cursor:${(props) => props.$isSelect ?  'pointer' : 'default'};
`

function getRandomNumber(a:number, b:number) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

interface BottomButtonProps {
    selectScore: number;    
    isSelect: boolean
}
export default function BottomButton(props:BottomButtonProps){
    const surveyArrayLength = (JSON.parse(JSON.stringify(surveyData.surveys)) as string[]).length;

    const {scoreArray,setScoreArray} = useScoreArray();
    const {birthDate,setDeathDate} = useLeftLife();
    
    const id = parseInt(useParams().id as string);

    const handleNext = (e:React.MouseEvent<HTMLAnchorElement>) => {
        if (!props.isSelect) e.preventDefault();
        else setScoreArray([...scoreArray,props.selectScore]);
    }
    const handlePrev = () => {
        setScoreArray(scoreArray.slice(0,-1));
    }
    const handleSubmit = () => {
        const totalScore = scoreArray.reduce((acc:number, cur:number) => acc + cur, 0);
        setDeathDate(new Date(`${birthDate.years + totalScore}-${getRandomNumber(1,12)}-${getRandomNumber(1,28)}`));
    }
    return(
        <Wrapper>
                <Link href={id-1 === -1 ? `survey`:`${id-1}`} onClick={handlePrev} scroll={false} replace={true} >
                    <PrevButton>이전</PrevButton>
                </Link>
            {id === surveyArrayLength - 1?
                <Link href="/result" onClick={handleSubmit} scroll={false} replace={true} >
                    <SubmitButton $isSelect={props.isSelect}>제출</SubmitButton>
                </Link>
                :
                <Link href={`${id + 1}`} onClick={handleNext} scroll={false} replace={true} >
                    <NextButton $isSelect={props.isSelect}>다음</NextButton> 
                </Link>
            }
        </Wrapper>
    )
}
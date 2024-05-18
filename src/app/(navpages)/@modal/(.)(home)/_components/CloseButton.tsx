import styled from "styled-components"

import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";

const Wrapper = styled.div`
    position: absolute;
    top:12px;
    left:8px;
    cursor:pointer;
`
const CloseIcon = styled(MdClose)`
    width:28px;
    height:28px;
    color:${({theme}) => theme.color.text};
    border-radius: 50%;
    &:hover{
        background-color:${({theme}) => theme.color.hover};
    }
`

export default function CloseButton(){
    const router = useRouter();
    const onExit = () => router.back();
    
    return(
        <Wrapper onClick={onExit}>
            <CloseIcon/>
        </Wrapper>
    )
}
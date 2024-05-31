import styled from "styled-components"

import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";

const Wrapper = styled.div`
    position: absolute;
    top:12px;
    right:8px;
    cursor:pointer;
`
const CloseIcon = styled(MdClose)`
    width:28px;
    height:28px;
    color: var(--text);
    border-radius: 50%;
    &:hover{
        background-color: var(--hover);
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
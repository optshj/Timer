import styled from "styled-components"

import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";


const Wrapper = styled.div`
    position: absolute;
    top:0;
    left:0;
    padding:12px 8px;
    cursor:pointer;
`
const CloseIcon = styled(MdClose)`
    width:28px;
    height:28px;
    color:${({theme}) => theme.color.text_color};
`
export default function CloseButton(){
    const router = useRouter();
    const onBack = () => {
        router.back();
    }
    return(
        <Wrapper onClick={onBack}>
            <CloseIcon/>
        </Wrapper>

    )
}
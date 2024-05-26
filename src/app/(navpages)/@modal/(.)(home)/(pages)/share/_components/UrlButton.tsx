import styled   from "styled-components";
import { HiLink } from "react-icons/hi2";

import ShareButtonForm from "./ShareButtonForm";
const UrlIcon = styled(HiLink)`
    width:30px;
    height:30px;
    color:#fdfdfd;
`
const Url = styled.div`
    width:60px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight: 600;
    background-color:#6f6f6f;
    border-radius: 50%;
`
export default function UrlButton(){
    const handleCopyUrl = async (text:string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('클립보드에 복사되었습니다.');
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <ShareButtonForm text={"링크복사"}>
            <Url onClick={() => handleCopyUrl("http://localhost:3000")}>
                <UrlIcon/>
            </Url>
        </ShareButtonForm>
    )
}
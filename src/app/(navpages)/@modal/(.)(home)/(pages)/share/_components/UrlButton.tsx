import { useEffect, useState } from 'react';
import styled  from "styled-components";

import { GoLink } from "react-icons/go";

import ShareButtonForm from "./ShareButtonForm";

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
const Icon = styled(GoLink)`
    width:30px;
    height:30px;
    color:#fdfdfd;
`

export default function UrlButton(){
    const [baseUrl, setBaseUrl] = useState('');

    useEffect(() => {
        const getBaseUrl = () => {
            const { protocol, host } = window.location;
            return `${protocol}//${host}`;
        };

        setBaseUrl(getBaseUrl());
    }, []);
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
            <Url onClick={() => handleCopyUrl(baseUrl)}>
                <Icon/>
            </Url>
        </ShareButtonForm>
    )
}
import { useEffect, useState } from 'react';
import styled,{keyframes} from "styled-components";

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
const fadeIn = keyframes`
    from {
        opacity: 0;
        top:0;
    }
    to {
        opacity: 1;
        top:20px;
    }
`;
const Toast = styled.div`
    position: fixed;
    top:20px;
    left: 50%;
    transform: translateX(-50%);
    background-color:${({theme}) => theme.color.bright_background};
    color: ${({theme}) => theme.color.text};
    padding: 16px 32px;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 0.5s ease-in-out;
    font-size:20px;
    font-weight:700;
    z-index: 1000;
`;

export default function UrlButton(){
    const [baseUrl, setBaseUrl] = useState('');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const getBaseUrl = () => {
            const { protocol, host } = window.location;
            return `${protocol}//${host}`;
        };

        setBaseUrl(getBaseUrl());
    }, []);
    const showMessage = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 1000);
    }
    const handleCopyUrl = async (text:string) => {
        try {
            await navigator.clipboard.writeText(text);
            showMessage();
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <>
            <ShareButtonForm text={"링크복사"}>
                <Url onClick={() => handleCopyUrl(baseUrl)}>
                    <Icon/>
                </Url>
            </ShareButtonForm>
            {visible && <Toast>복사했어요!</Toast>}
        </>
    )
}
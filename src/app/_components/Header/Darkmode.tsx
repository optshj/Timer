import { useState,useEffect} from "react";
import styled from "styled-components";

import { MdDarkMode,MdLightMode } from "react-icons/md";

import { useTheme } from "@/src/_context/DarkmodeContext";

interface themeProps{
    $theme:string;
}
const Wrapper = styled.div`
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    height:40px;
    width:90px;
    margin:16px;
    color: var(--icon);
    border:2px solid var(--bright_background);
    border-radius:30px;
    background-color: var(--icon_background);
    cursor:pointer;
`
const IconWrapper = styled.div<themeProps>`
    position:absolute;
    left: ${(props) => props.$theme === 'light'? '5%':'60%'};
    transition: left 0.3s ease-in-out;
    width:20px;
    height:20px;
    padding:4px;
    background-color: #fff;
    border:1px solid #fff;
    border-radius: 50%;
    color: var(--icon_background);
`
const Font = styled.div<themeProps>`
    position: absolute;
    font-size:15px;
    color: var(--icon_text);
    left: ${(props) => props.$theme === 'light'? '45%':'10%'};
`
const DarkIcon = styled(MdDarkMode)`
    width:20px;
    height:20px;
`
const LightIcon = styled(MdLightMode)`
    width:20px;
    height:20px;
    color: var(--icon_background);
`

export default function Darkmode(){
    const { theme, toggleTheme } = useTheme();
    const [colorMode, setColorMode] = useState<string | null>(null);

    useEffect(() => {
        const initialColorMode = getComputedStyle(document.documentElement).getPropertyValue('--initial-color-mode').trim();
        setColorMode(initialColorMode);
    }, []);

    if (colorMode === null) {
        return null; // 로딩 상태 처리
    }
    return(
        <Wrapper onClick={toggleTheme}>
            <Font $theme={theme}>{theme.toUpperCase()}</Font>
            <IconWrapper $theme={theme}>
                {theme === 'light' ? <LightIcon/> : <DarkIcon/>}
            </IconWrapper>
        </Wrapper>
    )
}
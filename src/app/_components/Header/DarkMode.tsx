import styled from "styled-components";

import { MdDarkMode,MdLightMode } from "react-icons/md";

import { useTheme } from "@/src/_context/DarkmodeContext";

interface themeProps{
    $theme:string;
}
const Wrapper = styled.div<themeProps>`
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    height:40px;
    width:90px;
    margin:16px;
    color:${({theme}) => theme.color.icon};
    border:2px solid ${({theme}) => theme.color.bright_background};
    border-radius:30px;
    background-color: ${(props) => props.$theme === 'light'? '#f0c401':'#2c2836'};
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
`
const Font = styled.div<themeProps>`
    position: absolute;
    font-size:15px;
    color:${(props) => props.$theme === 'light'? '#fbf2ba':'#736e85'};
    left: ${(props) => props.$theme === 'light'? '45%':'10%'};
`
const DarkIcon = styled(MdDarkMode)`
    width:20px;
    height:20px;
    color:#2c2836;
`
const LightIcon = styled(MdLightMode)`
    width:20px;
    height:20px;
    color:#f0c401;
`

export default function Darkmode(){
    const {theme,toggleTheme} = useTheme();
    return(
        <Wrapper onClick={toggleTheme} $theme={theme}>
            <Font $theme={theme}>{theme.toUpperCase()}</Font>
            <IconWrapper $theme={theme}>
                {theme === 'light' ? <LightIcon/> : <DarkIcon/>}
            </IconWrapper>
        </Wrapper>
    )
}
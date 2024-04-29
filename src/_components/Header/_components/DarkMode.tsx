import styled from "styled-components";


import { MdDarkMode,MdLightMode } from "react-icons/md";
import { useTheme } from "@/src/_context/DarkmodeContext";

const Wrapper = styled.div`
    cursor:pointer;
    margin:16px;
    color:${({theme}) => theme.color.icon_color};
`
const DarkIcon = styled(MdDarkMode)`
    width:30px;
    height:30px;
`
const LightIcon = styled(MdLightMode)`
    width:30px;
    height:30px;
`

function DarkMode(){
    const {theme,toggleTheme} = useTheme();
    return(
        <Wrapper onClick={toggleTheme}>
            {theme === 'dark'? <DarkIcon/> : <LightIcon/>}
        </Wrapper>
    )
}
export default DarkMode;
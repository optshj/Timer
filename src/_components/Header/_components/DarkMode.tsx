import styled from "styled-components";


import { MdDarkMode,MdLightMode } from "react-icons/md";
import { useTheme } from "@/src/app/DarkmodeProvider";

const Wrapper = styled.div`
    font-size:30px;
    cursor:pointer;
    margin:16px;
    color:${({theme}) => theme.color.icon_color};
`
const DarkIcon = styled(MdDarkMode)`
`
const LightIcon = styled(MdLightMode)`
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
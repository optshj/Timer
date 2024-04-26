import styled from "styled-components";

import { MdDarkMode,MdLightMode } from "react-icons/md";

const Wrapper = styled.div`
    font-size:30px;
    cursor:pointer;
`
const DarkIcon = styled(MdDarkMode)`
    color:#fff;
`
const LightIcon = styled(MdLightMode)`
    color:#000;
`
function DarkMode(){
    return(
        <Wrapper>
            <DarkIcon/>
            <LightIcon/>
        </Wrapper>
    )
}
export default DarkMode;
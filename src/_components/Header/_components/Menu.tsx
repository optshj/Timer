import styled from "styled-components";
import { VscMenu } from "react-icons/vsc";

const Wrapper = styled.div`
    width:30px;
    height:30px;
    padding:16px; 
    border-radius: 50%;
    margin-left:12px;
    cursor:pointer;
    &:hover{
        transition: background-color 0.3s linear;
        background-color:${({theme}) => theme.color.hover_color};
    }
    &:active{
        background-color:${({theme}) => theme.color.active_color};
    }
`
const MenuIcon = styled(VscMenu)`
    color:${({theme}) => theme.color.icon_color};
    font-size:30px;
`

function Menu(){
    return(
        <Wrapper>
            <MenuIcon/>
        </Wrapper>
    )
}
export default Menu;
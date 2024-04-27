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
        background-color: #606060;
    }
`
const MenuIcon = styled(VscMenu)`
    color:#fff;
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
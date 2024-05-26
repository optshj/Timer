import styled from "styled-components"
import TabarButton from "./TabBarButton"

const Wrapper = styled.nav`
    display:none;
    ${({theme}) => theme.media.small`
        position:fixed;
        width:100%;
        height:60px;
        bottom:0;
        margin:0 auto;
        display:flex;
        align-items:center;
        justify-content:space-around;
        background-color:#212121;
    `}

`

export default function BottomTabBar(){
    return(
        <Wrapper>
            <TabarButton icon="home" text="Home" url="/"/>
            <TabarButton icon="life" text="Life" url="/life"/>
            <TabarButton icon="year" text="Year" url="/year"/>
            <TabarButton icon="month" text="Month" url="/month"/>
            <TabarButton icon="today" text="Today" url="/today"/>
        </Wrapper>
    )
}
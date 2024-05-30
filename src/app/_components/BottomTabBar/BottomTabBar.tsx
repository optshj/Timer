import styled from "styled-components"
import TabarButton from "./TabBarButton"

import { AiOutlineHome } from "react-icons/ai";
import { BsHeartPulse } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

import { MdCalendarToday } from "react-icons/md";

import { BsCalendarMonth } from "react-icons/bs";

const Wrapper = styled.nav`
    display:none;
    ${({theme}) => theme.media.small`
        display:flex;
        position:fixed;
        width:100%;
        bottom:0;
        box-shadow: 0px -4px 4px ${theme.color.shadow};
    `}

`

export default function BottomTabBar(){
    return(
        <Wrapper>
            <TabarButton icon={AiOutlineHome} text="Home" url="/"/>
            <TabarButton icon={BsHeartPulse} text="Life" url="/life"/>
            <TabarButton icon={IoCalendarOutline} text="Year" url="/year"/>
            <TabarButton icon={BsCalendarMonth} text="Month" url="/month"/>
            <TabarButton icon={MdCalendarToday} text="Today" url="/today"/>
        </Wrapper>
    )
}
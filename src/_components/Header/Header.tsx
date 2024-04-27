'use client'
import styled from 'styled-components';

import Menu from './_components/Menu';
import HeaderButton from './_components/HeaderButton';
import DarkMode from './_components/DarkMode';

const Wrapper = styled.header`
    width: 100%;
    top:0;
    left:0;
    position: fixed;
    display: flex;
    flex-direction: row;
    border-bottom:1px solid #909090;
`
const ButtonWrapper = styled.nav`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin:0 auto;
`
function Header() {
    return(
        <Wrapper>
            <Menu/>
            <ButtonWrapper>
                <HeaderButton text="home"/>
                <HeaderButton text="life"/>
                <HeaderButton text="year"/>
                <HeaderButton text="month"/>
                <HeaderButton text="today"/>
            </ButtonWrapper>
            <DarkMode/>
        </Wrapper>
    )
}
export default Header;
'use client'
import styled from 'styled-components';

import HeaderButton from './HeaderButton';
import DarkMode from './DarkMode';
import Logo from './Logo';
import KaKaoShareButton from '../Public/KakaoShareButton';

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 2px 4px ${({theme}) => theme.color.shadow};
`
const ButtonWrapper = styled.nav`
    display: flex;
    align-items: center ;
    justify-content: center;
    margin:0 auto;
`
function Header() {
    return(
        <Wrapper>
            <Logo/>
            <ButtonWrapper>
                <HeaderButton text="Home" url=""/>
                <HeaderButton text="Life" url="life"/>
                <HeaderButton text="Year" url="year"/>
                <HeaderButton text="Month" url="month"/>
                <HeaderButton text="Today" url="today"/>
            </ButtonWrapper>
            <KaKaoShareButton/>
            <DarkMode/>
        </Wrapper>
    )
}
export default Header;
'use client'
import styled from 'styled-components';

import Logo from './Logo';
import HeaderButton from './HeaderButton';
import ShareButton from './ShareButton';
import DarkMode from './DarkMode';

const Wrapper = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 2px 4px ${({theme}) => theme.color.shadow};
`
const CenterWrapper = styled.nav`
    display: flex;
    align-items: center ;
    justify-content: center;
    margin:0 auto;
`
const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
function Header() {
    return(
        <Wrapper>
            <Logo/>
            <CenterWrapper>
                <HeaderButton text="Home" url=""/>
                <HeaderButton text="Life" url="life"/>
                <HeaderButton text="Year" url="year"/>
                <HeaderButton text="Month" url="month"/>
                <HeaderButton text="Today" url="today"/>
            </CenterWrapper>
            
            <RightWrapper>
                <ShareButton/>
                <DarkMode/>
            </RightWrapper>
        </Wrapper>
    )
}
export default Header;
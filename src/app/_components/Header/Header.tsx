'use client'
import styled from 'styled-components';

import Logo from './Logo';
import HeaderButton from './HeaderButton';
import ShareButton from './ShareButton';
import DarkMode from './DarkMode';

const Wrapper = styled.header`
    display: flex;
    width: 100%;
    box-shadow: 0px 2px 4px ${({theme}) => theme.color.shadow};
`
const LeftContent = styled.div`
    box-sizing:border-box;
    display: flex;
    align-items: center;
    padding-left:16px;
    width:166px;
`
const CenterContent = styled.nav`
    display: flex;
    align-items: center ;
    justify-content: center;
    margin:0 auto;
`
const RightContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:166px;
`
function Header() {
    return(
        <Wrapper>
            <LeftContent>
                <Logo/>
            </LeftContent>

            <CenterContent>
                <HeaderButton text="Home" url=""/>
                <HeaderButton text="Life" url="life"/>
                <HeaderButton text="Year" url="year"/>
                <HeaderButton text="Month" url="month"/>
                <HeaderButton text="Today" url="today"/>
            </CenterContent>
            
            <RightContent>
                <ShareButton/>
                <DarkMode/>
            </RightContent>
        </Wrapper>
    )
}
export default Header;
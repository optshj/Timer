import styled from 'styled-components';

import Logo from './Logo';
import HeaderButton from './HeaderButton';
import ShareButton from './ShareButton';
import Darkmode from './Darkmode';

const Wrapper = styled.header`
    display: flex;
    box-shadow: 0px 2px 4px var(--shadow);
    ${({theme}) => theme.media.small`
        box-shadow:none;
    `}
`
const LeftContent = styled.div`
    width:166px;
    padding-left:16px;
    box-sizing:border-box;
    ${({theme}) => theme.media.small`
        display:none;    
    `}
`
const CenterContent = styled.nav`
    display: flex;
    margin:0 auto;
    ${({theme}) => theme.media.small`
        display:none;    
    `}
`
const RightContent = styled.div`
    display: flex;
    align-items: center;
    width:166px;
    ${({theme}) => theme.media.small`
        margin-left:auto;
    `}
`
function Header() {
    return(
        <Wrapper>
            <LeftContent>
                <Logo/>
            </LeftContent>

            <CenterContent>
                <HeaderButton text="Home" url="/"/>
                <HeaderButton text="Life" url="/life"/>
                <HeaderButton text="Year" url="/year"/>
                <HeaderButton text="Month" url="/month"/>
                <HeaderButton text="Today" url="/today"/>
            </CenterContent>
            
            <RightContent>
                <ShareButton/>
                <Darkmode/>
            </RightContent>
        </Wrapper>
    )
}
export default Header;
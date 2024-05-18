import styled from "styled-components"
import HeaderButton from "./HeaderButton"

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 700;
    color: ${({theme}) => theme.color.text};
`

const Text = styled.span`
    width:100px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    ${({theme}) => theme.media.medium`
        width:80px;
    `}
    ${({theme}) => theme.media.small`
        width:60px;
    `}
`

export default function Logo() {
    return(
        <Wrapper>
            <HeaderButton text={''} url={'/'}/>
            <Text>LifeTimer</Text>
        </Wrapper>
    )
}

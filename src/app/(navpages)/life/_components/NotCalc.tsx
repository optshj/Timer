import styled from "styled-components"

import CalcLifeButton from "../../(home)/_components/CalcLifeButton"

const Wrapper = styled.div`
    display: flex;
    width:100%; 
    height:calc(100vh - ${({theme}) => theme.size.header_height});
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.div`
    color: var(--text);
    font-size:28px;
    font-weight: 500;
`
const SubTitle = styled.div`
    margin:20px 0;
    color: var(--text);
    font-size: 16px;
    font-weight: 300;
`

export default function NotCalc() {
    return(
        <Wrapper>
            <Title>아직 수명을 계산하지 않으셨네요</Title>
            <SubTitle>해당 기능은 수명을 계산하고 사용할 수 있어요</SubTitle>
            <CalcLifeButton/>
        </Wrapper>
    )
}
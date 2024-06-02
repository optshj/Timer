import styled from "styled-components"
import Link from "next/link"

const Wrapper = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    cursor:pointer;
`
const Text = styled.h1`
    font-size:16px;
    color: var(--text);
    box-sizing: border-box;
`

export default function Logo() {
    return(
        <Link href={'/'} scroll={false}>
            <Wrapper>
                <Text>LifeTimer</Text>
            </Wrapper>
        </Link>
    )
}
import styled from "styled-components"
import Link from "next/link"

const Text = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: ${({theme}) => theme.color.text};
`

export default function Logo() {
    return(
        <Link href={''} scroll={false}>
            <Text>LifeTimer</Text>
        </Link>
    )
}

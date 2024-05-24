import styled from "styled-components";
import Link from "next/link";

import { HiOutlineShare } from "react-icons/hi";

const Button = styled(HiOutlineShare)`
    width:20px;
    height:20px;
    padding:10px;
    color:${({theme}) => theme.color.text};
    cursor:pointer;
    ${({theme}) => theme.media.small`
        padding:10px 0;
    `}
`

export default function ShareButton() {
    return(
        <Link href='/share' scroll={false}>
            <Button/>
        </Link>
    )
}
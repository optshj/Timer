import styled from "styled-components";
import Link from "next/link";

import { PiShareNetworkLight } from "react-icons/pi";

const Button = styled(PiShareNetworkLight)`
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
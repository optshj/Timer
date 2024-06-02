"use client"
import styled from 'styled-components';

import Modal from '../../../_components/Public/Modal';
import CloseButton from './_components/CloseButton';

const Wrapper = styled.div`
    position: relative;
    width:400px;
    height:600px;
    border-radius: 10px;
    background-color: var(--background);
    ${({theme}) => theme.media.small`
        width:calc(100vw - 24px);
    `}
`

export default function Layout({children}: Readonly<{children:React.ReactNode}>){
    return(
        <Modal>
            <Wrapper>
                {children}
                <CloseButton/>
            </Wrapper>
        </Modal>
    )
}
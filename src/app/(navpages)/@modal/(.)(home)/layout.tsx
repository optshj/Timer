"use client"
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Modal from '../../../_components/Public/Modal';
import CloseButton from './_components/CloseButton';

const Wrapper = styled.div`
    width:400px;
    height:600px;
    border-radius: 10px;
    background-color: var(--background);
    position: relative;
    ${({theme}) => theme.media.small`
        width:calc(100vw - 24px);
    `}
`

export default function Layout({children}: Readonly<{children:ReactNode}>){
    return(
        <Modal>
            <Wrapper>
                {children}
                <CloseButton/>
            </Wrapper>
        </Modal>
    )
}
"use client"
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Modal from '../../../_components/Modal';
import CloseButton from './_components/CloseButton';

const Wrapper = styled.div`
    width:450px;
    height:600px;
    border-radius: 5px;
    background-color:${({theme}) => theme.color.background};
    transition: all 0.3s linear;
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
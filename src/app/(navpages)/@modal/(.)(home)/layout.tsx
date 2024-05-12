"use client"
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Modal from '../../_components/Modal';
import BackButton from './_components/BackButton';

const Wrapper = styled.div`
    width:450px;
    height:600px;
    border-radius: 5px;
    background-color:${({theme}) => theme.color.background};
`

export default function Layout({children}: Readonly<{children:ReactNode}>){
    return(
        <Modal>
            <Wrapper>
                {children}
                <BackButton/>
            </Wrapper>
        </Modal>
    )
}
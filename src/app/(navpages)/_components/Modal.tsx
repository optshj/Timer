import React, { ReactNode, useCallback } from 'react';
import Router from 'next/router';
import styled from 'styled-components';

const Outer = styled.div`
    
`
const Inner = styled.div`
`
export default function Modal({children}: Readonly<{children:ReactNode}>){

    const onClose = useCallback(() => {
        Router.back();
    },[Router])

    return(
        <Outer onClick={onClose}>
            <Inner>
                {children}
            </Inner>
        </Outer>
    )
}
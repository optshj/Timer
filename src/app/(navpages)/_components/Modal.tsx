'use client'
import React, { ReactNode, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Outer = styled.div`
    position: absolute;
    top:0;
    z-index:101;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.8);
`
const Inner = styled.div`
    width:500px;
    height:200px;
    color:white;
`
export default function Modal({children}: Readonly<{children:ReactNode}>){
    const router = useRouter();
    const onClose = useCallback(() => {
        router.back();
    },[router])

    return(
        <Outer onClick={onClose}>
            <Inner>
                {children}
            </Inner>
        </Outer>
    )
}
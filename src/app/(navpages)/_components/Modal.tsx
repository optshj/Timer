'use client'
import React, { ReactNode, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Outer = styled.div`
    position: fixed;
    top:0;
    z-index:100;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.8);
`
const Inner = styled.div`
    z-index:101;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`
export default function Modal({children}: Readonly<{children:ReactNode}>){
    const router = useRouter();
    const onClose = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            router.push('/');
        }
    },[router])
    return(
        <Outer onClick={onClose}>
            <Inner>
                {children}
            </Inner>
        </Outer>
    )
}
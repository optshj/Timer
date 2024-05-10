"use client"
import styled from 'styled-components';
import Modal from '../../../_components/Modal';

const Wrapper = styled.div`
    width:1000px;
    height:100px;
    background-color:red;
`
export default function CalcLife(){
    return(
        <Modal>
        <Wrapper>
        </Wrapper>
        </Modal>
    )
}
import { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalStyles:ReactModal.Styles = {

}
const ResponsiveModal = styled(Modal)`

`
export default function CalcLifeModal(){
    const [modalOpen,setModalOpen] = useState(false);
    return (
        <ResponsiveModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={ModalStyles}>

        </ResponsiveModal>
    )
}
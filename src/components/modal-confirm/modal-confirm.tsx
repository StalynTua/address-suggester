import React, {useState} from 'react';
import ModalContainer, {
    ModalBody,
    ModalFooter,
    ModalContent,
    CloseButton,
    SuccessButton,
    ModalContainerTitle
} from "./modal-confirm.style";

export interface MessagesModalConfirm {
    title: string;
    subTitle: string;
    description: string;
    note: string;
}

export interface ModalProps {
    messagesModalConfirm: MessagesModalConfirm;
    handleSuccess?: () => void;
    handleClose?: () => void;
}

const Modal = (props: ModalProps) => {
    return (
        <ModalContainer>
            <ModalContent>
                <CloseButton onClick={props.handleSuccess}>&times;</CloseButton>
                <ModalBody>
                    <ModalContainerTitle>
                        <h2>{props.messagesModalConfirm.title}</h2>
                        <h3>{props.messagesModalConfirm.subTitle}</h3>
                        <h4>{props.messagesModalConfirm.description}</h4>
                        <h4>{props.messagesModalConfirm.note}</h4>
                    </ModalContainerTitle>
                </ModalBody>
                <ModalFooter>
                    <SuccessButton onClick={props.handleSuccess}>UNDERSTOOD</SuccessButton>
                </ModalFooter>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
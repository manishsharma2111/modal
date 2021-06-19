import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import image from '../../image/glory.jpg';
import { X } from '@styled-icons/feather/X';
import { Button, ButtonGroup } from './button';

const Modalcontainer = styled.div`
    padding-bottom: 1em;
    border: 2px solid red;

    display: grid;
    grid-auto-flow: column;
    gap: 1em;
    border: none;
    @media screen and (max-width: 700px) {
        grid-auto-flow: row;
    }
`;

const ModalContent = styled.p`
    width: 100%;
    line-height: 1.6;
    @media screen and (max-width: 700px) {
        width: 100%;
        display: none;
    }
`;

const ModalImg = styled.img`
    position: relative;
    border-radius: 1em;
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    /* min-width: 15em;
    min-height: 15em; */
`;
const RightItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const LeftItem = styled.div`
    border-radius: 1em;
`;

const customStyles = {
    content: {
        position: 'absolute',
        paddingTop: '10px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        backgroundColor: 'white',

        transform: 'translate(-50%, -50%)',
        overflow: 'auto',
        borderRadius: '1em',
        maxWidth: 'calc(100vw - 35px)',
        maxHeight: 'calc(100vh - 70px)',
        border: '2px solid pink',
    },
    overlay: {},
};
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.3)';
Modal.defaultStyles.overlay.zIndex = 90;
Modal.setAppElement('#root');

const ReactModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Button onClick={openModal} backgroundColor='beige'>
                Open Modal
            </Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
            >
                <X
                    onClick={closeModal}
                    style={{
                        fontSize: '3em',
                        maxWidth: '1em',
                        cursor: 'pointer',
                        paddingInline: '0.2em',
                        marginLeft: '96.5%',
                    }}
                />

                <Modalcontainer>
                    <LeftItem>
                        <ModalImg src={image} />
                    </LeftItem>

                    <RightItem>
                        <ModalContent>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laboriosam ullam at optio Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit. Laboriosam
                            ullam at optio Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Laboriosam ullam at
                            optio Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Laboriosam ullam at optio Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Laboriosam ullam at optio Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Laboriosam ullam
                            at optio Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Laboriosam ullam at optio Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Laboriosam ullam at optio s
                        </ModalContent>
                        <ButtonGroup>
                            <Button color='white' backgroundColor='black'>
                                Schedule Game
                            </Button>
                            <Button color='white' backgroundColor='pink'>
                                Create Game
                            </Button>
                        </ButtonGroup>
                    </RightItem>
                </Modalcontainer>
            </Modal>
        </div>
    );
};
export default ReactModal;

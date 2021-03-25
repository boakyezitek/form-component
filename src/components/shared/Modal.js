import React from 'react';
import ReactModal from 'react-modal';
import {BsX} from "react-icons/bs";
import "./shared.css";
import Button from './Button';
function Modal({children, heading, isOpen, setIsOpen, handleSubmit}) {
    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <React.Fragment>
            <ReactModal 
            className="Modal"
            overlayClassName="Overlay"
             isOpen={isOpen}>
                 <div className="modal__heading">
                    <h3>{heading}</h3>
                    <div onClick={closeModal}>
                        <BsX className="modal__close__icon"/>
                    </div>
                 </div>

                 <div className="modal__body">
                 {children}
                 </div>
                
                <div className="modal__footer">
                    <div className="modal__btn__view">
                    <Button onClick={closeModal} defaultBtn small label="Cancle"/>
                    <Button onClick={ handleSubmit} success label="Save" small/>
                    </div>
                </div>
            </ReactModal>
        </React.Fragment>
    );
}

export default Modal;
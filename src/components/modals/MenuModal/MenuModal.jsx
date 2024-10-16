import React from 'react';
import './MenuModal.css';

const Modal = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={closeModal}>X</button>
                <div className="modal-body">
                    {/* Add your modal content here */}
                    <h2>Menu</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;

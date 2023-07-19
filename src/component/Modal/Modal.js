import React from 'react'
import "./Modal.css"

export default function Modal({modalContent, closeModal}) {
    return (
        <div className='modal'>
            <div className='beast-modal'>
                <img src={modalContent.image_url} alt={modalContent.title}></img>
                <h3>{modalContent.title}</h3>
                <p>{modalContent.description}</p>
                <button className='close-button' onClick={closeModal}>X</button>
            </div>
        </div>
    )
}
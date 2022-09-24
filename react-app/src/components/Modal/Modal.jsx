import React from 'react'
import YoutubeEmbed from '../../utils/YoutubeEmbeded';
import './Modal.css'
function Modal({open, onClose}) {
    if (!open) return null;

    return (
        <div className="overlay">
            <div className="modalContainer">
                <div onClick={onClose} className="modalRight">X</div>
                <YoutubeEmbed embedId='OatDU-PgJQE'/>
                <div className="content">
                    <div className="synopsis">

                    </div>
                    <div className="genres">

                    </div>
                </div>



            </div>
        </div>
    )
    }

export default Modal

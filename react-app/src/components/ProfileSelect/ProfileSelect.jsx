import React, { useEffect } from 'react';
import './ProfileSelect.css'
import addBtn from '../../images/profileAdd.png'
function Profiles() {

    return (
        <div className="profile-wrapper">
            <h1 className="profile-gate-label">Who's watching?</h1>
            <div className="list-profiles">
                <ul className="choose-profile">
                    <a id='profile-create-redirect' href="">{profileCard(addBtn, 'Add Profile')}</a>
                </ul>
            </div>
        </div>
    )
}

function profileCard(image, name) {
    return (
        <div className='avatar-wrapper'>
            <div className="profile-icon">
                <img id='add-btn' src={image} alt="" />
            </div>
            <span className="profile-name">{name}</span>
        </div>
    )
}

export default Profiles;

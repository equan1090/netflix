import React, { useEffect } from 'react';
import './ProfileCreate.css'
import logoImg from '../../images/logos/aniflixLogo.png'
import redDefault from '../../images/defaultprofile/red-default.jpg'
import greenDefault from '../../images/defaultprofile/green-default.jpg'
import blueDefault from '../../images/defaultprofile/blue-default.jpg'
import yellowDefault from '../../images/defaultprofile/yellow-default.jpg'
import turquoiseDefault from '../../images/defaultprofile/turquoise.png'

function ProfileCreate() {

    const profilePics = [redDefault, greenDefault, blueDefault, yellowDefault, turquoiseDefault]
    let random = profilePics[Math.floor(Math.random()*profilePics.length)]


    return(
        <div className='profile-create-wrapper'>
            <div id='profile-create-logo' className="splash-logo">
                <img src={logoImg} alt="" />
            </div>
            <div className="centered-div">
                <div className="profile-actions-container">
                    <h1>Add Profile</h1>
                    <h2>Add a profile for another person watching Aniflix.</h2>
                    <div className="profile-metadata profile-entry">
                        <div className="main-profile-avatar">
                            <img src={random} alt="" />
                        </div>
                        <div className="profile-add-parent">
                            <div className="profile-entry-inputs">
                                <input type="text" id='add-profile-name' placeholder='Name' />
                            </div>
                        </div>
                    </div>
                    <span>
                        <span>Continue</span>
                    </span>
                    <span>
                        <span>Cancel</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCreate;

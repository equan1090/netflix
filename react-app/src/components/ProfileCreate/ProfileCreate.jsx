import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import './ProfileCreate.css'
import logoImg from '../../images/logos/aniflixLogo.png'
import redDefault from '../../images/defaultprofile/red-default.jpg'
import greenDefault from '../../images/defaultprofile/green-default.jpg'
import blueDefault from '../../images/defaultprofile/blue-default.jpg'
import yellowDefault from '../../images/defaultprofile/yellow-default.jpg'
import turquoiseDefault from '../../images/defaultprofile/turquoise.png'


function ProfileCreate() {

    let random = blueDefault

    const user = useSelector((state) => state.session.user)
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])


    const handleClick = (e) => {
        e.preventDefault();
        let errors = []
        if(!name) errors.push('Please enter a name')
        if(errors.length) {
            setErrors(errors)
            return null;
        }
        setErrors('')


    }

    return(
        <div className='profile-create-wrapper'>
            <div id='profile-create-logo' className="splash-logo">
                <img src={logoImg} alt="" />
            </div>
            <div className="centered-div">
                <div className="profile-actions-container">
                    <form action="" method='post'>
                        <h1>Add Profile</h1>
                        <h2>Add a profile for another person watching Aniflix.</h2>
                        <div className="profile-metadata profile-entry">
                            <div className="main-profile-avatar">
                                <img src={random} alt="" />
                            </div>
                            <div className="profile-add-parent">
                                <div className="profile-entry-inputs">
                                    <input
                                        type="text"
                                        id='add-profile-name'
                                        placeholder='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <span className='profile-button preferred-action'>
                            <span disabled='disabled' onClick={handleClick}>Continue</span>
                        </span>
                        <span className='profile-button'>
                            <span>Cancel</span>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileCreate;

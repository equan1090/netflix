import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ProfileCreate.css'
import logoImg from '../../images/logos/aniflixLogo.png'
import redDefault from '../../images/defaultprofile/red-default.jpg'
import greenDefault from '../../images/defaultprofile/green-default.jpg'
import blueDefault from '../../images/defaultprofile/blue-default.jpg'
import yellowDefault from '../../images/defaultprofile/yellow-default.jpg'
import turquoiseDefault from '../../images/defaultprofile/turquoise.png'
import { useHistory } from 'react-router-dom';
import {getAllProfileThunk, addProfileThunk} from '../../store/profile'

function ProfileCreate() {
    const defaultPics = [
        'https://i.imgur.com/c4ET2KX.jpg',
        'https://i.imgur.com/F8yyQ62.jpg',
        'https://i.imgur.com/VBIOvWr.jpg',
        'https://i.imgur.com/u2dS9Mm.png',
        'https://i.imgur.com/50rcZGO.jpg'
 ]
    let random = defaultPics[Math.floor(Math.random()*defaultPics.length)];
    const history = useHistory()
    const user = useSelector((state) => state.session.user)
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const [defImg, setDefImg] = useState(random)
    const dispatch = useDispatch()




    const handleClick = async (e) => {
        e.preventDefault();
        let errors = []
        if(!user) {
            history.push("/login")
        }

        if(!name) errors.push('Please enter a name')
        if(errors.length) {
            setErrors(errors)
            return null;
        }
        setErrors('')

        let profile = {
            user_id: user.id,
            name: name,
            avatar_url: defImg
        }

        await dispatch(addProfileThunk(profile, user.id))

    }

    return(
        <div className='profile-create-wrapper'>
            <div id='profile-create-logo' className="splash-logo">

            </div>
            <div className="centered-div">
                <div className="profile-actions-container">
                    <form action="" method='post'>
                        <h1>Add Profile</h1>

                        <h2>Add a profile for another person watching Aniflix.</h2>
                        <div className="profile-metadata profile-entry">
                            <div className="main-profile-avatar">
                                <img src={defImg} alt="" />
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
                            <span onClick={handleClick}>Continue</span>
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
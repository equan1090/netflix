import React, { useEffect } from 'react';
import './ProfileSelect.css'
import addBtn from '../../images/profileAdd.png'
import {useDispatch, useSelector} from "react-redux"
import { getAllProfileThunk } from '../../store/profile';

function Profiles() {
    // const dispatch = useDispatch()

    // // useEffect(() => {
    // //     dispatch(getAllProfileThunk())
    // // }, [dispatch])
    const profiles = useSelector(state => state.session.user.profiles)
    console.log('these are profiles',profiles)

    console.log(typeof(profiles))
    return (
        <div className="profile-wrapper">
            <h1 className="profile-gate-label">Who's watching?</h1>
            <div className="list-profiles">
                <ul className="choose-profile">
                    {profiles.map((profile) => (
                        <li>{profileCard(profile.avatar_url, profile.name)}</li>
                    ))}
                    {profiles.length < 5
                        && <a id='profile-create-redirect' href="/create-profile">{profileCard(addBtn, 'Add Profile')}</a>
                    }
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

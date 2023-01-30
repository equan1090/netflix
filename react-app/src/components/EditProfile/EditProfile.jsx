import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import { getAllProfileThunk } from '../../store/profile';
import './EditProfile.css'
import ProfileCard from "../ProfileSelect/ProfileCard";
import editLogo from '../../images/logos/edit.svg'
import { editProfileThunk } from "../../store/profile";
import { useHistory } from 'react-router-dom';
function EditProfile() {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const profiles = useSelector(state => state?.profile?.profiles?.profiles)
    const [profile, setProfile] = useState(null)
    const [name, setName] = useState(profile?.name)
    let history = useHistory ();
    useEffect(() => {
        dispatch(getAllProfileThunk(user.id))
    }, [dispatch, user.id])

    const handleClick = (profile) => {
        setProfile(profile)
    }
    const handleSubmit = (e) => {

        const updatedProfile = {
            id: profile?.id,
            name: name,
            avatar_url: profile?.avatar_url
        }
        dispatch(editProfileThunk(updatedProfile))
        window.location.reload()
    }


    if(!profile) {

        return (
            <>
                <div className="profile-containers-manage">
                    <div >
                        <h1 className='manage-profile-title'>Manage Profiles</h1>
                        <ul className="list-profiles">
                            {profiles?.map((profile, idx) => (
                            <li key={idx} onClick={() => handleClick(profile)}>
                                <div className='avatar-wrapper'>
                                    <div className="image-container">

                                        <img className='bigger-image' id='add-btn' src={profile.avatar_url} alt="" />
                                        <img className='smaller-image' src={editLogo} alt="" />

                                    </div>
                                    <span className="profile-name">{profile.name}</span>
                                </div>

                            </li>
                            ))}
                    </ul>
                    <span className='profile-button preferred-action' style={{"width": "140px"}} onClick={() => history.push(`/browse`)}>
                        <span>Done</span>
                    </span>
                </div>
            </div>

            </>
        )
    }
    else {
        return (
            <div className='profile-create-wrapper'>
                <div id='profile-create-logo' className="splash-logo">

                </div>
                <div className="centered-div">
                    <div className="profile-actions-container">
                        <form onSubmit={handleSubmit}>
                            <h1>Edit Profile</h1>

                            <h2>Add a profile for another person watching Aniflix.</h2>
                            <div className="profile-metadata profile-entry">
                                <div className="main-profile-avatar">
                                    <img src={profile?.avatar_url} alt="" />
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
                            <span className='profile-button preferred-action' onClick={handleSubmit}>
                                <span>Save</span>
                            </span>
                            <span className='profile-button'>
                                <span onClick={() => window.location.reload()}>Cancel</span>
                            </span>
                        </form>
                    </div>
                </div>
        </div>
        )
    }

}

export default EditProfile;

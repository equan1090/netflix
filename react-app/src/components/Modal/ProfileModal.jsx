import React from 'react'
import './ProfileModal.css'
import {logout} from '../../store/session'
import {useDispatch, useSelector} from 'react-redux'
import editIcon from '../../images/logos/edit.svg'
import { NavLink } from 'react-router-dom'
import { chooseProfileThunk } from '../../store/profile'
function ProfileModal({open, onClose}) {
    const dispatch = useDispatch()
    const profiles = useSelector(state => state?.session?.user?.profiles)

    const logoutBtn = async(e) => {
        sessionStorage.removeItem('profileId')
        await dispatch(logout())
    }

    const handleProfileClick = (id) => {
        window.location.reload()
        dispatch(chooseProfileThunk(id))
        sessionStorage.setItem('profileId', id);
        onClose(false)
    }



    if(!open) return null;
    return (
        <>

                <div className="pro-container">
                    <ul>
                        {profiles.map((profile, idx) => (
                            <li className='sub-menu-item' key={idx}>
                                <div className='profile-menu-item-container' onClick={() => handleProfileClick(profile?.id)}>

                                    <img className='pro-avatar' src={profile.avatar_url} alt="" />
                                    <span className='modal-pro-name'>{profile.name}</span>

                                </div>
                            </li>
                        ))}
                        <li className="sub-menu-item">
                            <div className="profile-menu-item-container">
                                <img src={editIcon} alt="" className="pro-avatar" id='edit-icon'/>
                                <NavLink to={'/profiles/manage'}><span className="modal-pro-name">Manage Profiles</span></NavLink>
                            </div>
                        </li>
                        <li className="sign-out" onClick={logoutBtn}>
                            <span className='sign-out-text'>Sign out of Aniflix</span>
                        </li>

                    </ul>
                </div>

        </>
    )
}

export default ProfileModal

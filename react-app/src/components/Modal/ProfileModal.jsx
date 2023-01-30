import React from 'react'
import './ProfileModal.css'
import {logout} from '../../store/session'
import {useDispatch, useSelector} from 'react-redux'
import editIcon from '../../images/logos/edit.svg'
import { NavLink } from 'react-router-dom'
function ProfileModal({open, onClose}) {
    const dispatch = useDispatch()
    const profiles = useSelector(state => state?.session?.user?.profiles)

    const logoutBtn = async(e) => {
        await dispatch(logout())
    }

    if(!open) return null;
    return (
        <>

                <div className="pro-container" onMouseEnter={open} onMouseLeave={onClose}>
                    <ul>
                        {profiles.map((profile, idx) => (
                            <li className='sub-menu-item' key={idx}>
                                <div className='profile-menu-item-container'>

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

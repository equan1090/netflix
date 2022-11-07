import React from 'react'
import './ProfileModal.css'
function ProfileModal({open, onClose, profiles}) {
    if(!open) return null;

    console.log('these are profiles', profiles)
    return (
        <>
            <div onClick={onClose} className="profile-wrapper">
                <div className="pro-container">
                    {profiles.map((profile) => (
                        <li className='sub-menu-item'>
                            <div>
                                <a href="" className='profile-menu-item'>
                                    <img className='avatarLogo' src={profile.avatar_url} alt="" />
                                    <span style={{marginLeft: 10}}>{profile.name}</span>
                                </a>

                            </div>
                        </li>

                    ))}
                </div>
            </div>
        </>
    )
}

export default ProfileModal

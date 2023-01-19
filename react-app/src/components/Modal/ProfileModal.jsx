import React from 'react'
import './ProfileModal.css'
function ProfileModal({open, onClose, profiles}) {
    if(!open) return null;

    ////</>onMouseEnter={open} onMouseLeave={onClose}>
    return (
        <>

                <div className="pro-container">
                    <ul>
                        {profiles.map((profile, idx) => (
                            <li className='sub-menu-item' key={idx}>
                                <div className='profile-menu-item-container'>

                                    <img className='pro-avatar' src={profile.avatar_url} alt="" />
                                    <span className='modal-pro-name'>{profile.name}</span>


                                </div>
                            </li>
                        ))}

                    </ul>
                </div>

        </>
    )
}

export default ProfileModal

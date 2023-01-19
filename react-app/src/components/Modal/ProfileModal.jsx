import React from 'react'
import './ProfileModal.css'
function ProfileModal({open, onClose, profiles}) {
    if(!open) return null;

    console.log('these are profiles', profiles)
    return (
        <>

                <div className="pro-container">
                    <ul>
                        {profiles.map((profile) => (
                            <li className='sub-menu-item' key={profile.id}>
                                <div>
                                    <a href="" className='profile-menu-item'>
                                        <img className='pro-avatar' src={profile.avatar_url} alt="" />
                                        <span >{profile.name}</span>
                                    </a>

                                </div>
                            </li>
                        ))}

                    </ul>
                </div>

        </>
    )
}

export default ProfileModal

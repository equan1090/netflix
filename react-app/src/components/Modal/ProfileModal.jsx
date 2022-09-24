import React from 'react'
import './ProfileModal.css'
function ProfileModal({open, onClose, profiles}) {
    console.log('inside profile modal',profiles)
    if(!open) return null;


    return (
        <>
            <div onClick={onClose} className="profile-wrapper">
                <div className="pro-container">
                    {profiles.map((profile) => (
                        profile.name
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProfileModal

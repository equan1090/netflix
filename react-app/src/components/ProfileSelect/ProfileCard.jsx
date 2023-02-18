function ProfileCard({image, name, id, pickProfile, selected}) {

        const isActive = selected === id;


    return (
        <div className='avatar-wrapper' onClick={() => {pickProfile(id)}}>
            <div className="profile-icon">
                <img id='add-btn' src={image} alt="" />
            </div>
            <span className="profile-name">{name}</span>
        </div>
    )
}

export default ProfileCard;

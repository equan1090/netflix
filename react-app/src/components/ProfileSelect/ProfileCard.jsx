function ProfileCard({image, name, id, pickProfile}) {

    return (
        <div className='avatar-wrapper' onClick={() => {pickProfile({'avatar_url':image, name, id})}}>
            <div className="profile-icon">
                <img id='add-btn' src={image} alt="" />
            </div>
            <span className="profile-name">{name}</span>
        </div>
    )
}

export default ProfileCard;

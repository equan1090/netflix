function ProfileCard({image, name, id, curProfileSetter}) {

    return (
        <div className='avatar-wrapper' onClick={() => {curProfileSetter(id)}}>
            <div className="profile-icon">
                <img id='add-btn' src={image} alt="" />
            </div>
            <span className="profile-name">{name}</span>
        </div>
    )
}

export default ProfileCard;

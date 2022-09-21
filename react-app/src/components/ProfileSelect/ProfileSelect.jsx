import React, { useEffect, useState } from 'react';
import './ProfileSelect.css'
import addBtn from '../../images/profileAdd.png'
import {useDispatch, useSelector} from "react-redux"
import { getAllProfileThunk } from '../../store/profile';
import ProfileCard from './ProfileCard';
import { getTopAnimeThunk } from '../../store/anime';
function Profiles() {
    const user = useSelector(state => state.session.user)
    const [curProfile, setCurProfile] = useState(0);
    // console.log('this is curr profile', curProfile)
    const dispatch = useDispatch()
    const profiles = useSelector(state => state?.profile?.profiles?.profiles)
    console.log('type of', typeof(profiles))

    const curProfileSetter = (id) => {
        setCurProfile(id)
    }


    useEffect(() => {
        dispatch(getAllProfileThunk(user.id))
        dispatch(getTopAnimeThunk())
    }, [dispatch, user.id])

    console.log('Profile', profiles)
    console.log('this is curprofile', curProfile)

//{profileCard(profile.avatar_url, profile.name, profile.id)}

    return (

        <div>
            {!curProfile ?
            <div className="profile-wrapper">
                <h1 className="profile-gate-label">Who's watching?</h1>
                <div className="list-profiles">
                    <ul className="choose-profile">
                        {profiles?.map((profile, idx) => (

                            <li key={idx}><ProfileCard
                                            id={profile.id}
                                            name={profile.name}
                                            image={profile.avatar_url}
                                            curProfileSetter={curProfileSetter}/></li>

                        ))}
                        {profiles?.length < 5
                            && <a id='profile-create-redirect' href="/create-profile"><ProfileCard name='Add Profile' image={addBtn}/></a>
                        }
                    </ul>
                </div>
            </div>
            : <div>Hello</div>
            }
        </div>
    )
}

// function profileCard(image, name, id) {
//     return (
//         <div className='avatar-wrapper'>
//             <div className="profile-icon">
//                 <img id='add-btn' src={image} alt="" />
//             </div>
//             <span className="profile-name">{name}</span>
//         </div>
//     )
// }

export default Profiles;

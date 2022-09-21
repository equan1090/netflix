import React, { useEffect, useState } from 'react';
import './ProfileSelect.css'
import addBtn from '../../images/profileAdd.png'
import {useDispatch, useSelector} from "react-redux"
import { getAllProfileThunk } from '../../store/profile';
import ProfileCard from './ProfileCard';
import { getTopAnimeThunk } from '../../store/anime';
function Profiles() {
    const user = useSelector(state => state.session.user)
    const [curProfile, setCurProfile] = useState(1);
    const dispatch = useDispatch()
    const profiles = useSelector(state => state?.profile?.profiles?.profiles)

    const topAnime = useSelector(state => state?.anime?.anime?.data)
    const curProfileSetter = (id) => {
        setCurProfile(id)
    }
    console.log('This is anime', topAnime)


    useEffect(() => {
        dispatch(getAllProfileThunk(user.id))
        dispatch(getTopAnimeThunk())
    }, [dispatch, user.id])

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
            :    <div className='mainView'>
                    <div>
                        
                    </div>
                    {topAnime?.map((anime, idx) => (
                    <li key={idx}>{anime.title}</li>
                    ))}
                </div>
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

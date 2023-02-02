import React, { useEffect} from 'react';
import './ProfileSelect.css'
import addBtn from '../../images/profileAdd.png'
import {useDispatch, useSelector} from "react-redux"
import ProfileCard from './ProfileCard';
import { getAllProfileThunk } from '../../store/profile';

function Profiles({pickProfile}) {

    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const profiles = useSelector(state => state?.profile?.profiles?.profiles)

    useEffect(() => {
        dispatch(getAllProfileThunk(user?.id))
    }, [dispatch, user.id])

    return (
        //Displays when no profile is chosen
        <div>
            <div className="profile-wrapper">
                <h1 className="profile-gate-label">Who's watching?</h1>
                <div className="list-profiles">
                    <ul className="choose-profile">
                        {profiles?.map((profile, idx) => (

                            <li key={idx}><ProfileCard
                                            id={profile.id}
                                            name={profile.name}
                                            image={profile.avatar_url}
                                            pickProfile={pickProfile}/></li>

                        ))}
                        {profiles?.length < 5
                            && <a id='profile-create-redirect' href="/create-profile"><ProfileCard name='Add Profile' image={addBtn}/></a>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profiles;

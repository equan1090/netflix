import React, { useEffect, useState } from 'react';
import APIQueue from '../../utils/APIQueue'
import './ProfileSelect.css'
import addBtn from '../../images/profileAdd.png'
import {useDispatch, useSelector} from "react-redux"
import { getAllProfileThunk } from '../../store/profile';
import ProfileCard from './ProfileCard';
import { getTopAnimeThunk, getTrendingAnimeThunk, getAnimeGenreThunk } from '../../store/anime';
import BrowseCard from '../BrowseCards/BrowseCards';

function Profiles() {
    const user = useSelector(state => state.session.user)
    const [curProfile, setCurProfile] = useState(1);
    const dispatch = useDispatch()
    const profiles = useSelector(state => state?.profile?.profiles?.profiles)
    const topAnime = useSelector(state => state?.anime?.rating?.data)
    const trending = useSelector(state => state?.anime?.trending?.data)
    const actionAnime = useSelector(state => state?.anime?.actionAnime?.data)
    const romance = useSelector(state => state?.anime?.romance?.data)
    const comedy = useSelector(state => state?.anime?.comedy?.data)
    const [error, setError] = useState(null);
    const curProfileSetter = (id) => {
        setCurProfile(id)
    }

    // const cancel = () => {
    //     APIQueue.removeRequest(requestId.current);
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await APIQueue.pushRequest(
                    async () => dispatch(getTrendingAnimeThunk())
                )
                await APIQueue.pushRequest(
                    async () => dispatch(getTopAnimeThunk())
                )
                await APIQueue.pushRequest(
                    async () => dispatch(getAnimeGenreThunk(1))
                )
                await APIQueue.pushRequest(
                    async () => dispatch(getAnimeGenreThunk(4))
                )
                await APIQueue.pushRequest(
                    async () => dispatch(getAnimeGenreThunk(22))
                )


            } catch (e) {
                setError(e);
            }
        }
        fetchData();
        // return () => {
        //     cancel()
        // }
        // dispatch(getAllProfileThunk(user.id))
        // setTimeout(() => {
        //     dispatch(getTopAnimeThunk())
        // }, 0)
        // setTimeout(() => {
        //     dispatch(getTrendingAnimeThunk())

        // }, 1000)
        // setTimeout(() => {
        //     dispatch(getAnimeGenreThunk(1))
        // }, 1000)
        // setTimeout(() => {
        //     dispatch(getAnimeGenreThunk(4))

        // }, 1000)
        // setTimeout(() => {

        //     dispatch(getAnimeGenreThunk(22))
        // }, 1000)
    }, [dispatch, user.id])

    return (
        //Displays when no profile is chosen
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
            // Displays when profile is chosen
            :
                <div>
                    <BrowseCard title="Trending Now" animes={trending}/>
                    <BrowseCard title="Top Rated" animes={topAnime}/>
                    <BrowseCard title="Action" animes={actionAnime}/>
                    <BrowseCard title="Comedy" animes={comedy}/>
                    <BrowseCard title="Romance" animes={romance}/>
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

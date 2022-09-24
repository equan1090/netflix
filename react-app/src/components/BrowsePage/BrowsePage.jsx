import React, { useEffect, useState } from 'react';
import APIQueue from '../../utils/APIQueue'
import './BrowsePage.css'
import {useDispatch, useSelector} from "react-redux"
import { getTopAnimeThunk, getTrendingAnimeThunk, getAnimeGenreThunk } from '../../store/anime';
import BrowseCard from '../BrowseCards/BrowseCards';
import Banner from '../Banner/Banner';
import * as ReactBootStrap from 'react-bootstrap'
import Profiles from '../ProfileSelect/ProfileSelect';
function BrowsePage() {
    const user = useSelector(state => state.session.user)
    const [curProfile, setCurProfile] = useState(1);
    const dispatch = useDispatch()
    const topAnime = useSelector(state => state?.anime?.rating?.data)
    const trending = useSelector(state => state?.anime?.trending?.data)
    const actionAnime = useSelector(state => state?.anime?.actionAnime?.data)
    const romance = useSelector(state => state?.anime?.romance?.data)
    const comedy = useSelector(state => state?.anime?.comedy?.data)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const genres = {
        "action": 1,
        "comedy": 4,
        "romance": 22
    }

    const curProfileSetter = (id) => {
        setCurProfile(id)
    }


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
                    async () => dispatch(getAnimeGenreThunk(genres.action))
                )
                await APIQueue.pushRequest(
                    async () => dispatch(getAnimeGenreThunk(genres.comedy))
                )
                await APIQueue.pushRequest(
                    async () => dispatch(getAnimeGenreThunk(genres.romance))
                )

                setLoading(true)

            } catch (e) {
                setError(e);
            }
        }
        fetchData();

    }, [dispatch, user.id])

    const renderContent = () => {
        if (!curProfile) {
            return (<Profiles curProfileSetter={curProfileSetter}/>)
        } else{
            return (<div>
                {trending && <Banner animes={trending}/>}
                <BrowseCard title="Trending Now" animes={trending} isLarge/>
                <BrowseCard title="Top Rated" animes={topAnime} />
                <BrowseCard title="Action" animes={actionAnime}/>
                <BrowseCard title="Comedy" animes={comedy}/>
                <BrowseCard title="Romance" animes={romance}/>
            </div>)
        }
    }

    return (
        //Displays when no profile is chosen
        <div>
            {
                loading ?
                renderContent()
            :
            <div className='spinner-container'>
                <ReactBootStrap.Spinner animation="border"
                    variant="danger"
                    className="spinner"
                    style={{ width: "4rem", height: "4rem" }}
                    />
            </div>
            }
        </div>
    )
}

export default BrowsePage;

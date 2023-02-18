import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Favorites.css';
import { getFavoriteThunk } from '../../store/profile';
import Modal from '../Modal/Modal'
const Favorite = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.profile?.favorite?.favorites?.favorites);
    const selectedProfileId = sessionStorage.getItem('profileId')

    const [openModal, setOpenModal] = useState(false)
    const [chosenAnime, setChosenAnime] = useState(null)
    const [genres, setGenres] = useState([])


    const handleClick = (anime) => {
        //Need genre in the correct format to pass into modal
        //It has to be in an array of objects with a name property
        let tmp = anime.genres.split(',')
        tmp = tmp.map((genre) => (
            {name: genre}
        ))

        //anime needs to be in the same format as API for it to work with Modal
        anime = {
            mal_id: anime.mal_id,
            title: anime.title,
            trailer: {youtube_id: anime.youtube_id},
            synopsis: anime.synopsis,
            genres: tmp,
        }

        setChosenAnime(anime)
        setGenres(anime.genres)
        setOpenModal(true)

    }


    useEffect(() => {
        if (selectedProfileId) {
            dispatch(getFavoriteThunk(selectedProfileId))
        }
    }, [selectedProfileId])
    return (
        <div class="favorite-wrapper">
            <div >
                <h1 className='favorite-header'>My List</h1>
            </div>
            <div class="favorite-lst">
                <ul className='favorite-items'>
                    {favorites?.map((favorite) => (
                        <li key={favorite.id} >
                            <div className='favorite-card'>
                                <img className='favorite-card-image'
                                    src={favorite.image}
                                    alt={favorite.title}
                                    onClick={() => handleClick(favorite)}
                                    />
                            </div>
                        </li>
                    ))}
                    <Modal open={openModal} onClose={() => setOpenModal(false)} anime={chosenAnime? chosenAnime: null} genres={genres} />
                </ul>
            </div>
        </div>
    )
}

export default Favorite;

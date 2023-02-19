import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteThunk, deleteFavoriteThunk } from '../../store/profile';
import { getAllProfileThunk } from '../../store/profile';
const FavoriteBtn = ({data, genre}) => {


    const userId = useSelector((state) => state.session?.user?.id)
    const profileId = sessionStorage.getItem('profileId')
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.profile?.favorite?.favorites?.favorites)
    const [saved, setSaved] = useState(false)

    genre = genre.join(', ')
    useEffect(() => {
        for(let i=0; i < favorites?.length; i++) {

            if(favorites[i].mal_id === data?.mal_id) {
                setSaved(true)
            }

        }
    }, [data?.mal_id])

    const handleAdd = () => {

        let anime = {
            mal_id: data.mal_id,
            title: data.title,
            youtube_id: data.trailer.youtube_id,
            image: data.images.jpg.image_url,
            genres: genre,
            synopsis: data.synopsis
        }

        dispatch(addFavoriteThunk(profileId, anime))
        
        setSaved(true)
    }
    const handleDelete = () => {
        for(let i=0; i < favorites?.length; i++) {
            if(favorites[i].mal_id === data.mal_id) {
                dispatch(deleteFavoriteThunk(profileId, favorites[i]?.id))
            }

        }
        setSaved(false)
    }



    return(
        <>
        {
            !saved?
            <>
                <span onClick={handleAdd}>
                    Favorite
                </span>

            </>
            :
            <>
                <span onClick={handleDelete}>
                    Unfavorite
                </span>
            </>

        }

        </>
    )
}

export default FavoriteBtn;

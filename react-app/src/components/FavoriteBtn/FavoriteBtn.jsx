import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteThunk } from '../../store/profile';
const FavoriteBtn = ({data, genre}) => {

    const [favorited, setFavorited] = useState(false)
    const saved = useSelector((state) => state.profile?.favorite)
    const profileId = useSelector((state) => state.profile?.profiles?.profiles?.id)
    const dispatch = useDispatch()
    genre = genre.join(', ')

    const handleAdd = () => {

        let anime = {
            mal_id: data.mal_id,
            title: data.title,
            url: data.images.jpg.image_url,
            genres: genre,
            description: data.synopsis
        }
        
        dispatch(addFavoriteThunk(profileId, anime))
    }

    return(
        <>
            <span onClick={handleAdd}>
                Favorite
            </span>

        </>
    )
}

export default FavoriteBtn;

import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import YoutubeEmbed from '../../utils/YoutubeEmbeded';
import './Modal.css'
import { getFavoriteThunk } from '../../store/profile';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
function Modal({open, onClose, anime, genres}) {
    const dispatch = useDispatch()
    const profile = useSelector((state) => state.profile?.profiles?.profiles)


    // console.log('inside modal genres', genres)
    /*
    anime = {
        mal_id: anime.mal_id,
        title: anime.title,
        trailer: {youtube_id: anime.trailer.youtube_id},
    }
    */
    let genre;
    if(genres) {

        genre = genres.map(({name}) => name)
    }

    useEffect(() => {
        dispatch(getFavoriteThunk(profile?.id))
    }, [dispatch, profile?.id])

    useEffect(() => {
        if (open) {
            document.body.classList.add('no-scroll')
        }else {
            document.body.classList.remove('no-scroll')
        }
    }, [open])


    if (!open) return null;
    return (
        <>

            <div onClick={onClose} className="overlay">
                <div onClick={(e) => {e.stopPropagation()}} className="modalContainer">
                    {!anime?
                        <>

                            <YoutubeEmbed embedId='OatDU-PgJQE'/>
                            <div className="content">
                                <div className="synopsis">

                                Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils
                                in order to pay off his crushing debts. Using his pet devil
                                Pochita as a weapon, he is ready to do anything for a bit of cash.
                                <br></br>
                                <br></br>
                                Unfortunately, he has outlived his usefulness and is murdered
                                by a devil in contract with the yakuza. However, in an unexpected
                                turn of events, Pochita merges with Denji's dead body and grants
                                him the powers of a chainsaw devil. Now able to transform parts
                                of his body into chainsaws, a revived Denji uses his new
                                abilities to quickly and brutally dispatch his enemies.
                                </div>
                                <div className="genres">
                                    <h6 >Genres: Action, Adventure</h6>
                                </div>
                            </div>
                        </>
                        :
                        <div>
                        {/* {anime.trailer.youtube_id} */}
                            <YoutubeEmbed embedId={anime?.trailer?.youtube_id}/>
                            <div className="content">
                                <div className="synopsis">
                                    <h4>{anime.title}</h4>
                                    {anime.synopsis}
                                </div>
                                <div className="genres">
                                    <FavoriteBtn data={anime} genre={genre}/>
                                    <h6>Genres: {genre.join(', ')}</h6>
                                </div>
                            </div>

                        </div>
                    }



                </div>
            </div>
        </>
    )
    }

export default Modal

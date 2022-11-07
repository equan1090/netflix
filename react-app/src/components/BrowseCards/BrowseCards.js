import React, { useEffect, useState } from 'react';
// import Youtube from 'react-youtube'
import YoutubeEmbed from '../../utils/YoutubeEmbeded';
import Modal from '../Modal/Modal';
import './BrowseCards.css'
function BrowseCard({title,animes, isLarge}) {
    const [openModal, setOpenModal] = useState(false)
    const [chosenAnime, setChosenAnime] = useState(0)


    const handleClick = (anime) => {
        setOpenModal(true)
        setChosenAnime(anime)
    }

    return (
            <div className='mainView'>
                    {/* <YoutubeEmbed embedId={animes.}/> */}
                    <div className='anime-area'>
                        <h2 className="row-header">{title}</h2>
                        <div className="rowContent">
                                {animes?.map((anime, id) => (
                                    <div key={id}>
                                        {/* anime.trailer.youtube_id */}
                                        {/* <YoutubeEmbed embedId={anime?.trailer?.youtube_id} /> */}
                                        <img className={`anime_poster ${isLarge && "anime_posterLarge"}`}
                                            onClick={() => handleClick(anime)}
                                            key={anime.id}
                                            src={anime?.images?.jpg?.image_url}
                                            alt="" />
                                    </div>
                                ))}
                                <Modal open={openModal} onClose={() => setOpenModal(false)} anime={chosenAnime? chosenAnime: null} genres={chosenAnime.genres} />
                            <div className="slider">
                            </div>
                        </div>
                    </div>

            </div>
    )
}
export default BrowseCard;

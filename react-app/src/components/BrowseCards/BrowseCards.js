import React, { useEffect, useState } from 'react';
// import Youtube from 'react-youtube'
import YoutubeEmbed from '../../utils/YoutubeEmbeded';
import Modal from '../Modal/Modal';
import './BrowseCards.css'
function BrowseCard({title,animes, isLarge}) {

    return (
            <div className='mainView'>
                    {/* <YoutubeEmbed embedId={animes.}/> */}
                    <div className='anime-area'>
                        <h2 className="row-header">{title}</h2>
                        <div className="rowContent">
                                {animes?.map((anime) => (
                                    <>
                                        {/* anime.trailer.youtube_id */}
                                        {/* <YoutubeEmbed embedId={anime?.trailer?.youtube_id} /> */}
                                        <img className={`anime_poster ${isLarge && "anime_posterLarge"}`}
                                            key={anime.id}
                                            src={anime?.images?.jpg?.image_url}
                                            alt="" />
                                        <Modal />
                                    </>
                                ))}
                            <div className="slider">
                            </div>
                        </div>
                    </div>

            </div>
    )
}
export default BrowseCard;

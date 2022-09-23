import React, { useEffect, useState } from 'react';
import './BrowseCards.css'
function BrowseCard({title,animes}) {
    

    return (
            <div className='mainView'>


                    <div className='anime-area'>
                        <h2 className="row-header">{title}</h2>
                        <div className="rowContent">
                                {animes?.map((anime) => (
                                    <img className='anime_poster' key={anime.id} src={anime?.images?.jpg?.image_url} alt="" />
                                ))}
                            <div className="slider">
                            </div>
                        </div>
                    </div>

            </div>
    )
}
export default BrowseCard;

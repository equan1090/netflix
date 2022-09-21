import React, { useEffect, useState } from 'react';

function BrowseCard({animes}) {
    console.log('browse card anime', animes)
    return (
            <div className='mainView'>


                    <div className='anime-area'>
                        <h2 className="row-header"></h2>
                        <div className="rowContent">
                            <div className="slider">
                                {animes?.map((anime, idx) => (
                                    <img src={anime?.images?.jpg?.image_url} alt="" />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* {topAnime?.map((anime, idx) => (
                    <li key={idx}>{anime.title}</li>
                    ))} */}
            </div>
    )
}
export default BrowseCard;

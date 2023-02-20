import React, { useState, useRef, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from '../Modal/Modal';
import right from '../../images/right-white.svg'
import left from '../../images/left-white.svg'
import './BrowseCards.css'
function BrowseCard({title,animes, isLarge}) {
    const [openModal, setOpenModal] = useState(false)
    const [chosenAnime, setChosenAnime] = useState(0)
    const slider = useRef(null);

    const next = () => {
      slider?.current?.slickNext();
    };

    const previous = () => {
      slider?.current?.slickPrev();
    };

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,

    }

    const handleClick = (anime) => {
        setOpenModal(true)
        setChosenAnime(anime)
    }


    return (
        <>
            <div className='mainView'>
                <h1 className="row-header">{title}</h1>
                <Slider ref={slider} {...settings}>

                    {animes?.map((anime, id) => (

                            <div key={id}>
                                <img className={`anime_poster ${isLarge && "anime_posterLarge"}`}
                                                    onClick={() => handleClick(anime)}
                                                    key={anime.id}
                                                    src={anime?.images?.jpg?.image_url}
                                                    alt="" />
                            </div>

                    ))}

                </Slider>
                <div className='next-prev-buttons'>
                    <img id='prev-button' onClick={previous} src={left}></img>
                    <img id='next-button' onClick={next} src={right}></img>
                </div>

            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} anime={chosenAnime? chosenAnime: null} genres={chosenAnime.genres} />
        </>


            // <div className='mainView'>
            //         {/* <YoutubeEmbed embedId={animes.}/> */}
            //         <div className='anime-area'>
            //             <h2 className="row-header">{title}</h2>
            //             <div className="rowContent">
            //                     {animes?.map((anime, id) => (
            //                         <div key={id}>
            //                             {/* anime.trailer.youtube_id */}
            //                             {/* <YoutubeEmbed embedId={anime?.trailer?.youtube_id} /> */}
            //                             <img className={`anime_poster ${isLarge && "anime_posterLarge"}`}
            //                                 onClick={() => handleClick(anime)}
            //                                 key={anime.id}
            //                                 src={anime?.images?.jpg?.image_url}
            //                                 alt="" />
            //                         </div>
            //                     ))}
            //                     <Modal open={openModal} onClose={() => setOpenModal(false)} anime={chosenAnime? chosenAnime: null} genres={chosenAnime.genres} />
            //                 <div className="slider">
            //                 </div>
            //             </div>
            //         </div>

            // </div>
    )
}
export default BrowseCard;

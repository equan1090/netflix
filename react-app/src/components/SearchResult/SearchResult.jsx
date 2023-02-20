import React, {useState} from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import './SearchResults.css'


const SearchResult = () => {
    const animes = useSelector((state) => state.search?.search?.data);
    const [openModal, setOpenModal] = useState(false)
    const [chosenAnime, setChosenAnime] = useState(null)
    const [genres, setGenres] = useState([])


    const handleClick = (anime) => {

        setChosenAnime(anime)
        setGenres(anime.genres)
        setOpenModal(true)
    }


    return (

        <div class="search-wrapper">
            <div >
                <h1 className='favorite-header'>Results:</h1>
            </div>
            <div class="search-lst">
                <ul className='search-items'>
                    {animes?.map((anime, idx) => (
                        <li key={idx} >
                            <div className='search-card'>
                                <img className='search-card-image'
                                    src={anime.images?.jpg?.image_url}
                                    alt={anime.title}
                                    onClick={() => handleClick(anime)}
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

export default SearchResult;

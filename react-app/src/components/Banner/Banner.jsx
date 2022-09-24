import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import './Banner.css'
import YoutubeEmbed from '../../utils/YoutubeEmbeded';
import Modal from '../Modal/Modal';
function Banner() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <header className="banner">
            {/* <YoutubeEmbed embedId='OatDU-PgJQE' /> */}
            <div className="banner_contents">
                {/* {background image} */}
                <h1 className='banner_title'>Chainsaw Man</h1>
                <div className="bannerBtns">
                    <button className="bannerBtn" onClick={() => setOpenModal(true)}>
                        Play
                    </button>
                    <Modal open={openModal} onClose={() => setOpenModal(false)}/>
                </div>
                <div className='banner_description'>
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

            </div>
            {/* <div className="fade"></div> */}
        </header>
    )
    }

export default Banner

import React, {useEffect, useState} from "react";
import logoImg from '../../images/logos/aniflixLogo.png'
import './splashpage.css'
import githubImg from '../../images/logos/github-logo.png'
import linkedinImg from '../../images/logos/linkedin.png'
function SplashPage() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <div className="splash-wrapper">
            <div className="splash-main">
                <div className="splash-logo">
                    <img src={logoImg} alt="" />
                </div>
                <div className="splash-btn">
                    <a href="/login">Sign In</a>

                </div>
                <div className="splash-story-card">
                    <h1 className="story-card-txt">Unlimited anime series, movies, and more.</h1>
                    <h3 className="story-card-p">Watch anywhere. Cancel anytime.</h3>
                </div>
                <div className="splash-signup">
                    <h5 className='email-form-title'>Ready to watch? Enter your email to create or restart your membership</h5>
                    <div className='email-form'>
                        <input type="email" placeholder='Email address'/>
                        <button className="get-started">Get Started {`>`} </button>

                    </div>
                </div>
            </div>
            <div className="splash-socials">
                <div className="social-linkedin">
                    <a target="_blank" href="https://www.linkedin.com/in/eric-quan-821139190/" rel="noreferrer">
                        <img id='linkedin-logo' src={linkedinImg} alt="" />
                    </a>
                </div>
                <div className="social-github">
                    <a target="_blank" href="https://github.com/equan1090/netflix" rel="noreferrer">
                        <img id='github-logo' src={githubImg} alt="" />
                    </a>
                </div>

            </div>
            <div className="splash-question-area">

                <div className="splash-question">
                    <h1 id='faq-title'>Frequently Asked Questions</h1>
                    <li>
                        <button className="faq-question" onClick={() => setOpen1(!open1)}>What is Aniflix?</button>
                        {open1 && <div className='faq-answer'>
                            Aniflix is an educational project based off of netflix for anime. It is used to solidify my knowledge of JavaScript, React,
                            Python, Flask, and other technologies and use them to build fullstack applications. This is just
                            a personal project with no grand goal in mind.
                        </div>}
                    </li>
                    <li>
                        <button className="faq-question" onClick={() => setOpen2(!open2)}>How does it work?</button>
                        {open2 && <div className="faq-answer">
                            I am using React.js for the front end as well as Flask for the backend. For the Api, I am using
                            TMDB's API. This product uses the TMDB API but is not endorsed or certified by TMDB.
                        </div>}
                    </li>

                    <li>
                        <button className="faq-question" onClick={() => setOpen3(!open3)}>How much does Aniflix cost?</button>
                        {open3 && <div className='faq-answer'>
                            Nothing. This is just an educational project for me, and will probably end up in my resume
                            when in job search. This project is just to help me retain what I learned and apply it.
                        </div>}
                    </li>
                    <li>
                        <button className="faq-question" onClick={() => setOpen4(!open4)}>What can I watch on Aniflix?</button>
                        {open4 && <div className='faq-answer'>
                            As of now, I have nothing, but I do plan on at least showing the series trailers if available
                        </div>}
                    </li>
                </div>
            </div>
        </div>

    )
}

export default SplashPage;

import React, {useEffect} from "react";
import logoImg from '../../images/aniflixLogo.png'
import './splashpage.css'
import githubImg from '../../images/github-logo.png'
import linkedinImg from '../../images/linkedin.png'
function SplashPage() {
    return (
        <div className="splash-wrapper">
            <div className="splash-main">
                <div className="splash-logo">
                    <img src={logoImg} alt="" />
                </div>
                <div className="splash-btn"></div>
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
                    <a target="_blank" href="https://github.com/equan1090" rel="noreferrer">
                        <img id='github-logo' src={githubImg} alt="" />
                    </a>
                </div>

            </div>
            <div className="splash-question-area">
                <div className="splash-question-title">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="splash-question">
                    <li>
                        <button className="faq-question">What is Aniflix?</button>
                        <div className='faq-answer'>
                            Aniflix is an educational project based off of netflix for anime. It is used to solidify my knowledge of JavaScript, React,
                            Python, Flask, and other technologies and use them to build fullstack applications. This is just
                            a personal project with no grand goal in mind.
                        </div>
                    </li>
                    <li>
                        <button className="faq-question">How does it work?</button>
                        <div className="faq-answer">
                            I am using React.js for the front end as well as Flask for the backend.
                            This product uses the TMDB API but is not endorsed or certified by TMDB.
                        </div>
                    </li>

                    <li>
                        <button className="faq-question">How much does Aniflix cost?</button>
                        <div className='faq-answer'>
                            Nothing. This is just an educational project for me, and will probably end up in my resume
                            when in job search.
                        </div>
                    </li>
                    <li>
                        <button className="faq-question">What can I watch on Aniflix?</button>
                        <div className='faq-answer'>
                            As of now, I have nothing, but I do plan on at least showing the series trailers if available
                        </div>
                    </li>
                </div>
            </div>
        </div>
        // <div className='splash-wrapper'>
        //     <div className='splash-main' >
        //         <div className='splash-header'>
        //             <img src={logoImg} alt="" id="logo" />
        //             <button className="sign-in"></button>
        //         </div>
        //         <div className='splash-story-card'>
        //             <h1 className="story-txt-hi ">Unlimited anime series, movies, and more.</h1>
        //             <h3 className='story-txt'>Watch anywhere. Cancel anytime</h3>
        //             <h4 className="story-txt">Ready to watch? Enter your email to create or restart your membership</h4>
        //         </div>
        //     </div>
        //     <div className="about"></div>
        //     <div className="splash-profile-create"></div>
        //     <div className="splash-questions"></div>
        //     <div className="spash-extra"></div>
        // </div>
    )
}

export default SplashPage;

import React, {useEffect} from "react";
import logoImg from '../../images/aniflixLogo.png'
import background from '../../images/background.png'
import './splashpage.css'
//style={{backgroundImage: `url(${background})`}}
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
                    <input type="email" />
                </div>
            </div>
            <div className="splash-socials">
                <div className="social-linkedin"></div>
                <div className="social-github"></div>
            </div>
            <div className="splash-question-area">
                <div className="splash-question-title"></div>
                <div className="splash-question"></div>
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

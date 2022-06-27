import React, {useEffect} from "react";
import logoImg from '../../images/aniflixLogo.png'
import background from '../../images/background.png'
function SplashPage() {
    return (
        <div className='splash-wrapper'>
            <div className='splash-main'>
                <div className='splash-header' style={{backgroundImage: `url(${background})`}}>
                    <img src={logoImg} alt="" id="logo" />
                    <button className="sign-in"></button>
                </div>
                <div className='splash-story-card'></div>
            </div>
            <div className="about"></div>
            <div className="splash-profile-create"></div>
            <div className="splash-questions"></div>
            <div className="spash-extra"></div>
        </div>
    )
}

export default SplashPage;

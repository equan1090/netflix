
import React, {useEffect, useState} from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import aniflixLogo from '../images/logos/aniflixLogo.png'
import blueDefault from '../images/defaultprofile/blue-default.jpg'
import { useSelector } from 'react-redux';
import ProfileModal from './Modal/ProfileModal';
const NavBar = () => {


  const [show, setShow] = useState(false);
  const user = useSelector(state => state?.session?.user)
  const profiles = useSelector(state => state?.session?.user?.profiles)
  const [openModal, setOpenModal] = useState(false)



  const onHover = (e) => {
    console.log(profiles)

  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShow(true);
      }
      else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll")
    }
  }, [])


  return (
    <>

        <nav className={`nav ${show && 'nav_black'}`}>
          <NavLink to={`/browse`}>
            <img
              src={aniflixLogo}
              alt="Aniflix Logo"
              className="navLogo"
              />
          </NavLink>
          {
            user ?
            <>
              <img onClick={() =>  setOpenModal(true)} src={blueDefault} alt="" className="avatarLogo" onMouseEnter={onHover} />
              <ProfileModal open={openModal} onClose={() => setOpenModal(false)} profiles={profiles}/>
            </>
            :
            <div className="splash-btn">
            <NavLink to={"/login"} style={{ textDecoration: "none", color: "#fff" }}>
              Sign in
            </NavLink>
          </div>
          }
        </nav>


    </>


  );
}

export default NavBar;

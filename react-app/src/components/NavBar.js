
import React, {useEffect, useState, useRef} from 'react';
import './NavBar.css'
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import aniflixLogo from '../images/logos/aniflixLogo.png'
import { useSelector } from 'react-redux';
import ProfileModal from './Modal/ProfileModal';
import SearchBar from './SearchBar/SearchBar';
import { chooseProfileThunk } from '../store/profile';

const NavBar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const user = useSelector(state => state?.session?.user)
  const profiles = useSelector(state => state?.profile?.profiles?.profiles)
  const [openModal, setOpenModal] = useState(false)
  const selectedProfileId = sessionStorage.getItem('profileId')

  const handleClick=()=> {
    history.push('/browse/favorites')
  }

  
  useEffect(() => {
    if (selectedProfileId) {
      dispatch(chooseProfileThunk(selectedProfileId))
    }
  }, [selectedProfileId])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShow(true);
      }
      else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if(window.scrollY > 100) {
          setShow(true);
        }
        else setShow(false);
      }
  )}
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.avatarLogo')) {
        setOpenModal(false)
      }
    }

    if (openModal) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [openModal])


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
            {
              profiles ?
              <>
              <span onClick={handleClick} className='favoriteTab'>Favorite</span>
              <img
                onClick={() =>  setOpenModal(!openModal)}
                src={profiles?.avatar_url}
                alt="" className="avatarLogo"
                  />
            </>:
            null

            }
              <ProfileModal
                open={openModal}
                onClose={setOpenModal}
                profiles={profiles}
                />
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

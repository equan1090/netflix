import React from "react";
import Devices from "../../images/netflixDevices.png";
import Logo from "../../images/logos/aniflixLogo.png";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimeCover from "./animecover";
import { getImage, getTitle } from "../../images/covers";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/session";
import SignUpForm from "../auth/SignUpForm";
import "./registerpage.css";

export default function RegisterPage() {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(1);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();


  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  const handleSubmit = async(e) => {
    let errors = []
    e.preventDefault();
    if (passwordInput !== confirmPass) errors.push("Passwords must match")
    if (errors.length) {
      setErrors(errors)
      return null;
    }
    setErrors('')

    await dispatch(signUp(emailInput, passwordInput));


    history.push('/browse')

  }


  const animeCovers = new Array(4)
    .fill(null)
    .map((cover, i) => <AnimeCover img={getImage(i)} title={getTitle(i)} />);

  const stepSnippets = {
    1: (
      <div className="stepone-container">
        <img className="stepone-img" src={Devices} />
        <span>STEP {currentStep} OF 3</span>
        <span className="stepone-header">Finish setting up your account</span>
        <p className="stepone-body">
          Aniflix is personalized for you. Create a password to watch on any
          device at any time.
        </p>
        <button className="stepone-button" onClick={nextStep}>
          Next
        </button>
      </div>
    ),
    2: (
      <div className="steptwo-container">
        <span>STEP {currentStep} OF 2</span>
        <span className="stepone-header">
          Create a password to start your membership
        </span>
        <p className="stepone-body">
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
        <SignUpForm />
        {/* <form onSubmit={handleSubmit}>

          <input
            type="email"
            value={emailInput}
            onChange={e => setEmailInput(e.target.value)}
            className="steptwo-input"
            placeholder="Email"
          />
          <input
            type='password'
            value={passwordInput}
            onChange={e => setPasswordInput(e.target.value)}
            className="steptwo-input"
            placeholder="Password"
          />
          <input
            type='password'
            value={confirmPass}
            onChange={e => setConfirmPass(e.target.value)}
            className="steptwo-input"
            placeholder="Confirm Password" />
          <button className="stepone-button" type='submit'>
            Next
          </button>
        </form> */}
      </div>
    ),
    // 3: (
    //   <div className="stepthree-container">
    //     <span>STEP {currentStep} OF 3</span>
    //     <span className="stepone-header">Personalize your experience.</span>
    //     <p className="stepone-body">Select at least 3...</p>
    //     <div className="animecovers-container">{animeCovers}</div>
    //   </div>
    // ),
  };

  return (
    <div className="registerpage--container">
      <div className="registerpage--header">
        {/* <Link to={"/"}>
          <img className="registerpage-logo" src={Logo} />
        </Link>
        <NavLink className="registerpage-header--link" to={"./"}>
          Sign In
        </NavLink> */}
      </div>
      <div
        className="registerpage--body"
        style={currentStep === 3 ? { width: "100%", padding: "0 6rem" } : null}
      >
        {stepSnippets[currentStep]}
      </div>
      {/* <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> */}
    </div>
  );
}

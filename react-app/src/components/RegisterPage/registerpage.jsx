import React from "react";
import Devices from "../../images/netflixDevices.png";
import Logo from "../../images/logos/aniflixLogo.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimeCover from "./animecover";
import { getImage, getTitle } from "../../images/covers";
import { Link } from "react-router-dom";
import "./registerpage.css";

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const changeEmailInput = (email) => setEmailInput(email.value);
  const changePasswordInput = (password) => setPasswordInput(password.value);

  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);

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
        <span>STEP {currentStep} OF 3</span>
        <span className="stepone-header">
          Create a password to start your membership
        </span>
        <p className="stepone-body">
          Just a few more steps and you're done! We hate paperwork, too.
        </p>
        <input
          value={emailInput}
          onChange={changeEmailInput}
          className="steptwo-input"
          placeholder="Email"
        />
        <input
          value={passwordInput}
          onChange={changePasswordInput}
          className="steptwo-input"
          placeholder="Add a password"
        />
        <button className="stepone-button" onClick={nextStep}>
          Next
        </button>
      </div>
    ),
    3: (
      <div className="stepthree-container">
        <span>STEP {currentStep} OF 3</span>
        <span className="stepone-header">Personalize your experience.</span>
        <p className="stepone-body">Select at least 3...</p>
        <div className="animecovers-container">{animeCovers}</div>
      </div>
    ),
  };

  return (
    <div className="registerpage--container">
      <div className="registerpage--header">
        <Link to={"/"}>
          <img className="registerpage-logo" src={Logo} />
        </Link>
        <NavLink className="registerpage-header--link" to={"./"}>
          Sign In
        </NavLink>
      </div>
      <div
        className="registerpage--body"
        style={currentStep === 3 ? { width: "100%", padding: "0 6rem" } : null}
      >
        {stepSnippets[currentStep]}
      </div>
    </div>
  );
}

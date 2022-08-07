import React from "react";
import Devices from "../../images/netflixDevices.png";
import Logo from "../../images/aniflixLogo.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./registerpage.css";

export default function RegisterPage() {
  let [currentStep, setCurrentStep] = useState(1);
  const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  const stepOne = (
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
  );

  return (
    <div className="registerpage--container">
      <div className="registerpage--header">
        <img className="registerpage-logo" src={Logo} />
        <NavLink className="registerpage-header--link" to={"./"}>
          Sign In
        </NavLink>
      </div>
      <div className="registerpage--body">{stepOne}</div>
    </div>
  );
}

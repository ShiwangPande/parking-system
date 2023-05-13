import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from '../components/auth/SignIn';
import ParkingImg from "../assets/img/parklogo.png";
function LoginScreen() {
  const [sigIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo w-[50px] h-[50px]"
          src={ParkingImg}
          alt="Netflix Logo"
        />

        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {sigIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Parking Made Easy</h1>
            <h2>Book your parking spot now</h2>

            {/* <div className="loginScreen__input"> */}
            <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">
              Sign In
            </button>
            {/* </div> */}
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;

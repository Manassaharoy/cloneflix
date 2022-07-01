import React, { useState } from "react";
import "./login.scss";
import {Link, useNavigate} from 'react-router-dom'

// import { onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebaseConfig";
import GoogleButton from 'react-google-button'
import { useUserAuth } from "../../context/UserAuthContext"



export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();

  const handleLogin = async () => {
    try {
      await logIn(email, password);
      navigate("/");
      alert("login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
      alert("Login Success with google id!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Link to="/"><img
              className="logo"
              src="https://camo.githubusercontent.com/f2e22c003787210dbf3009f1d859e5bff7c10f97b3bb2a8255336a22494167be/68747470733a2f2f666f6e746d656d652e636f6d2f7065726d616c696e6b2f3138313231322f63356334623331333430363166383664303664653938393562316561353532322e706e67"
              alt=""
            /></Link>
        </div>
      </div>
      <div className="container">
        <div className="form">
          <h1>Sign In</h1>
          <input
              type="email" 
              placeholder="Email or phone number" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}/>
          <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
              value={password} />
          <button className="loginButton" onClick={handleLogin}>Login</button>
          <span>
            New to Netflix? <b><Link to="/register" style={{textDecoration:"none", color:"red"}}>Sign up</Link> now.</b>
          </span>
          <GoogleButton
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
    </div>
  );
}
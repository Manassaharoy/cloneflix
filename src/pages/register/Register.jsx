import { useRef } from "react";
import { useState } from "react";
import "./register.scss";
import { Link } from 'react-router-dom';


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <Link to="/"><img
            className="logo"
            src="https://camo.githubusercontent.com/f2e22c003787210dbf3009f1d859e5bff7c10f97b3bb2a8255336a22494167be/68747470733a2f2f666f6e746d656d652e636f6d2f7065726d616c696e6b2f3138313231322f63356334623331333430363166383664303664653938393562316561353532322e706e67"
            alt=""
          /></Link>
          <Link to="/login" style={{textDecoration:"none", color:"white"}}>
            <button className="loginButton">Sign In</button>
            </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
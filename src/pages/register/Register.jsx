import { useState } from "react";
import "./register.scss";
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext"

export default function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await signUp(email, password);
      alert("Login Success");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
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
          <div className="form">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="email"
              value={formValues.email}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="password"
                value={formValues.password}
              />
            )}
            {!showPassword && (
              <button className="registerbutton" onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          {showPassword && <button onClick={handleSignIn}>Sign Up</button>}
      </div>
    </div>
  );
}
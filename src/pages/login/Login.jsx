import "./login.scss";
import {Link} from 'react-router-dom'

export default function Login() {
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
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b><Link to="/register" style={{textDecoration:"none", color:"red"}}>Sign up</Link> now.</b>
          </span>
        </form>
      </div>
    </div>
  );
}
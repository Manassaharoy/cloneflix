import { Search, Notifications } from '@mui/icons-material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    
    const { logOut, user } = useUserAuth();
    const [isScrolled, setisScrolled] = useState(false);
    const navigate = useNavigate();

    window.onscroll = () =>{
        setisScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          alert(error.message);
        }
      };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <Link to="/"><img
                className="logo"
                src="https://camo.githubusercontent.com/f2e22c003787210dbf3009f1d859e5bff7c10f97b3bb2a8255336a22494167be/68747470733a2f2f666f6e746d656d652e636f6d2f7065726d616c696e6b2f3138313231322f63356334623331333430363166383664303664653938393562316561353532322e706e67"
                alt="Logo"
                /></Link>
                <span><Link to="/" className='link'>Homepage</Link></span>
                <span><Link to="/error" className='link'>Series</Link></span>
                <span><Link to="/error" className='link'>Movies</Link></span>
                <span><Link to="/error" className='link'>New and Popular</Link></span>
                <span><Link to="/error" className='link'>My list</Link></span>
            </div>
            <div className="right">
                <Search className="icon hidden"/>
                <span>Hello, {user ? user.email :"guest"}</span>

                {user ? 
                <>
                    <Notifications className="icon hidden"/>
                    <img src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" alt="profile pic" />
                
                    <div className="profile">
                    <ArrowDropDownIcon className="icon"/>
                    <div className="options">
                        <span>Profile</span>
                        <span>
                            <button style={{backgroundColor:"red",
                                            cursor:"pointer",
                                            color:"white"
                            }} onClick={handleLogout}>
                             Logout
                            </button>
                        </span>
                        </div>
                    </div>
                </>

                    :
                    <Link to="/login" className='link'>
                        <button 
                        style={{marginLeft:"10px",
                                backgroundColor:"red",
                                color:"white",
                                padding:"5px",
                                borderRadius:"5px",
                                cursor:"pointer"
                        }}>
                            Login
                        </button>
                    </Link>
                }

                

            </div>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./error.scss"

const Error = () => {
  return (
    <div className='error'>
       <h2>Page not found!!! <br />Return to home page <Link to="/"><button>Home</button></Link></h2> 
    </div>
  )
}

export default Error
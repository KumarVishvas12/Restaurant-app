import React, { useState } from 'react';
import '../css/Header.css';
import { LOGO_URL } from '../utils/constants';



function Header() {
  const [loginbtn,setLoginbtn]=useState("Login")
  return (
    <div className='header'>
      
    <div className="logo-container">
    <img className='logo' src={LOGO_URL} alt="" />
    </div>
      <div className="nav-items">
      <ul>
      <li>Home</li>
      <li>About us</li>
      <li>Contact</li>
      <li>Cart</li>
      <button onClick={()=>{
        loginbtn==="Login"? setLoginbtn("Logout"):setLoginbtn("Login")}}>{loginbtn}</button>
      </ul>
      </div>

      </div>
      
  )
}

export default Header

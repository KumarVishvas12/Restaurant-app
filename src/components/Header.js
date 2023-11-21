import React from 'react';
import '../css/Header.css';
import { LOGO_URL } from '../utils/constants';



function Header() {
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
      </ul>
      </div>

      </div>
      
  )
}

export default Header

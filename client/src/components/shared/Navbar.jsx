import React from 'react';
import { NavLink, } from "react-router-dom";
import styles from'./Main.css';
import { Image } from 'semantic-ui-react';
import Logo from "../../assets/Images/GENHU-logo-fake.png";
import Facebook from "../../assets/Images/facebook.png";
const Navbar = () => {
  return(
    <div className='main-nav'>
      <div className='nav-home'>
        <NavLink to="/"><Image src={Logo} className='logo-image' alt='logo'/></NavLink>
      </div>
      <div className='right_nav'>
        <NavLink to="/calendar" className='nav-item' >Calendar</NavLink>
        <div className='dropdown'>
        <NavLink to="/about" className='nav-item'>About Us</NavLink>
        <div className='dropdown-content'>
        <NavLink to='/staff'>Staff & Volunteers</NavLink>
        <NavLink to='/policy'>Policy & Financial</NavLink>
        <NavLink to='/proven_souls'>Proven Souls</NavLink>
        </div>
        </div>
        <NavLink to="/expeditions" className='nav-item'>Expeditions</NavLink>
        <div className='dropdown'>
        <NavLink to="/homes" className='nav-item'>Homes & Projects</NavLink>
        <div className='dropdown-content'>
        <NavLink to='/orphanages'>Orphanages</NavLink>
        <NavLink to='/drop_in_centers'>Drop-In Centers</NavLink>
        </div>
        </div>
        <NavLink to="/contact" className='nav-item'>Contact Us</NavLink>
        <a href="https://www.facebook.com/genhu.org/" target="_blank"><Image src={Facebook} className='facebook-image' alt='facebook'/></a>     
      </div>
    </div>
  )
}



export default Navbar;
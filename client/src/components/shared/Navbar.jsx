import React from 'react';
import { NavLink, } from "react-router-dom";
import styles from'./Main.css';

const Navbar = () => {
  return(
    <>
    <div className='main-nav'>
      <div className='left-nav'>
        <NavLink to="/" className='nav-item'>Home</NavLink>
      </div>
      <div className='right-nav'>
        <NavLink to="/calendar" className='nav-item' >Calendar</NavLink>
        <NavLink to="/about" className='nav-item'>About Us</NavLink>
        <NavLink to="/expeditions" className='nav-item'>Expeditions</NavLink>
        <NavLink to="/homes" className='nav-item'>Homes & Projects</NavLink>
        <NavLink to="/contact" className='nav-item'>Contact Us</NavLink>
      </div>
    </div>
    </>
  )
}



export default Navbar;
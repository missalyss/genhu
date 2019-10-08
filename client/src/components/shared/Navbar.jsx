import React from 'react';
import { NavLink, } from "react-router-dom";
import styles from'./Main.css';

const Navbar = () => {
  return(
    <>
    <div className='main-nav'>
      <div className='nav_column'>
        <div className='left_column'>
          <NavLink to="/" className='nav-item'>Home</NavLink>
        </div>
      </div>
      <div className='nav_column'>
        <div className='right_column'>
          <NavLink to="/calendar" className='nav-item' >Calendar</NavLink>
          <NavLink to="/about" className='nav-item'>About Us</NavLink>
          <NavLink to="/expeditions" className='nav-item'>Expeditions</NavLink>
          <NavLink to="/homes" className='nav-item'>Homes & Projects</NavLink>
          <NavLink to="/contact" className='nav-item'>Contact Us</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}



export default Navbar;
import React from 'react';
import { NavLink, } from "react-router-dom";
import styles from'./Main.css';

const Navbar = () => {
  return(
    <div className='main-nav'>
      <NavLink to="/" className='nav-item' className='left'>Home</NavLink>
      <NavLink to="/calendar" className='nav-item' className='right'>Calendar</NavLink>
      <NavLink to="/about"className='nav-item' className='right'>About Us</NavLink>
      <NavLink to="/expeditions" class='nav-item' className='right'>Expeditions</NavLink>
      <NavLink to="/homes" class='nav-item' className='right'>Homes & Projects</NavLink>
      <NavLink to="/contact" class='nav-item' className='right'>Contact Us</NavLink>
    </div>
  )
}



export default Navbar;
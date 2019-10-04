import React from 'react';
import { GlobalTitle } from './GlobalStyles';
import Navbar from './Navbar'
import LandingCarousel from './Carousel';
import './Main.css';

const Landing = () => {
  return(
    <div>
    <Navbar />
    <LandingCarousel />
    {/* stats */}
    </div>
    )
}


export default Landing;
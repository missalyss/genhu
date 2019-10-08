import React from 'react';
import { GlobalTitle } from './GlobalStyles';
import Navbar from './Navbar'
import LandingCarousel from './Carousel';
import Stats from '../shared/Stats'
import './Main.css';

const Landing = () => {
  return(
    <div>
    <Navbar />
    <LandingCarousel />
    <Stats/>
    </div>
    )
}


export default Landing;
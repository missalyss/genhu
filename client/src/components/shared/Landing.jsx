import React from 'react';
import { GlobalTitle } from './GlobalStyles';
import Navbar from './Navbar'
import About from './About';
import LandingCarousel from './Carousel';
import Stats from '../shared/Stats'
import './Main.css';


const Landing = () => {
  return(
    <div>
     <Navbar />
     <LandingCarousel />
     <Stats/>
    <About />
    </div>
    )
}


export default Landing;
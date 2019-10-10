import React from 'react';
import { GlobalTitle } from './GlobalStyles';
import Navbar from './Navbar';
import About from '../shared/About';
import './About.css';
import { AboutCarousel } from '../shared/About';
import LandingCarousel from './Carousel';
import Stats from '../shared/Stats'
import ProvenSouls from '../shared/Proved-souls';
import './Main.css';


const Landing = () => {
  return(
    <div>
     <Navbar />
     <LandingCarousel />
     <ProvenSouls />
     <Stats/>
    <About />
      <AboutCarousel />
    </div>
    )
}


export default Landing;
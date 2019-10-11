import React from 'react';
import { GlobalTitle } from './GlobalStyles';
import Navbar from './Navbar';
import About from '../shared/About';
import './About.css';
import { AboutCarousel } from '../shared/About';
import LandingCarousel from './Carousel';
import Stats from './LandingStats'
import ProvenSouls from '../shared/Proved-souls';
import ThreeStages from '../shared/ThreeStages';
import './Main.css';
import Footer from '../shared/Footer';


const Landing = () => {
  return(
    <div>
     <LandingCarousel />
     <ProvenSouls />
     <Stats/>
    <About />
      <AboutCarousel />
    <ThreeStages />
    <Footer/>
    </div>
  )
}


export default Landing;
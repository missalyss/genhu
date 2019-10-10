import React from 'react';
import { GlobalTitle } from './GlobalStyles';
import About from './About';
import LandingCarousel from './Carousel';
import Stats from '../shared/Stats'
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
    <ThreeStages />
    <Footer/>
    </div>
    )
}


export default Landing;
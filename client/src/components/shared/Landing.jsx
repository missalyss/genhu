import React from 'react';
import { GlobalTitle } from './GlobalStyles';
import Navbar from './Navbar'
import Carousel from './Carousel';
import About from './About';
import './Main.css';

const Landing = () => {
  return(
    <div>
    <Navbar />
    <Carousel />
    <About />
    </div>
    )
}


export default Landing;
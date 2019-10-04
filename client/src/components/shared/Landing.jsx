import React from 'react';
import { GlobalTitle } from './GlobalStyles';
import Navbar from './Navbar'
import Carousel from './Carousel';
import Stats from './Stats';
import './Main.css';

const Landing = () => {
  return(
    <div>
    <Navbar />
    <Carousel />
    <Stats />
    {/* stats */}
    </div>
    )
}


export default Landing;
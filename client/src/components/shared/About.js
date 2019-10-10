import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './About.css';



const About = () => {

  return (
    <div>
      {/* <div class="title">Learn More About Generations Humanitarian</div> */}

      <div class="main">
          <div class="about-container">
            <div class="about-logo"></div>
            <div class='learn'>
            <div class="about-title">Learn More About Generations Humanitarian</div>
            <div class="mission">OUR MISSION</div>
            <div class="mission-paragraph">
              Generations Humanitarian is committed to transforming street children
              toward an abundance of health, hope, and loving homes—thereby breaking
              the cycle of scarcity for generations to come. This is done through
              broad research, novel development, strengthening nonprofit entities in
              development, and individual nurturing in a home environment.
            </div>
            </div>
          </div>
        </div>

      <div class="bottom">
        <div className="convert-container">
          <div class="converted">BECOME CONVERTED</div>
          <div class="converted-paragraph">
            Come with us to Peru or Colombia and know these children first hand.
            Strip away the materialism that surrounds us here in the USA and
            experience how these children view the world—their humility,
            authenticity, and love. Over time, those who have come on expeditions
            join this meaningful battle to save these kids and give them life.
            Most comment how happy it makes them. There are many worthy causes in
            the world today—arts, environment, animals, and public benefit—but no
            greater joy comes from loving our fellowman and serving the “least of
            these.”
          </div>
        </div>
      </div>
    </div>
  );
};


export const AboutCarousel = () => {

  return(

  <div class="bottom">

    
    <Carousel className='about-wrapper' fade indicators={false} interval={2500} pauseOnHover={false}>
      <Carousel.Item className='about-pic1'>
        jioejioegajioaegio;aegoarge
      </Carousel.Item>
    </Carousel>
    
  </div>
  );
};

export default About;

import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './About.css';
import Logo from '../../assets/Images/LogoSymbol.png';
import PicOne from '../../assets/carousel-pic.jpg';
import PicTwo from '../../assets/carousel-pic2.jpg';
import PicThree from '../../assets/carousel-pic3.jpg';



const About = () => {

  return (
    <div>
      <div class="main">
        <div class="about-container">
          <img src={Logo} className='about-logo'/>
          <div class='learn-section'>
          <div class="about-title">Learn More About Generation Humanitarian</div>
            <div class="mission-paragraph">
          <h3>OUR MISSION</h3>
          <br></br>
            Generations Humanitarian is committed to transformingstreet children
            toward an abundance of health, hope, and lovinghomes—thereby breaking
              the cycle of scarcity for generations to come. This isdone through
            broad research, novel development, strengthening nonprofitentities in
            development, and individual nurturing in a homeenvironment.
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const AboutCarousel = () => {

  return(
      <div className="convert-container">
        <div class="converted-paragraph">
        <h3>BECOME CONVERTED</h3>
        <br></br>
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

        <div className='about-carousel'>
          <div className='carousel-animation'>
            <Carousel  fade indicators={false} interval={2500}pauseOnHover={false} style={{width: '100%', height: '100%'}}>
              <Carousel.Item>
                <img src={PicOne} className='about-pic1'/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={PicTwo} className='about-pic2'/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={PicThree} className='about-pic3'/>  
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    );
  };

export default About;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carouselPic from '../../assets/carousel-pic.jpg';
import carouselPic2 from '../../assets/carousel-pic2.jpg';
import carouselPic3 from '../../assets/carousel-pic3.jpg';

const LandingCarousel = () => {
  return(
    <Carousel className='hero-wrapper' fade indicators={false} interval={2000} pauseOnHover={false}>
      <Carousel.Item>
        <div className='hero-align_col' style={{border: 'solid 1px red'}}>
          <div className=''>
        <img
          className='hero-pic'
          src={carouselPic}
          alt="First slide"
        />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>
          </div>
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className='hero-pic'
          src={carouselPic2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className='hero-pic'
          src={carouselPic3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default LandingCarousel;
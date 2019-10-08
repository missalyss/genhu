import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Title, SubHeading, Button } from '../styles/StyledComponents';

// style={{border: 'solid 1px blue'}}

const LandingCarousel = () => {
  return(
    <Carousel className='hero-wrapper' fade indicators={false} interval={2500} pauseOnHover={false}>
      <Carousel.Item className='hero-pic1'>
          <div className='hero-align_row' >
            <div className='hero-align_col' >
              {/* <Carousel.Caption> */}
              <Title>Welcome to Generations Humanitarian</Title>
              <SubHeading>We build and operate orphanages and drop-in centers for street children in Latin America</SubHeading>
              {/* </Carousel.Caption> */}
              <Button>Learn More</Button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='hero-pic2'>
          <div className='hero-align_row' >
            <div className='hero-align_col' >
              {/* <Carousel.Caption> */}
              <Title>Come to South America in 2019</Title>
              <SubHeading>Contact us for a group's custom expedition</SubHeading>
              {/* </Carousel.Caption> */}
              <Button>Learn More</Button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='hero-pic3'>
          <div className='hero-align_row' >
            <div className='hero-align_col' >
              {/* <Carousel.Caption> */}
              <Title>Refuge Crisis</Title>
              <SubHeading>Help Venezuela Refuge Children</SubHeading>
              {/* </Carousel.Caption> */}
              <Button>Learn More</Button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='hero-pic4'>
          <div className='hero-align_row' >
            <div className='hero-align_col'>
              {/* <Carousel.Caption> */}
              <Title>Greenhouse & Hydroponics Project</Title>
              <SubHeading>We are creating self-sustaining, scalable, water efficient, organice greenhouses 
                that teach children a work ethic, give them price in their produce, and funds their home.</SubHeading>
              {/* </Carousel.Caption> */}
              <Button>Learn More</Button>
          </div>
        </div>
      </Carousel.Item>
 
  </Carousel>
  )
}

export default LandingCarousel;
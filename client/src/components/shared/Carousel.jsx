import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Fade } from 'react-reveal';
import { Title, SubHeading, Button } from "../styles/StyledComponents";
import "./Carousel.css";
import { HashLink as Link } from "react-router-hash-link";
import ImgOne from "../../assets/Images/GenhuHeroImage.bmp";
import ImgTwo from "../../assets/carousel-pic.jpg";
import ImgThree from "../../assets/carousel-pic3.jpg";
import ImgFour from "../../assets/carousel-pic4.jpg";

// style={{border: 'solid 1px blue'}}

const LandingCarousel = () => {
  return (
    <Carousel fade indicators={false} interval={4000} pauseOnHover={false}>
      <Carousel.Item>
        <img src={ImgOne} className="hero-pic" />
        <Carousel.Caption className="hero-align_col">
          <Title className="title-car-med">
            Welcome to <br></br> Generations Humanitarian
          </Title>
          <br></br>
          <SubHeading className="subhead-car-med">
            We build and operate orphanages and drop-in centers for street
            children in Latin America
          </SubHeading>
          <br></br>
          <Link smooth to="/#about">
            <Button>Learn More</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImgTwo} className="hero-pic2" />
        <Carousel.Caption className="hero-align_col">
          <Title className="title-car-med">
            Come to <br></br>South America <br></br>in 2019
          </Title>
          <br></br>
          <SubHeading className="subhead-car-med">
            Contact us for a group's custom expedition
          </SubHeading>
        <br></br>
        <Link smooth to="/#about">
          <Button>Learn More</Button>
        </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImgThree} className="hero-pic" />
        <Carousel.Caption className="hero-align_col">
          <Title className="title-car-med">Refuge Crisis</Title>
          <br></br>
          <SubHeading className="subhead-car-med">
            Help Venezuela Refugee Children
          </SubHeading>
        </Carousel.Caption>
        <br></br>
        <Link smooth to="/#about">
          <Button>Learn More</Button>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImgFour} className="hero-pic2" />
        <Carousel.Caption className="hero-align_col">
          <Title className="title-car-med">
            Greenhouse & Hydroponics Project
          </Title>
          <br></br>
          <SubHeading className="subhead-car-med">
            We are creating self-sustaining, scalable, water efficient, organice
            greenhouses that teach children a work ethic, give them price in
            their produce, and funds their home.
          </SubHeading>
        </Carousel.Caption>
        <br></br>
        <Link smooth to="/#about">
          <Button>Learn More</Button>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingCarousel;

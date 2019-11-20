import React from 'react';

import CarouselMob from './carousel-mob/CarouselMob';
import ProvenSoulsMob from './proven-souls-mob/ProvenSoulsMob';
import LandingStatsMob from './landing-stats-mob/LandingStatsMob';
import AboutMob from '../landing-mobile/about-mob/AboutMob';
// import { AboutCarouselMob } from '../landing-mobile/about-mob/AboutMob';
import ThreeStagesMob from '../landing-mobile/three-stages-mob/ThreeStagesMob';
import FooterMob from '../landing-mobile/footer-mob/FooterMob';

const LandingMob = () => (
  <>
    {/* <NavMob /> */}
    <CarouselMob />
    <ProvenSoulsMob />
    <LandingStatsMob />
    <AboutMob />
    {/* <AboutCarouselMob /> */}
    <ThreeStagesMob />
    <FooterMob />
  </>
)

export default LandingMob;
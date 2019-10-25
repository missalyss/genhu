import React from 'react';
import { Title, SubHeading, Button } from '../styles/StyledComponents';
import './Proven-souls.css';
import { NavLink } from 'react-router-dom';

const ProvenSouls = () => {
  return (
  <>
    <div className='ps-container'>
      <div className='ps-title'>Proven Souls. Proven Results.</div>
      <div className='ps-para'>Our oldest aged-out kids have flourished off the streets. 
        They are productive members of Peruvian, Bolivian, and Colombian society. 
        Follow them in their lives. Enjoy payback days from your gifts.</div>
        <button className='proven-button'><NavLink to='/proven_souls'>Discover More</NavLink></button>
    </div>
  </>
  )
}

export default ProvenSouls;
import React from 'react';
import './ProvenSoulsMob.css';
import { NavLink } from 'react-router-dom';

const ProvenSoulsMob = () => {
  return (
  <>
    <div className='ps-container-mob'>
      <div className='ps-title-mob'>Proven Souls. Proven Results.</div>
      <div className='ps-para-mob'>Our oldest aged-out kids have flourished off the streets. 
        They are productive members of Peruvian, Bolivian, and Colombian society. 
        Follow them in their lives. Enjoy payback days from your gifts.</div>
        <div className='btn-div-mob'>
          <button className='proven-button-mob'>
            <NavLink to='/proven_souls'>Discover More</NavLink>
          </button>
        </div>
    </div>
  </>
  )
}

export default ProvenSoulsMob;
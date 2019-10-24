import React from 'react';
import "./Footer.css"
import { NavLink } from 'react-router-dom';


const Stats = () => {
  return(
    <div class='footer-container'>
      <div class="row">
        <div class="column">
          
          <h2 class= 'header'>OUR MISSION</h2>
          <p class='mission'>Generations Humanitarian is committed to transform street children toward an abundance of health,
             hope, and loving homes—thereby breaking the cycle of scarcity for generations to come. 
             This is done through broad research, novel development, strengthening nonprofit entities in development, 
             and individual nurturing in a home environment.</p>

          <br/>
          <br/>   
            
        </div>
        <div class="column">
        <NavLink to='/expeditions' className='NavLink'>
          <h2 class= 'header'>GET INVOLVED</h2>
          <p>Go on an expedition</p>
          <p>Gift Levels:</p>
          <p>Support Sponsor: $50-100 monthly</p>
          <p>Research Sponsor: $250 monthly</p>
          <p>Home Nurturing Sponsor: $1500+ monthly</p>
          <p>Volunteer and Fundraise</p>
          </NavLink>
        </div>
        <div class="column">
          <h2 class= 'header'>LEGAL STUFF</h2>
          <NavLink to='/policy' className='NavLink'><p>Policy and Financial</p></NavLink>
          <NavLink to='/privacy' className='NavLink'><p>Privacy</p></NavLink>
        </div>
        <div class="column">
          <h2 class= 'header'>CONTACT US</h2>
          <p>2607 Casto Lane,</p>
          <p>Salt Lake City, Utah 84117</p>
          <p>Phone: +1 801-859-1033</p>
          <p>E-mail: van@genhu.org</p>
          <p>Website: www.genhu.org</p>
        </div>
        </div>
    </div>
  )
}

export default Stats;


import React from 'react';
import "./FooterMob.css"
import { NavLink, Link } from 'react-router-dom';


const FooterMob = () => {
  return(
    <div class='footer-container-mob'>
      <div class="row-mob">
        <div class="column-mob">
          
          <h2 class= 'header-mob'>OUR MISSION</h2>
          <span className="footer-underline"></span>
          <p>Generations Humanitarian is committed to transform street children toward an abundance of health,
             hope, and loving homes—thereby breaking the cycle of scarcity for generations to come. 
             This is done through broad research, novel development, strengthening nonprofit entities in development, 
             and individual nurturing in a home environment.</p>

 
            
        </div>
        <div class="column-mob">
          <h2 class= 'header-mob'>GET INVOLVED</h2>
          <span className="footer-underline"></span>
        <NavLink to='/expeditions' className='NavLink-mob'>
          <p>Go on an expedition</p>
          <p>Gift Levels:</p>
          <p>Support Sponsor: $50-100 monthly</p>
          <p>Research Sponsor: $250 monthly</p>
          <p>Home Nurturing Sponsor: $1500+ monthly</p>
          <p>Volunteer and Fundraise</p>
          </NavLink>
        </div>
        <div class="column-mob">
          <h2 class= 'header-mob'>LEGAL STUFF</h2>
          <span className="footer-underline"></span>
          <NavLink to='/policy' className='NavLink-mob'><p>Policy and Financial</p></NavLink>
          <NavLink to='/privacy' className='NavLink-mob'><p>Privacy</p></NavLink>
        </div>
        <div class="column-mob">
          <Link to='/contact'><a>CONTACT US</a></Link>
          <span className="footer-underline"></span>
        
        </div>
        </div>
    </div>
  )
}

export default FooterMob;


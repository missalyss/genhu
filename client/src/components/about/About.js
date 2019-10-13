import React, { Component } from 'react';
import Footer from '../shared/Footer';
import AboutUs from "./AboutUs.css";

class About extends Component {
  render() {
    return (
    <div>
      <div class='aboutUs-container'>
        <h1>About Us</h1>
        <p>Genhu is a team of loving, charitable, 
          educated, and dedicated men and women who care about changing the lives of others. 
          Some volunteer their time, others are paid.</p>

          <ul class='list-style'>
            <li>Board of Directors</li>
            <li>Management & Staff</li>
            <li>Volunteers</li>
          </ul>

          <h4>VISION</h4>
          <p>Generations Humanitarian envisions a world without street children.</p>
            <div>
              <h4>MISSION</h4>
              <p>Generations Humanitarian is committed to transform street children toward an abundance of health, 
                hope, and loving homes—thereby breaking the cycle of scarcity for generations to come. 
                This is done through broad research, novel development, strengthening nonprofit entities in development, 
                and individual nurturing in a home environment.
              </p>
            </div>
          <h4>MANDATES</h4>
          <p>We are mandated by regulatory agencies of the U.S. 
            to create public value and insure the common good is advanced. 
            We will comply with accounting and regulatory requirements. 
            As we develop our alliances with government agencies and other actors in the field, 
            we are aware that some mandates may be set forth.</p>
          <h4>BELIEFS</h4>
          <h4>VALUES</h4>
        </div>
          <Footer/>
      </div>
      
    )
  }
}

export default About;
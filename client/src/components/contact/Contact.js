import React, { Component } from 'react';
import Logo from "../../assets/Images/GENHU-logo-fake.png";
import styles from'../shared/Main.css';
import Footer from '../shared/Footer';

class Contact extends Component {
  render() {
    return (
      
      <>
      <div className='contact'>
      <div className='contact_left'>
      <img src={Logo} className='contact_logo' alternate='logo'/>
      <div className='address_info'>
      <p>2607 Casto Lane,</p>
      <p>Salt Lake City, Utah 84117</p>
      <p>Phone: +1 801-859-1033</p>
      <p>E-mail: van@genhu.org</p>
      <p>Website: www.genhu.org</p>
      </div>
      </div>
      <div className='contact_right'>
        <p>Insert form here</p>
      </div>
      </div>
      <h2>Coming Soon!</h2>
      <Footer/>
      </>
      
  
    )
  }
}

export default Contact;
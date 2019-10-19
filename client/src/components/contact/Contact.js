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
        <form className='contact_form'>
        <h2>We're ready to help!</h2>
        <div className='contact_items'>
        <div className='contact_item'>
        <label>Name</label>
        <input name='name' />
        </div>
        <div className='contact_item'>
        <label>Email</label>
        <input type='email' name='email' />
        </div>
        <div className='contact_item'>
        <label>Subject</label>
        <input name='subject' />
        </div>
        <div className='contact_item'>
        <label>Message</label>
        <textarea name='message' />
        </div>
        <div>
          <button type='submit' className='contact_submit' onClick={alert('Thank you!')}>Send Message</button>
        </div>
        </div>
        </form>
      </div>
      </div>

      <Footer />
      </>
      
  
    )
  }
}

export default Contact;
import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footerLogo'>
          <img src='/logo.svg' alt='' />
          <p>We kaboom your beauty holiday instantly and memorable.</p>
        </div>
        <div className='footerButton'>
          <h4>Become hotel Owner</h4>
          <button>Register Now</button>
        </div>
      </div>
      <div className='bottom'>Copyright 2024 • All rights reserved • Salman Faris</div>
    </div>
  );
}

export default Footer;

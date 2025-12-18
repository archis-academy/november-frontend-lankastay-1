import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.scss';
import Button from '../Button/Button.jsx';

function Footer() {
  const navigate = useNavigate();

  const handleRegisterClick = () => navigate('/admin-register');

  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footerLogo'>
          <img src='/logo.svg' alt='' />
          <p>We kaboom your beauty holiday instantly and memorable.</p>
        </div>
        <div className='footerButton'>
          <h4>Become hotel Owner</h4>
          <Button text='Register Now' onClick={handleRegisterClick} type='button' />
        </div>
      </div>
      <div className='bottom'>Copyright 2024 • All rights reserved • Salman Faris</div>
    </div>
  );
}

export default Footer;

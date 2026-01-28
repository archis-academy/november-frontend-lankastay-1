import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from '../Button/Button.jsx';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navWrapperClass = [styles.navWrapper, open ? styles.open : null].filter(Boolean).join(' ');
  const handleLinkClick = () => {
    if (open) setOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
    handleLinkClick();
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <a href='/'>
          <img src='/logo.svg' alt='LankaStay Logo' />
          </a>
        </div>

        <button
          className={styles.hamburger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
          type='button'
        >
          <span className={open ? styles.barTopOpen : styles.barTop} />
          <span className={open ? styles.barMiddleOpen : styles.barMiddle} />
          <span className={open ? styles.barBottomOpen : styles.barBottom} />
        </button>

        <div className={navWrapperClass}>
          <nav className={styles.nav} aria-label='Main navigation'>
            <a href='#' onClick={handleLinkClick}>Home</a>
            <a href='#' onClick={handleLinkClick}>Hotels</a>
            <a href='#' onClick={handleLinkClick}>Rooms</a>
            <a href='#' onClick={handleLinkClick}>About</a>
            <a href='#' onClick={handleLinkClick}>Contact</a>
          </nav>

          <div className={styles.headerButton}>
            <Button text='Login' onClick={handleLoginClick} type='button' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

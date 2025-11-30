import React from 'react';
import styles from "./Header.module.scss";
import Button from '../Button/Button.jsx';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
            <img src='/logo.svg' alt='LankaStay Logo' />
        </div>

        <nav className={styles.nav}>
          <b href="#">Home</b>
          <a href="#">Hotels</a>
          <a href="#">Rooms</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className={styles.headerButton}>
          <Button text="Login" />
        </div>
      </div>
    </header>
  );
};

export default Header;
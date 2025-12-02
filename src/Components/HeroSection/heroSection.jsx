import React from 'react';
import styles from './heroSection.module.scss'; 
import QuickStats from '../quick-stats-component/quick_stats';

const HeroSection = () => {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-container']}>
    
        <div className={styles['hero-content']}>
          <h1 className={styles['hero-title']}>
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          
          <p className={styles['hero-description']}>
            We provide what you need to enjoy your holiday with family. 
            Time to make another memorable moments.
          </p>

          <button className={styles['btn-primary']}>
            Show More
          </button>

          <div className={styles['hero-stats-wrapper']}>
            <QuickStats iconUrl="/icons/icon1.svg" number="2500" content="Users" />
            <QuickStats iconUrl="/icons/icon2.svg" number="200" content="Treasure" />
            <QuickStats iconUrl="/icons/icon3.svg" number="100" content="Cities" />
          </div>
        </div>

        <div className={styles['hero-image-wrapper']}>
          <img 
            src="/images/banner.svg" 
            alt="Vacation Home" 
            className={styles['hero-image']}
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
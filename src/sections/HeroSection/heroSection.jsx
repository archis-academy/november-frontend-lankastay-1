import React, { useEffect, useState } from 'react';
import styles from './heroSection.module.scss';
import QuickStats from '../../Components/quick-stats-component/quick_stats';
import Button from '../../Components/Button/Button';
import fetchData from '../../lib/fetchData';
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb';

const HeroSection = () => {
  const [quickStatsData, setQuickStatsData] = useState([]);

  useEffect(() => {
    fetchData('quickStats').then((data) => setQuickStatsData(data));
  }, []);
  return (
    
    <section className={styles['hero-section']}>
      <div className={styles['hero-container']}>
        <div className={styles['hero-content']}>
          <h1 className={styles['hero-title']}>
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>

          <p className={styles['hero-description']}>
            We provide what you need to enjoy your holiday with family. Time to make another
            memorable moments.
          </p>

          <Button text='Show More' />


          <div className={styles['hero-stats-wrapper']}>
            {quickStatsData.map((item) => {
              return (
                <div key={item.id}>
                  <QuickStats number={item.number} content={item.content} iconUrl={item.iconUrl} />
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles['hero-image-wrapper']}>
          <img src='/images/banner.svg' alt='Vacation Home' className={styles['hero-image']} />
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;

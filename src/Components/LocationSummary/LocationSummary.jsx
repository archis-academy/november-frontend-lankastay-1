import React from 'react';
import ChoiseCard from '../ChoiseCard/ChoiseCard';
import styles from './LocationSummary.module.scss';

const LocationSummary = ({ image, locationName, location }) => {
  return (
    <div className={styles.summaryWrapper}>

      <ChoiseCard
        image={image}       
        isSummary={true}
        isPopularChoise={false}
      />

      <div className={styles.bottomContent}>
          <div className={styles.title}>
            {locationName}
          </div>
          <div className={styles.location}>
            {location}
          </div>
      </div>

    </div>
  );
};

export default LocationSummary;

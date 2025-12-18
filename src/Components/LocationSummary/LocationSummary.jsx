
import React from 'react';
import ChoiseCard from '../ChoiseCard/ChoiseCard';
import styles from './LocationSummary.module.scss';

const LocationSummary = ({ image, locationName }) => {
  return (
    <div className={styles.summaryWrapper}>
      <ChoiseCard

        image={image}         
        title={locationName}   
        
        location="Galle, Sri Lanka"
        isSummary={true}
        isPopularChoise={false}
      />
    </div>
  );
};

export default LocationSummary;
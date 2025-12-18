import React from 'react';
import LocationSummary from '../../Components/LocationSummary/LocationSummary';
import styles from './SummaryPage.module.scss';

const SummaryPage = () => {
  const testImage = "/images/choise-card-images/blue-origin.png"; 
  const testName = "Blue Origin Fams";

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <div className={styles.contentWrapper}>
            <LocationSummary 
              image={testImage} 
              locationName={testName} 
            />
        </div>

      </div>
    </div>
  );
};

export default SummaryPage;
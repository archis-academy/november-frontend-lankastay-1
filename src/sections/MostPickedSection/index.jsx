import React, { useEffect, useState } from 'react';
import fetchData from '../../lib/fetchData';
import ChoiseCard from '../../Components/ChoiseCard/ChoiseCard';
import styles from './MostPickedSection.module.scss';

const MostPickedSection = () => {
  const [mostPickedData, setMostPickedData] = useState([]);

  useEffect(() => {
    fetchData('most-picked').then((data) => setMostPickedData(data));
  }, []);

  return (
    <div className={styles.mostPickedContainer}>
      <h2 className={styles.sectionTitle}>Most Picked</h2>
      <div className={styles.mostPickedGrid}> 
        {mostPickedData.map((card) => (
          <ChoiseCard
            id = {card?.id}
            title={card.title}
            location={card.location}
            price={card.price}
            image={card.image}
            key={card.id}
            priceText={card.priceText}
            isPopularChoise={card.isPopularChoise}
          />
        ))}
      </div>
    </div>
  );
};

export default MostPickedSection;

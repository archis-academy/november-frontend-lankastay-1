import React, { useEffect, useState } from 'react';
import ChoiseCard from '../../Components/ChoiseCard/ChoiseCard';
import styles from './Treasure.module.scss';

const Treasure = ({ data, currentId }) => {
  const [randomHotels, setRandomHotels] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {

      const available = data.filter((hotel) => hotel.id != currentId);
      const selected = available.slice(0, 4);
      setRandomHotels(selected);

    }
  }, [data, currentId]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Treasure to Choose</h2>
        
        <div className={styles.list}>
          {randomHotels.map((hotel, index) => {

             const showBadge = index === 2;

             return (
              <div key={hotel.id} className={styles.item}>
                  <ChoiseCard
                    id={hotel?.id}
                    image={hotel.images?.[0]} 
                    title={hotel.title}
                    location={hotel.subtitle}

                    isPopularChoise={true} 
                    
                    price={showBadge ? "Popular" : null}
                    priceText={showBadge ? "Choice" : null}
                  />
              </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Treasure;
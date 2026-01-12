import { useEffect, useState } from 'react';
import PreviousStayCard from '../../Components/PreviousStayCard/PreviousStayCard';
import fetchData from '../../lib/fetchData';
import style from './PreviousCardSection.module.scss';

const PreviousCardSection = () => {
  const [previousStayCard, setPreviousStayCard] = useState([]);

  useEffect(() => {
    fetchData('previous-card').then((data) => setPreviousStayCard(data));
  }, []);
  return (
    <div className={style.previousCardSectionWrapper}>
      <h3 className={style.previousCardSectionTitle}>Previous Stays</h3>
      <p className={style.previousCardSectionDescription}>Places you have been stayed</p>
      <div className={style.previousCardSectionContainer}>
        {previousStayCard.map((data) => (
          <PreviousStayCard
            date={data.date}
            key={data.id}
            price={data.price}
            title={data.title}
            street={data.street}
            country={data.country}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviousCardSection;

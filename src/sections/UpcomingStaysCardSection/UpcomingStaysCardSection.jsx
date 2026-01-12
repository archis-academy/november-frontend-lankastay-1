import { useEffect, useState } from 'react';
import UpcomingStaysCard from '../../Components/UpcomingStaysCard/UpcomingStaysCard';
import fetchData from '../../lib/fetchData';
import moduleName from './UpcomingStaysCard.module.scss';

const UpcomingStaysCardSection = ({}) => {
  const [upcomingStays, setUpcomingStays] = useState([]);

  useEffect(() => {
    fetchData('upcoming-stays-card').then((data) => setUpcomingStays(data));
  }, []);
  return (
    <div className={moduleName.upcomingStaysCardSection}>
      <div className={moduleName.header}>
        <h2>Upcoming Stays</h2>
        <p>Place you are gonna stay</p>
      </div>
      <div className={moduleName.cardsContainer}>
        {upcomingStays.map((data) => (
          <UpcomingStaysCard
            date={data.date}
            key={data.id}
            night={data.night}
            title={data.title}
            address={data.address}
            country={data.country}
            initPayment={data.initPayment}
            totalPayment={data.totalPayment}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingStaysCardSection;

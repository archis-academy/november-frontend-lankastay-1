import UpcomingStaysCardSection from '../../sections/UpcomingStaysCardSection/UpcomingStaysCardSection';
import PreviousCardSection from '../../sections/PreviousCardSection/PreviousCardSection';
import style from './Dashboard.module.scss';
import React from 'react';
import HotelOwnersSection from '../../sections/HotelOwnersSection/HotelOwnersSection';
const Dashboard = () => {

  const isSuperAdmin = true;

  return (
    <div className={style.container}>
      {isSuperAdmin ? (
        <div style={{ padding: '20px'}}>
          <HotelOwnersSection/>
        </div>
      ) : (
      <div>
        <div className={style.stayCards}>
          <UpcomingStaysCardSection />
          <PreviousCardSection />
        </div>
      </div>
      )}
    </div>
  );
};

export default Dashboard;

import UpcomingStaysCardSection from '../../sections/UpcomingStaysCardSection/UpcomingStaysCardSection';
import PreviousCardSection from '../../sections/PreviousCardSection/PreviousCardSection';
import style from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={style.container}>
      <div>
        <div className={style.stayCards}>
          <UpcomingStaysCardSection />
          <PreviousCardSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

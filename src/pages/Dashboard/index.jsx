import PreviousCardSection from '../../sections/PreviousCardSection/PreviousCardSection';
import style from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#F5F6F8  ' }}>
      <div className={style.stayCards} >
        <PreviousCardSection />
      </div>
    </div>
  );
};

export default Dashboard;

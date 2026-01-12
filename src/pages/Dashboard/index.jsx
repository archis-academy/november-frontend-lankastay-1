import SearchFilterBarDashboard from '../../Components/SearchFilterBarDashboard/SearchFilterBarDashboard';
import DashboardNavbar from '../../sections/DashboardNavbar/DashboardNavbar';
import UpcomingStaysCardSection from '../../sections/UpcomingStaysCardSection/UpcomingStaysCardSection';
import PreviousCardSection from '../../sections/PreviousCardSection/PreviousCardSection';
import style from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#F5F6F8  ' }}>
     
      <SearchFilterBarDashboard />
      <DashboardNavbar/>
      <SearchFilterBarDashboard />
      <div>
        <UpcomingStaysCardSection />
      <div className={style.stayCards} >
        <PreviousCardSection />
      </div>
    </div>
  );
};

export default Dashboard;

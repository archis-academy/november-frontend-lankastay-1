import SearchFilterBarDashboard from '../../Components/SearchFilterBarDashboard/SearchFilterBarDashboard';
import UpcomingStaysCardSection from '../../sections/UpcomingStaysCardSection/UpcomingStaysCardSection';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#F5F6F8  ' }}>
      <SearchFilterBarDashboard />
      <div>
        <UpcomingStaysCardSection />
      </div>
    </div>
  );
};

export default Dashboard;

import SearchFilterBarDashboard from '../../Components/SearchFilterBarDashboard/SearchFilterBarDashboard';
import DashboardNavbar from '../../sections/DashboardNavbar/DashboardNavbar';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#F5F6F8  ' }}>
     
      <SearchFilterBarDashboard />
      <DashboardNavbar/>
    </div>
  );
};

export default Dashboard;

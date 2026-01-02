import DashboardSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import SearchFilterBarDashboard from '../../Components/SearchFilterBarDashboard/SearchFilterBarDashboard';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', backgroundColor: '#F5F6F8  ' }}>
      <DashboardSidebar />
      <SearchFilterBarDashboard />
    </div>
  );
};

export default Dashboard;

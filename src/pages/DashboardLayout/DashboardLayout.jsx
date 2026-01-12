import DashboardSidebar from '../../Components/dashboardSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';
import style from './DashboardLayout.module.scss';
import DashboardNavbar from '../../sections/DashboardNavbar/DashboardNavbar';

const DashboardLayout = () => (
  <div className={style.dashboardLayoutContainer}>
    
    <DashboardSidebar />

    <div style={{ flex: 1 }}>
                <DashboardNavbar />
      <Outlet />
    </div>
  </div>
);

export default DashboardLayout;

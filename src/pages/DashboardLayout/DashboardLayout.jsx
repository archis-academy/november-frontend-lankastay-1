import DashboardSidebar from '../../Components/dashboardSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';
import style from './DashboardLayout.module.scss';

const DashboardLayout = () => (
  <div className={style.dashboardLayoutContainer}>
    
    <DashboardSidebar />
    <div style={{ flex: 1 }}>
      <Outlet />
    </div>
  </div>
);

export default DashboardLayout;

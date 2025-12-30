import React from 'react';
import DashboardSidebar from '../../Components/dashboardSidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <DashboardSidebar />
    <div style={{ flex: 1 }}>
      <Outlet />
    </div>
  </div>
);

export default DashboardLayout;

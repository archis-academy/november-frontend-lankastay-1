import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../Components/dashboardSidebar/DashboardSidebar';
import style from './DashboardLayout.module.scss';
import DashboardNavbar from '../../sections/DashboardNavbar/DashboardNavbar';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1199px)');
    const handleChange = (event) => {
      if (event.matches) {
        setIsSidebarOpen(false);
      }
    };

    handleChange(mediaQuery);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const handleMenuToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const sidebarClassName = [style.sidebarWrapper, isSidebarOpen ? style.sidebarOpen : null]
    .filter(Boolean)
    .join(' ');
  const backdropClassName = [style.backdrop, isSidebarOpen ? style.backdropOpen : null]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={style.dashboardLayoutContainer}>
      <div className={sidebarClassName} id='dashboard-sidebar'>
        <DashboardSidebar onClose={() => setIsSidebarOpen(false)} />
      </div>
      <div
        className={backdropClassName}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden='true'
      />

      <div className={style.DashboardLayout}>
        <DashboardNavbar onMenuToggle={handleMenuToggle} isMenuOpen={isSidebarOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

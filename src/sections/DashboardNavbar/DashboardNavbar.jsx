import { useEffect, useRef, useState } from 'react';
import style from './DashboardNavbar.module.scss';

const DashboardNavbar = ({ onMenuToggle, isMenuOpen }) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const ringRef = useRef(null);

  const handleNotificationsToggle = () => {
    setIsNotificationsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isNotificationsOpen) {
      return undefined;
    }

    const handleClickOutside = (event) => {
      if (ringRef.current && !ringRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isNotificationsOpen]);

  return (
    <div className={style.dashboardNavbar}>
      <div className={style.dashboardNavbarLeft}>
        <button
          type='button'
          className={style.menuButton}
          onClick={onMenuToggle}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls='dashboard-sidebar'
        >
          <img src='icons/DashboardNavbar/hamburger.svg' alt='' />
        </button>
        <div className={style.titleBlock}>
          <h2>Hello, Hotel Owner</h2>
          <p>Have a nice day</p>
        </div>
      </div>
      <div className={style.dashboardNavbarRight}>
        <div className={style.ring} ref={ringRef}>
          <button
            type='button'
            className={style.ringButton}
            onClick={handleNotificationsToggle}
            aria-expanded={isNotificationsOpen}
            aria-controls='dashboard-notifications'
            aria-haspopup='dialog'
          >
            <img src='icons/DashboardNavbar/ring.svg' alt='Notifications' />
          </button>
          {isNotificationsOpen && (
            <div
              id='dashboard-notifications'
              className={style.notificationsPanel}
              role='dialog'
              aria-label='Notifications'
            >
              <div className={style.notificationsHeader}>
                <p>Notifications</p>
                <ul>
                  <li>
                    Your stay at <b> Blue Origin Fams</b> getting closer
                  </li>
                  <li>Your stay at Ocean Land getting closer</li>
                  <li>Your stay at The Lake Hotel getting closer</li>
                  <li>Your stay at Stark House getting closer</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className={style.userImage}>
          <img src='' alt='' />
        </div>
        <div className={style.userDetails}>
          <h2>Wejaya Raaj</h2>
          <p>Hotel Owner</p>
        </div>
        <div className={style.arrowIcon}>
          <a href=''>
            <img src='icons/DashboardNavbar/arrow.svg' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;

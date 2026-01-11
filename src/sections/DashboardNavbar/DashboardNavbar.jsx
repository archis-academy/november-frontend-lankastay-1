import style from './DashboardNavbar.module.scss';

const DashboardNavbar = () => {
  return (
    <div className={style.dashboardNavbar}>
      <div className={style.dashboardNavbarLeft}>
        <h2>Hello, Hotel Owner</h2>
        <p>Have a nice day</p>
      </div>
      <div className={style.dashboardNavbarRight}>
        <div className={style.ring} >
          <a href=''>
            <img src='icons/DashboardNavbar/ring.svg' alt='' />
          </a>
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

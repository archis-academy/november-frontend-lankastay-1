import { useEffect, useState } from 'react';
import SideBarItem from '../SideBarItem/SideBarItem';
import fetchData from '../../lib/fetchData';
import logo from '../../../public/logo.svg';
import style from './DashboardSidebar.module.scss';

const DashboardSidebar = () => {
  const [sideBar, setSideBar] = useState([]);

  useEffect(() => {
    fetchData('side-bar').then((data) => setSideBar(data));
  }, []);

  return (
    <div className={style.container}>
      <img className={style.logo} src={logo} alt='logo' />
      <div className={style.box} >
        {sideBar.map((data) => (
          <SideBarItem key={data.id} icon={data.icon} label={data.label} id={data.id} />
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;

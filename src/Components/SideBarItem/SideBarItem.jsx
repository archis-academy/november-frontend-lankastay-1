import { NavLink } from 'react-router-dom';
import style from './SideBarItem.module.scss';

const SideBarItem = ({ icon, label, href }) => {
  return (
    <NavLink to={href} className={({ isActive }) => `${style.box} ${isActive ? style.active : ''}`}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </NavLink>
  );
};

export default SideBarItem;

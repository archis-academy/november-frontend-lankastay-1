import { Link } from 'react-router-dom';
import style from './SideBarItem.module.scss';

const SideBarItem = ({ icon, label, href }) => {
  return (
    <Link className={style.box} to={href} >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </Link>
  );
};

export default SideBarItem;

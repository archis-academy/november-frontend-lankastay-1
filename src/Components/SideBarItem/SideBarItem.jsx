import style from './SideBarItem.module.scss';

const SideBarItem = ({ icon, label }) => {
  return (
    <div className={style.box}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default SideBarItem;

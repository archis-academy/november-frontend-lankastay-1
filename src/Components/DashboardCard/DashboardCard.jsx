import style from './DashboardCard.module.scss';

const DashboardCard = () => {
  return (
    <div className={style.container} >
      <div className={style.left} >
        <div className={style.image} >
          <img src='/icons/DashboardCard/doc.svg' alt='' />
        </div>
        <div className={style.title} >
          <h4>Blue Origin Fams</h4>
          <p>June 9, 2023</p>
        </div>
        <div className={style.content} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore.
        </div>
      </div>

      <div className={style.right} >
        <img src="/icons/DashboardCard/edit.svg" alt="" />
        <img src="/icons/DashboardCard/delete.svg" alt="" />
      </div>
    </div>
  );
};

export default DashboardCard;

import style from './UpcomingStaysCard.module.scss';

const UpcomingStaysCard = ({
  date,
  night,
  title,
  address,
  country,
  initPayment,
  totalPayment,
  image,
}) => {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <img src={image} alt='' />
      </div>
      <div className={style.infoContainer}>
        <p className={style.date}>{date}</p>
        <p className={style.night}>{night} </p>
        <h3 className={style.address}> {title}</h3>
        <p className={style.title}> {address}</p>
        <p className={style.country}>{country} </p>
        <p className={style.initPayment}> {initPayment} </p>
        <p className={style.totalPayment}> {totalPayment} </p>
      </div>
    </div>
  );
};

export default UpcomingStaysCard;

import style from './PreviousStayCard.module.scss';
const PreviousStayCard = ({ date, price, title, street, country, image }) => {
  return (
    <div className={style.previousStayCardContainer}>
      <div className={style.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={style.detailsContainer}>
        <div className={style.datePriceContainer}>
          <p className={style.date}>{date}</p>
          <p className={style.price}>{price}</p>
        </div>
        <div className={style.titleLocationContainer}>
          <h3>{title}</h3>
          <p className={style.street}>{street}</p>
          <p className={style.country}> {country}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviousStayCard;

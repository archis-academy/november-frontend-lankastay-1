import React from 'react';
import styles from './ChoiseCard.module.scss';

function ChoiseCard({ image, title, location, price, priceText, isPopularChoise, isSummary }) {

  return (

    <div className={isSummary ? styles.summaryCard : (isPopularChoise ? styles.popularCard : styles.choiseCard)}>
      <div className={styles.choiseTop}>
        <img className={styles.image} src={image} alt={title} />
        {price && (
          <p className={styles.price}>
            {price} <span className={styles.text}>{priceText}</span>
          </p>
        )}
      </div>
      <div className={styles.bottomContent}>
        <p className={styles.title}>{title}</p>
        <small className={styles.location}>{location}</small>
      </div>
    </div>
  );
}

export default ChoiseCard;

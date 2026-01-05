import React from 'react';
import styles from './ChoiseCard.module.scss';
import { Router, useNavigate } from 'react-router-dom';

function ChoiseCard({ image, title, location, price, priceText, isPopularChoise,id }) {
  const navigate = useNavigate();
  return (
    <div className={isPopularChoise ? styles.popularCard : styles.choiseCard} onClick={()=> navigate(`/hotel-detail/${id}`) } >
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

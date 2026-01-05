import React, { useState } from 'react';
import styles from './BookingCriteria.module.scss';

const BookingCriteria = ({ price, nights, setNights }) => {


  const artir = () => {
    setNights(nights + 1);
  };

  const azalt = () => {
    if (nights > 1) {
      setNights(nights - 1);
    }
  };

  const total = price * nights;

  return (
    <div className={styles.card}>
      
      <h3>How long you will stay?</h3>
      <div className={styles.counterRow}>
        <button className={styles.btnMinus} onClick={azalt}>-</button>
        
        <span className={styles.nightText}>
            <b>{nights}</b> Nights
        </span>
        
        <button className={styles.btnPlus} onClick={artir}>+</button>
      </div>

      <h3>Pick a Date</h3>
      <div className={styles.dateRow}>
        <input type="text" defaultValue="20 Jan - 22 Jan" readOnly />
      </div>

      <div className={styles.priceInfo}>
        <p className={styles.grayLabel}>
           You will pay: <span className={styles.money}>${total} USD</span>
        </p>

        <p className={styles.smallText}>
           per: <span className={styles.nightCount}>{nights} Nights</span>
        </p>
      </div>

    </div>
  );
};

export default BookingCriteria;
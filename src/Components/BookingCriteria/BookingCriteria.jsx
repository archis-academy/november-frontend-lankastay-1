import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 
import styles from './BookingCriteria.module.scss';

const BookingCriteria = ({ price, nights, setNights }) => {
 
  const [startDate, setStartDate] = useState(new Date("2026-01-20"));
  const [endDate, setEndDate] = useState(new Date("2026-01-22"));


  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
    }
  };

  const artir = () => {
    setNights(nights + 1);
    if (endDate) {
      const newEnd = new Date(endDate);
      newEnd.setDate(newEnd.getDate() + 1);
      setEndDate(newEnd);
    }
  };

  const azalt = () => {
    if (nights > 1) {
      setNights(nights - 1);
      const newEnd = new Date(endDate);
      newEnd.setDate(newEnd.getDate() - 1);
      setEndDate(newEnd);
    }
  };

  const total = price * nights;

  return (
    <div className={styles.card}>
      <h3>How long you will stay?</h3>
      <div className={styles.counterRow}>
        <button className={styles.btnMinus} onClick={azalt} type="button">
          -
        </button>

        <span className={styles.nightText}>
          <b>{nights}</b> Nights
        </span>

        <button className={styles.btnPlus} onClick={artir} type="button">
          +
        </button>
      </div>

      <h3>Pick a Date</h3>
      <div className={styles.dateRow}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          dateFormat="dd MMM" 
          className={styles.dateInput} 
          placeholderText="Click to select dates"
        />
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
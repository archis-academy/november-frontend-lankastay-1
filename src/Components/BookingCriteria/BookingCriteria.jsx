import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './BookingCriteria.module.scss';

const BookingCriteria = ({ price, nights, setNights }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

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

  const total = price * nights;
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={styles.dateWrapper} onClick={onClick} ref={ref} style={{ cursor: 'pointer' }}>
      <div className={styles.iconBox}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>
      <input
        className={styles.dateInput}
        value={value}
        readOnly
        placeholder="Select a date"
        style={{ pointerEvents: 'none' }} />
    </div>
  ));

  return (
    <div className={styles.card}>
      <h3>How long you will stay?</h3>
      <div className={styles.counterRow}>
        <button className={styles.btnMinus} onClick={() => nights > 1 && setNights(nights - 1)} type="button">-</button>
        <span className={styles.nightText}>{nights} Nights</span>
        <button className={styles.btnPlus} onClick={() => setNights(nights + 1)} type="button">+</button>
      </div>

      <h3>Pick a Date</h3>

      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        minDate={new Date()}
        dateFormat="dd MMM"
        customInput={<CustomInput />}
        wrapperClassName={styles.datePickerFullWidth}
      />

      <div className={styles.priceInfo}>
        <p className={styles.grayLabel}>You will pay: <span className={styles.money}>${total} USD</span></p>
        <p className={styles.smallText}>per <span className={styles.nightCount}>{nights} Nights</span></p>
      </div>
    </div>
  );
};

export default BookingCriteria;
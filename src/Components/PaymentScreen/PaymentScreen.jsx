import React, { useState, forwardRef, useImperativeHandle } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from './PaymentScreen.module.scss';

const PaymentScreen = forwardRef(({ hotelDetail, nights }, ref) => {
  const [formData, setFormData] = useState({
    bank: '',
    expDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});

  useImperativeHandle(ref, () => ({
    validate: () => {
      let tempErrors = {};
      if (!formData.bank) tempErrors.bank = "Bank selection is required";
      if (!formData.expDate) tempErrors.expDate = "Exp date is required";
      if (!formData.cvv) tempErrors.cvv = "CVV is required";

      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    }
  }));

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: null });
    }
  };

  return (
    <div className={styles['payment-screen']}>
      <h1 className={styles['payment-screen__title']}>Payment</h1>
      <p className={styles['payment-screen__subtitle']}>Kindly follow the instructions below</p>

      <div className={styles['payment-screen__content']}>
       
      <div className={styles['payment-screen__summary']}>
  <h3 className={styles['payment-screen__section-title']}>Transfer LankaStay:</h3>
  <p className={styles['payment-screen__description']}>
    {nights} Nights at {hotelDetail?.title},
    <br />
    {hotelDetail?.subtitle}
  </p>
<div className={styles['payment-screen__divider']}></div>
  
  <div className={styles['payment-screen__price-row']}>
    <span className={styles['payment-screen__price-label']}>Total: </span>
    <span className={styles['payment-screen__price-value']}>
      ${nights * (hotelDetail?.pricePerNight || 0)} USD
    </span>
  </div>

  <div className={styles['payment-screen__price-row']}>
    <span className={styles['payment-screen__price-label']}>Initial Payment: </span>
    <span className={styles['payment-screen__price-value']}>
      ${hotelDetail?.pricePerNight} 
    </span>
  </div>
</div>
        

        <div className={styles['payment-screen__divider']}></div>

        <form className={styles['payment-screen__form']} onSubmit={(e) => e.preventDefault()}>
          <div className={styles['payment-screen__input-group']}>
            <label htmlFor='bank'>Bank</label>
            <div className={styles.inputDiv}>
              <input
                id='bank'
                placeholder='Select Bank'
                value={formData.bank}
                onChange={handleInputChange}
              />
            </div>
            {errors.bank && <span className={styles.errorText}>{errors.bank}</span>}
          </div>

          <div className={styles['payment-screen__input-group']}>
            <label htmlFor='expDate'>Exp Date</label>
            <div className={styles.inputDiv}>
              <input
                id='expDate'
                placeholder='Validation date'
                value={formData.expDate}
                onChange={handleInputChange}
              />
            </div>
            {errors.expDate && <span className={styles.errorText}>{errors.expDate}</span>}
          </div>

          <div className={styles['payment-screen__input-group']}>
            <label htmlFor='cvv'>CVV</label>
            <div className={styles.inputDiv}>
              <input
                id='cvv'
                placeholder='Beside the card'
                value={formData.cvv}
                onChange={handleInputChange}
              />
            </div>
            {errors.cvv && <span className={styles.errorText}>{errors.cvv}</span>}
          </div>
        </form>
      </div>
    </div>
  );
});

export default PaymentScreen;
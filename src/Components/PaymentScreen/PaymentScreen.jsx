import React from 'react';
import styles from './PaymentScreen.module.scss';
import Input from '../inputComponent/Input';

const PaymentScreen = ({ hotelDetail, nights }) => {
  return (
    <div className={styles['payment-screen']}>
      <h1 className={styles['payment-screen__title']}>Payment</h1>
      <p className={styles['payment-screen__subtitle']}>Kindly follow the instructions below</p>

      <div className={styles['payment-screen__content']}>
        <div className={styles['payment-screen__summary']}>
          <h3>Transfer LankaStay:</h3>
          <p className={styles['payment-screen__description']}>
            {nights} Nights at {hotelDetail?.title} ,
            <br />
            {hotelDetail?.subtitle}
          </p>

          <p className={styles['payment-screen__price']}>
            <span className={styles['payment-screen__price-label']}>Total:</span>
            <span className={styles['payment-screen__price-value']}>
              ${nights * hotelDetail?.pricePerNight} USD
            </span>
          </p>

          <p className={styles['payment-screen__price']}>
            <span className={styles['payment-screen__price-label']}>Initial Payment:</span>
            <span className={styles['payment-screen__price-value']}>
              ${hotelDetail?.pricePerNight} USD
            </span>
          </p>
        </div>

       
        <div className={styles['payment-screen__divider']}></div>

        <form className={styles['payment-screen__form']}>
          <div className={styles['payment-screen__input-group']}>
            <label htmlFor='bank'>Bank</label>
            <Input id='bank' placeholder='Select Bank' />
          </div>

          <div className={styles['payment-screen__input-group']}>
            <label htmlFor='expDate'>Exp Date</label>
            <Input id='expDate' placeholder='Validation date' />
          </div>

          <div className={styles['payment-screen__input-group']}>
            <label htmlFor='cvv'>CVV</label>
            <Input id='cvv' placeholder='Beside the card' />
          </div>
        </form>
      </div>
    </div>

  );
};

export default PaymentScreen;
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
            <span className={styles['payment-screen__price-value']}> {hotelDetail?.currency}{nights * hotelDetail?.pricePerNight} </span>
          </p>

          <p className={styles['payment-screen__price']}>
            <span className={styles['payment-screen__price-label']}>Initial Payment:</span>
            <span className={styles['payment-screen__price-value']}>
              {hotelDetail?.currency}{hotelDetail?.pricePerNight}
            </span>
          </p>
        </div>

        <form className={styles['payment-screen__form']}>
          <div className={styles['payment-screen__input-group']}>
            <label htmlFor='bank'>Bank</label>
            <Input id='bank' placeholder='Selected Bank' />
          </div>

          <div className={styles['payment-screen__input-group']}>
            <label htmlFor='expDate'>Exp Date</label>
            <Input id='expDate' placeholder='Validation Date' />
          </div>

          <div className={styles['payment-screen__input-group']}>
            <label htmlFor='cvv'>CVV</label>
            <Input id='cvv' type='password' placeholder='Beside the card' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;

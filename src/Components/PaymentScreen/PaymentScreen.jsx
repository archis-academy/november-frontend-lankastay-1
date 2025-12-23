import React from 'react';
import styles from './PaymentScreen.module.scss';
import Button from '../Button/Button';
import Input from '../inputComponent/Input';

const PaymentScreen = () => {
  return (
    <div className={styles['payment-screen']}>
      <h1 className={styles['payment-screen__title']}>Payment</h1>
      <p className={styles['payment-screen__subtitle']}>
        Kindly follow the instructions below
      </p>

      <div className={styles['payment-screen__content']}>
        <div className={styles['payment-screen__summary']}>
          <h3>Transfer LankaStay:</h3>

          <p className={styles['payment-screen__description']}>
            2 Nights at Blue Origin Farms,
            <br />
            Galle, Sri Lanka
          </p>

          <p className={styles['payment-screen__price']}>
            <strong>Total:</strong> $400 USD
          </p>

          <p className={styles['payment-screen__price']}>
            <strong>Initial Payment:</strong> $200
          </p>
        </div>

        <form className={styles['payment-screen__form']}>
          <div className={styles['payment-screen__input-group']}>
            <label>Bank</label>
            <Input placeholder="Selected Bank" />
          </div>

          <div className={styles['payment-screen__input-group']}>
            <label>Exp Date</label>
            <Input placeholder="Validation Date" />
          </div>

          <div className={styles['payment-screen__input-group']}>
            <label>CVV</label>
            <Input type="password" placeholder="Beside the card" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default PaymentScreen;
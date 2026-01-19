import React from 'react';
import styles from './PaymentSuccess.module.scss';
import Button from '../Button/Button';

const PaymentSuccess = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Yay! Payment Completed</h2>

      <img
        src='/images/PaymentSuccess/payment.png'
        alt='Payment Success'
        className={styles.image}
      />

      <p className={styles.description}>
        Please check your email & phone message. <br />
        We have sent all the information.
      </p>

      
    </div>
  );
};

export default PaymentSuccess;

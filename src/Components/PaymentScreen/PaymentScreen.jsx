import React from 'react';
import './PaymentScreen.module.scss';
import Button from '../Button/Button';

const PaymentScreen = () => {
  return (
    <div className="payment-screen">
      <h1 className="payment-screen__title">Payment</h1>
      <p className="payment-screen__subtitle">
        Kindly follow the instructions below
      </p>

      <div className="payment-screen__content">
    
        <div className="payment-screen__summary">
          <h3>Transfer LankaStay:</h3>

          <p className="payment-screen__description">
            2 Nights at Blue Origin Farms,
            <br />
            Galle, Sri Lanka
          </p>

          <p className="payment-screen__price">
            <strong>Total:</strong> $400 USD
          </p>

          <p className="payment-screen__price">
            <strong>Initial Payment:</strong> $200
          </p>
        </div>

        <form className="payment-screen__form">
          <input type="text" placeholder="Bank" />
          <input type="text" placeholder="Exp Date" />
          <input type="password" placeholder="CVV" />

         <div className="payment-screen__button-wrapper">
          <Button text="Pay Now"  />
        </div>

          <button type="button" className="payment-screen__cancel-btn">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
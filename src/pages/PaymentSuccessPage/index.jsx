import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import StepIndicator from '../../Components/StepIndicator/StepIndicator';
import PaymentSuccess from '../../Components/PaymentSuccess/PaymentSuccess';
import Footer from '../../Components/Footer/Footer';


const PaymentSuccessPage = () => {
 const [step, setStep] = useState(1);

  return (
    <>
      <Header isShort={true} />

      <div className={styles.stepWrapper}>
        <StepIndicator currentStep={step} />
      </div>

      {step === 1 && <p>Booking</p>}

      {step === 2 && (
        <PaymentScreen onSuccess={() => setStep(3)} />
      )}

      {step === 3 && <PaymentSuccessPage />}

      <Footer />
    </>
  );
};

export default PaymentSuccessPage;
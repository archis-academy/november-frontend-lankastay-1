import React, { useEffect, useState } from 'react';
import StepIndicator from '../../Components/StepIndicator/StepIndicator';
import PaymentScreen from '../../Components/PaymentScreen/PaymentScreen';
import Footer from '../../Components/Footer/Footer';
import styles from './PaymentPage.module.scss';
import Header from '../../Components/Header/Header';
import fetchData from '../../lib/fetchData';
import { useParams } from 'react-router-dom';

const PaymentLayout = () => {
  const [step, setStep] = useState(1);
  const { id } = useParams();

  const [hotelDetail, setHotelDetail] = useState([]);

  useEffect(() => {
    console.log("id", id);
    fetchData('hotelDetail').then((data) =>
      setHotelDetail(data?.find((hotel) => hotel?.id == id))
    );
  }, [id]);

  console.log('otel-detay', hotelDetail);

  return (
    <>
      <Header isShort={true} />

      <div className={styles.stepWrapper}>
        <StepIndicator currentStep={step} />
      </div>

      {step === 1 && <p>Booking</p>}

      {step === 2 && <PaymentScreen />}

      {step === 3 && <p>Success</p>}

      <Footer />
    </>
  );
};

export default PaymentLayout;

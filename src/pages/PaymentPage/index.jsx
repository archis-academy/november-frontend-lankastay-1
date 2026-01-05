import React, { useEffect, useState } from 'react';
import StepIndicator from '../../Components/StepIndicator/StepIndicator';
import PaymentScreen from '../../Components/PaymentScreen/PaymentScreen';
import Footer from '../../Components/Footer/Footer';
import styles from './PaymentPage.module.scss';
import Header from '../../Components/Header/Header';
import fetchData from '../../lib/fetchData';
import { useParams } from 'react-router-dom';
import BookingCriteria from '../../Components/BookingCriteria/BookingCriteria';
import LocationSummary from '../../Components/LocationSummary/LocationSummary';

const PaymentLayout = () => {
  const [step, setStep] = useState(1);
  const { id } = useParams();

  const [hotelDetail, setHotelDetail] = useState([]);
  const [nights, setNights] = useState(1);

  useEffect(() => {
    console.log('id', id);
    fetchData('hotelDetail').then((data) => setHotelDetail(data?.find((hotel) => hotel?.id == id)));
  }, [id]);

  return (
    <>
      <Header isShort={true} />

      <div className={styles.stepWrapper}>
        <StepIndicator currentStep={step} />
      </div>

      {step === 1 && (
        <div style={{ display: 'flex' }}>
          <LocationSummary
            image={hotelDetail.images?.[0]}
            locationName={hotelDetail.title}
            location={hotelDetail.subtitle}
          />

          <BookingCriteria
            price={hotelDetail?.pricePerNight || 0}
            nights={nights}
            setNights={setNights}
          />

          <button onClick={() => setStep(2)}>Book Now</button>
        </div>
      )}

      {step === 2 && <PaymentScreen />}

      {step === 3 && <p>Success</p>}

      <Footer />
    </>
  );
};

export default PaymentLayout;

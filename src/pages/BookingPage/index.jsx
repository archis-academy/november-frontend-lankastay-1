import React, { useEffect, useState } from 'react';
import StepIndicator from '../../Components/StepIndicator/StepIndicator';
import PaymentScreen from '../../Components/PaymentScreen/PaymentScreen';
import Footer from '../../Components/Footer/Footer';
import styles from './BookingPage.module.scss';
import Header from '../../Components/Header/Header';
import fetchData from '../../lib/fetchData';
import { useParams } from 'react-router-dom';
import BookingCriteria from '../../Components/BookingCriteria/BookingCriteria';
import LocationSummary from '../../Components/LocationSummary/LocationSummary';
import PaymentSuccess from '../../Components/PaymentSuccess/PaymentSuccess';
import { Link } from 'react-router-dom';

const PaymentLayout = () => {
  const [step, setStep] = useState(1);
  const { id } = useParams();

  const [hotelDetail, setHotelDetail] = useState([]);
  const [nights, setNights] = useState(1);

  useEffect(() => {
    console.log('id', id);
    fetchData('hotelDetail').then((data) => {
      setHotelDetail(
        data?.find((hotel) => hotel?.id == id)
      );
    });
  }, [id]);

  return (
    <>
      <Header isShort={false} />

      <div className={styles.stepWrapper}>
        <StepIndicator currentStep={step} />
      </div>

      {step === 1 && (
        <div style={{ display: 'flex' }}>
          <LocationSummary
            image={hotelDetail?.images?.[0]}
            locationName={hotelDetail?.title}
            location={hotelDetail?.subtitle}
          />

          <BookingCriteria
            price={hotelDetail?.pricePerNight || 0}
            nights={nights}
            setNights={setNights}
          />

          <button onClick={() => setStep(2)}>
            Book Now
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <PaymentScreen />
          <button onClick={() => setStep(3)}>
            Pay Now
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <PaymentSuccess />
          <Link to="/Dashboard">
            Go to Dashboard
          </Link>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PaymentLayout;
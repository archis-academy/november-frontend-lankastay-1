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
import Button from '../../Components/Button/Button';

const PaymentLayout = () => {
  const [step, setStep] = useState(1);
  const { id } = useParams();

  const [hotelDetail, setHotelDetail] = useState([]);
  const [nights, setNights] = useState(1);

  useEffect(() => {
    fetchData('hotelDetail').then((data) => {
      setHotelDetail(data?.find((hotel) => hotel?.id == id));
    });
  }, [id]);

  return (
    <>
      <Header isShort={true} />

      <div className={styles.stepWrapper}>
        <StepIndicator currentStep={step} />
      </div>

      {step === 1 && (
        <div className='container'>
          <h1 className={styles.stepTitle}>Booking Information</h1>
          <h5 className={styles.stepSubtitle}>Please fill up the blank fields below</h5>

          <div className={styles.stepContainer }>
            <LocationSummary
              image={hotelDetail?.images?.[0]}
              locationName={hotelDetail?.title}
              location={hotelDetail?.subtitle}
            />

            <div className={styles.stepContainerDivider} ></div>

            <BookingCriteria
              price={hotelDetail?.pricePerNight || 0}
              nights={nights}
              setNights={setNights}
            />
          </div>
  <div className={styles.buttonContainer }>
          <Button text="Book Now" onClick={()=> setStep(2)} />
          <Button text="Cancel" className="" /></div>
        </div>
      )}

      {step === 2 && (
        <div>
          <PaymentScreen />
          <button onClick={() => setStep(3)}>Pay Now</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <PaymentSuccess />
          <Link to='/Dashboard'>Go to Dashboard</Link>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PaymentLayout;

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import StepIndicator from '../../Components/StepIndicator/StepIndicator';
import PaymentScreen from '../../Components/PaymentScreen/PaymentScreen';
import BookingCriteria from '../../Components/BookingCriteria/BookingCriteria';
import LocationSummary from '../../Components/LocationSummary/LocationSummary';
import PaymentSuccess from '../../Components/PaymentSuccess/PaymentSuccess';
import Button from '../../Components/Button/Button';
import fetchData from '../../lib/fetchData';
import styles from './BookingPage.module.scss';

const PaymentLayout = () => {
  const [step, setStep] = useState(1);
  const { id } = useParams();

  const [hotelDetail, setHotelDetail] = useState(null);
  const [nights, setNights] = useState(1);

  useEffect(() => {
    fetchData('hotelDetail').then((data) => {
      setHotelDetail(data?.find((hotel) => String(hotel?.id) === String(id)));
    });
  }, [id]);

 
  if (!hotelDetail && step !== 3) return <div className="container">Loading...</div>;

  return (
    <>
      <Header isShort={true} />

      <div className={styles.stepWrapper}>
        <StepIndicator currentStep={step} />
      </div>

      <div className="container">
   
        {step === 1 && (
          <div>
            <h1 className={styles.stepTitle}>Booking Information</h1>
            <h5 className={styles.stepSubtitle}>Please fill up the blank fields below</h5>

            <div className={styles.stepContainer}>
              <LocationSummary
                image={hotelDetail?.images?.[0]}
                locationName={hotelDetail?.title}
                location={hotelDetail?.subtitle}
              />
              <div className={styles.stepContainerDivider}></div>
              <BookingCriteria
                price={hotelDetail?.pricePerNight || 0}
                nights={nights}
                setNights={setNights}
              />
            </div>
            <div className={styles.buttonContainer}>
          
              <Button text="Book Now" onClick={() => setStep(2)} className={styles.primaryButton} />
              
              <Link to={`/hotel-detail/${id}`} style={{ textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button text="Cancel" className={styles.secondaryButton} />
              </Link>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <PaymentScreen hotelDetail={hotelDetail} nights={nights} />
            <div className={styles.buttonContainer}>
              <Button text="Pay Now" onClick={() => setStep(3)} className={styles.primaryButton} />
              <Button text="Cancel" onClick={() => setStep(1)} className={styles.secondaryButton} />
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className={styles.successWrapper}>
            <PaymentSuccess />
            <div className={styles.buttonContainer}>
              <Link to="/Dashboard" style={{ textDecoration: 'none', width: '100%', maxWidth: '300px' }}>
                <button className={styles.dashboardButton}>
                  Go to dashboard
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default PaymentLayout;
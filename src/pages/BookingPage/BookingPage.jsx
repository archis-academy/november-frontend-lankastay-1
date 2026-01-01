import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingCriteria from '../../Components/BookingCriteria/BookingCriteria';
import fetchData from '../../lib/fetchData';
import styles from './BookingPage.module.scss';

const BookingPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetchData('hotelDetail').then((data) => {
      const foundHotel = data.find((item) => item.id == id);
      setHotel(foundHotel);
    });
  }, [id]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        
           <BookingCriteria price={hotel?.pricePerNight || 0} />
       
      </div>
    </div>
  );
};

export default BookingPage;
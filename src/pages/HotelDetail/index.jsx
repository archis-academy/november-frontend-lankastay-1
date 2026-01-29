import React, { useState, useEffect } from 'react';
import fetchData from '../../lib/fetchData';
import { useParams } from 'react-router-dom';
import ProductDescription from '../../Components/ProductDescription/ProductDescription';
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb';
import Amentiti from '../../sections/AmentitiSection/amentiti';
import Treasure from '../../sections/TreasureSection/Treasure';
import Header from '../../Components/Header/Header';
import styles from './HotelDetail.module.scss';
import ImageGrid from '../../Components/ProductPhotoGrid/ProductPhotoGrid';
import BookingCard from '../../Components/Booking/bookingCard';
import Housing from '../../Components/Housing/Housing';
import Housing from '<div styleName={} />
<div styleName={}></div>Components/Housing/TreasureChoose.scss';

const HotelDetail = () => {
  const [hotelDetails, setHotelDetails] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const { id } = useParams();

  const selectedHotel = hotelDetails?.find((hotel) => hotel?.id == id);

  useEffect(() => {
    fetchData('hotelDetail').then((data) => setHotelDetails(data));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAmenities(selectedHotel?.amenities);
  }, [selectedHotel]);

  return (
    <div className='container'>
      <Header isShort={false} />

      <div className={styles.pageWrapper}>
        <div className={styles.titleSection}>
          <h1 className={styles.mainTitle}>{selectedHotel?.title}</h1>
          <span className={styles.subTitle}>{selectedHotel?.subtitle}</span>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.leftArea}>
            <Breadcrumb currentPage={selectedHotel?.title} />
            <ImageGrid images={selectedHotel?.images} />

            <div style={{display:"flex" , margin:"40px 0 20px 0"}}>
              <ProductDescription
                title={selectedHotel?.aboutTitle}
                desc={selectedHotel?.description}
              />

              <BookingCard price={selectedHotel?.pricePerNight}  currency={selectedHotel?.currency} id={id} />
            </div>

            {amenities?.length > 0 && <Amentiti data={amenities} />}
          </div>

          <div className={styles.rightArea}></div>
        </div>
        {hotelDetails.length > 0 && <Treasure data={hotelDetails} currentId={id} />}
      </div>
    </div>
  );
};
export default HotelDetail;

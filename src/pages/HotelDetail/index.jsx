import React, { useState, useEffect } from 'react';
import fetchData from '../../lib/fetchData';
import { useParams } from 'react-router-dom';
import ProductDescription from '../../Components/ProductDescription/ProductDescription';
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb';
import Amentiti from '../../sections/AmentitiSection/amentiti';
import Treasure from '../../sections/TreasureSection/Treasure';

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
    <div>
      <Breadcrumb currentPage={selectedHotel?.title} />
      <ProductDescription title={selectedHotel?.aboutTitle} desc={selectedHotel?.description} />
      {amenities?.length > 0 && <Amentiti data={amenities} />}
      {hotelDetails.length > 0 && (
         <Treasure data={hotelDetails} currentId={id} />
      )}
    </div>
  );
};
export default HotelDetail;

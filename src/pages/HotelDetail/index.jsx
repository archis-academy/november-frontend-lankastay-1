import React, { useEffect, useState } from 'react';
import ProductPhotoGrid from '../../Components/ProductPhotoGrid/ProductPhotoGrid';
import { useParams } from 'react-router-dom';
import fetchData from '../../lib/fetchData';


export const Details = () => {
  const { id } = useParams();
  const [hotelDetail, setHotelDetail] = useState([]);

  useEffect(() => {
    fetchData('hotelDetails').then((data) => setHotelDetail(data));
  }, []);
  console.log("hotel",hotelDetail);
  const selectedHotel = hotelDetail.find((hotel) => hotel.id === parseInt(id));

  console.log("selectedHotel", selectedHotel);

  return (
    <div>
      <ProductPhotoGrid images={selectedHotel?.images} />
    </div>
  );
};
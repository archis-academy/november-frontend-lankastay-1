import React, { useState, useEffect } from 'react'
import fetchData from '../../lib/fetchData';
import { useParams } from 'react-router-dom';
import ProductDescription from '../../Components/ProductDescription/ProductDescription';
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb';

const HotelDetail = () => {
      const [hotelDetails, setHotelDetails] = useState([]);
      const { id } = useParams();

      const selectedHotel = hotelDetails?.find((hotel) => hotel?.id == id);

  useEffect(() => {
    fetchData('hotelDetails').then((data) => setHotelDetails(data));
   
  }, []);

  
    return (
        <div>

           <p>otel id : {selectedHotel?.id} </p>
           <Breadcrumb currentPage={selectedHotel?.title}  />

            <p>otel id : {selectedHotel?.id} </p>
            <ProductDescription title={selectedHotel?.aboutTitle} desc={selectedHotel?.description} />

        </div>
    );
};
export default HotelDetail;
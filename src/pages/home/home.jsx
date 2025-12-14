import React , { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../sections/HeroSection/heroSection'
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb';
import ProductDescription from '../../Components/ProductDescription/ProductDescription';
import Amentiti from '../../sections/mock/amentiti';
import fetchData from '../../lib/fetchData';

export const Home = () => {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    fetchData('hotelDetails').then((data) => {
      setAmenities(data[0]?.amenities);
    });
  }, []);

  return (
    <div>
      
      <Header isShort={true} />
      <Breadcrumb currentPage="Hotel Details"/>
      <ProductDescription />
      {amenities?.length > 0 && <Amentiti data={amenities} />}
      <HeroSection />
      <SearchFilterBar />
      <Footer />
      
    </div>
  );
};

import React , { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../sections/HeroSection/heroSection';
import MostPickedSection from '../../sections/mostPickedSection';
import ChoiseSection from '../../sections/PopularChoiseSection/ChoiseSection';


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
      <MostPickedSection />
      <ChoiseSection />
      <ContactUs />
      <Footer />
      
    </div>
  );
};
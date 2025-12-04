import React from 'react';
import HeroSection from '../../sections/HeroSection/heroSection';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import Footer from '../../Components/footer/Footer';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchFilterBar />
      <Footer />
    </div>
  );
};

import React from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../sections/HeroSection/heroSection';

export const Home = () => {
  return (
    <div>
      <Header isShort={true} />
      <HeroSection />
      <SearchFilterBar />
      <Footer />
    </div>
  );
};

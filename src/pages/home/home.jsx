import React from 'react';
import HeroSection from '../../sections/HeroSection/heroSection';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import Footer from '../../Components/footer/Footer';
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb';

export const Home = () => {
  return (
    <div>
      <Breadcrumb />
      <HeroSection />
      <SearchFilterBar />
      <Footer />
    </div>
  );
};

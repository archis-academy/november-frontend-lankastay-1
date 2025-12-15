import React from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../sections/HeroSection/heroSection';
import MostPickedSection from '../../sections/mostPickedSection';

export const Home = () => {
  return (
    <div>
      <Header isShort={true} />
      <HeroSection />
      <SearchFilterBar />
      <MostPickedSection />
      <Footer />
    </div>
  );
};

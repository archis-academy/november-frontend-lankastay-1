import React from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../sections/HeroSection/heroSection';
import MostPickedSection from '../../sections/mostPickedSection';
import ChoiseSection from '../../sections/PopularChoiseSection/ChoiseSection';



export const Home = () => {
  return (
    <div>
      <Header isShort={false} />
      <HeroSection />
      <SearchFilterBar />
      <MostPickedSection />
      <ChoiseSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

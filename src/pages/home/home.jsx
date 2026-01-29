import React from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../sections/HeroSection/heroSection';
import MostPickedSection from '../../sections/MostPickedSection';
import ChoiseSection from '../../sections/PopularChoiseSection/ChoiseSection';
import FAQ from '../../sections/FAQSection/FAQ.jsx';

export const Home = () => {
  return (
    <div>
      <div className='container'>
        <Header isShort={false} />
        <HeroSection />
        <SearchFilterBar />
        <MostPickedSection />
        <ChoiseSection />
        <ContactUs />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

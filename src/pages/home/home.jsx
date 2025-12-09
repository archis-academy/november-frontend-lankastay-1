import React from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Footer from '../../Components/footer/Footer';


export const Home = () => {
  return (
    <div>
      <Header isShort={true} />
      <SearchFilterBar />
      <ContactUs />
      <Footer />
    </div>
  );
};

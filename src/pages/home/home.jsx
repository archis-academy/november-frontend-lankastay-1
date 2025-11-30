import React from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import Footer from '../../Components/footer/Footer';

export const Home = () => {
  return (
    <div>
      <Header />
      <SearchFilterBar />
      <Footer />
    </div>
  );
};

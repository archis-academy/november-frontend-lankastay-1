import React from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import Footer from '../../Components/footer/Footer';
import Success from '../../Components/AccountCreateSuccessfull/Success';

export const Home = () => {
  return (
    <div>
      <Header isShort={true} />
      <SearchFilterBar />
      <Footer />
      <Success/>
    </div>
  );
};

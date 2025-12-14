import React from 'react';
import Header from '../../Components/Header/Header';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import Footer from '../../Components/footer/Footer';
import HeroSection from '../../sections/HeroSection/heroSection'
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb';
import ProductDescription from '../../Components/ProductDescription/ProductDescription';

export const Home = () => {
  return (
    <div>
      <Breadcrumb currentPage="Hotel Details"/>
      <ProductDescription />
      <Header isShort={true} />
      <HeroSection />
      <SearchFilterBar />
      <Footer />
    </div>
  );
};

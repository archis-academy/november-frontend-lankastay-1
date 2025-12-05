import React from 'react';
import HeroSection from '../../sections/HeroSection/heroSection';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import Footer from '../../Components/footer/Footer';
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb';
import ProductDescription from '../../Components/ProductDescription/ProductDescription';

export const Home = () => {
  return (
    <div>
      <Breadcrumb />
      <ProductDescription />
      <HeroSection />
      <SearchFilterBar />
      <Footer />
    </div>
  );
};

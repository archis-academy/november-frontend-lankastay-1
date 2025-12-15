import React from 'react';
import { useEffect, useState } from 'react';
import fetchData from '../../lib/fetchData.js';
import ChoiseCard from '../../Components/ChoiseCard/ChoiseCard';
import QuickStats from '../../Components/quick-stats-component/quick_stats';
import Login from '../../Components/Login/Login.jsx';
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb.jsx';
import Header from '../../Components/Header/Header.jsx';
import Amentiti from '../../sections/mock/amentiti.jsx';

const Playground = () => {
  const [quickIcons, setQuickIcons] = useState([]);
  const [cards, setCards] = useState([]);
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    fetchData('quickStats').then((data) => setQuickIcons(data));
    fetchData('choise-cards').then((data) => setCards(data));
    fetchData('hotelDetails').then((data) =>{
      setAmenities(data[0]?.amenities);
    });
  }, []);

  return (
    <div>
      <Header />
       <Breadcrumb />
      {cards.map((card) => (
        <ChoiseCard
          title={card.title}
          location={card.location}
          price={card.price}
          image={card.image}
          key={card.id}
          priceText={card.priceText}
          isPopularChoise={card.isPopularChoise}
        />
        
      ))}

      <div style={{ display: 'flex' }}>
        {quickIcons.map((item) => {
          return (
            <div key={item.id}>
              <QuickStats number={item.number} content={item.content} iconUrl={item.iconUrl} />
            </div>
          );
        })}
      </div>
        
        {amenities?.length > 0 && <Amentiti data={amenities} />}

        <Login/>

      <div></div>
    </div>
  );
};

export default Playground;

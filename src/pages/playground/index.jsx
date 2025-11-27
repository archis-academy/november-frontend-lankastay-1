import React from 'react';
import Footer from '../../Components/footer/Footer';
import { useEffect, useState } from 'react';
import fetchData from '../../lib/fetchData.js';
import ChoiseCard from '../../Components/ChoiseCard/ChoiseCard';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';
import QuickStats from "../../Components/quick-stats-component/quick_stats"

const Playground = () => {
  const [quickIcons, setQuickIcons] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData('quickStats').then((data) => setQuickIcons(data));
    fetchData('choise-cards').then((data) => setCards(data));
  }, []);

  return (
    <div>
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

      <SearchFilterBar />
      <div style={{ display: 'flex' }}>
        {quickIcons.map((item) => {
          return (
            <div key={item.id}>
              <QuickStats number={item.number} content={item.content} iconUrl={item.iconUrl} />
            </div>
          );
        })}
      </div>
   
    </div>
  );
};

export default Playground;

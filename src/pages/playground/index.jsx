import React from 'react';
import Footer from '../../Components/footer/Footer';
import { useEffect, useState } from 'react';
import fetchData from '../../lib/fetchData.js';
import ChoiseCard from '../../Components/ChoiseCard/ChoiseCard';
import SearchFilterBar from '../../Components/SearchFilterBar/SearchFilterBar';

const Playground = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
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
      <Footer />
    </div>
  );
};

export default Playground;

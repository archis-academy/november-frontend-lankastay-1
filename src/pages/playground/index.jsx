import React from 'react';
import Footer from '../../footer/Footer';
import { useEffect, useState } from 'react';
import fetchData from '@src/lib/fetchData';
import ChoiseCard from '../../Components/ChoiseCard/ChoiseCard';

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
      
      <Footer />
    </div>
  );
};

export default Playground;

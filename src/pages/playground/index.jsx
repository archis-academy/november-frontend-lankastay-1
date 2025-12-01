import React from 'react';
import { useEffect, useState } from 'react';
import fetchData from '../../lib/fetchData.js';
import ChoiseCard from '../../Components/ChoiseCard/ChoiseCard';
import QuickStats from '../../Components/quick-stats-component/quick_stats';
import Input from '../../Components/inputComponent/input.jsx';
import { data } from 'react-router-dom';

const Playground = () => {
  const [quickIcons, setQuickIcons] = useState([]);
  const [cards, setCards] = useState([]);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    fetchData('quickStats').then((data) => setQuickIcons(data));
    fetchData('choise-cards').then((data) => setCards(data));
    fetchData('createAccountUser').then((data) => setInputs(data));
  }, []);

  useEffect(() => {}, []);

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

      <div style={{ display: 'flex' }}>
        {quickIcons.map((item) => {
          return (
            <div key={item.id}>
              <QuickStats number={item.number} content={item.content} iconUrl={item.iconUrl} />
            </div>
          );
        })}
      </div>

      <form>
        {inputs.map((item) => {
          return (
            <div>
              <Input
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                key={item.id}
              />
            </div>
          );
        })}
      </form>

      <div></div>
    </div>
  );
};

export default Playground;

import React from 'react';
import fetchData from '@src/lib/fetchData';

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

      <div style={{ display: 'flex' }}>
        {quickIcons.map((item) => {
          return (
            <div key={item.id}>
              <QuickStats number={item.number} content={item.content} iconUrl={item.iconUrl} />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Playground;

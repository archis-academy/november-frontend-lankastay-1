import React, { useEffect, useState } from 'react';
import ChoiseCard from '../../Components/ChoiseCard/ChoiseCard';
import fetchData from '../../lib/fetchData';
import './ChoiseCard.module.scss';

function ChoiseSection() {
  const [choiseData, setChoiseData] = useState([]);

  useEffect(() => {
    fetchData('choise-cards').then((data) => setChoiseData(data));
  }, []);
  return (
    <div className='choiseGrid'>
      {choiseData
        .filter((item) => item.id >= 6)
        .map((item) => (
          <ChoiseCard
            key={item.id}
            image={item.image}
            title={item.title}
            location={item.location}
            price={item.price}
            priceText={item.priceText}
            isPopularChoise={item.isPopularChoise}
          />
        ))}
    </div>
  );
}

export default ChoiseSection;

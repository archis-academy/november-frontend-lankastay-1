import React from 'react';

function ChoiseCard({ image, title, location, price, priceText }) {
  return (
    <div className='choise-card'>
      <div className='choise-card-top'>
        <img className='choise-card-image' src={image} alt={title} />
        <p className='choise-card-price'>{price} <span className='choise-card-price-text'>{priceText}</span> </p>
      </div>
      <p className='choise-card-title'>{title}</p>
      <small className='choise-card-location'>{location}</small>
    </div>
  );
}

export default ChoiseCard;

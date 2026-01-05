import React from 'react';
import './bookingCard.scss';
import { Link } from 'react-router-dom';

const BookingCard = ({ price, currency, id }) => {
  return (
    <div className='booking-card'>
      <h3 className='booking-card__title'>Start Booking</h3>

      <div className='booking-card__price'>
        <span className='amount'>
          {' '}
          {currency}
          {price}{' '}
        </span>
        <span className='period'>per Night</span>
      </div>

      <Link to={`/booking/${id}`}>
        <button className='booking-card__btn'>Book Now</button>
      </Link>
    </div>
  );
};

export default BookingCard;

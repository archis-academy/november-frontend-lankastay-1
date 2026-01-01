import React from "react";
import "./bookingCard.scss";

const BookingCard = ({price, currency}) => {
  return (
    <div className="booking-card">
      <h3 className="booking-card__title">Start Booking</h3>

      <div className="booking-card__price">
        <span className="amount"> {currency}{price} </span>
        <span className="period">per Night</span>
      </div>

      <button className="booking-card__btn">
        Book Now
      </button>
    </div>
  );
};

export default BookingCard;
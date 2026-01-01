import React from "react";
import "./bookingCard.scss";

const BookingCard = () => {
  return (
    <div className="booking-card">
      <h3 className="booking-card__title">Start Booking</h3>

      <div className="booking-card__price">
        <span className="amount">$200</span>
        <span className="period">per Day</span>
      </div>

      <button className="booking-card__btn">
        Book Now
      </button>
    </div>
  );
};

export default BookingCard;
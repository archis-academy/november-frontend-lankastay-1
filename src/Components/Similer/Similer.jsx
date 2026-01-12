import React from "react";
import "../styles/Similer.scss";

const similerData = [
  {
    id: 1,
    title: "Green Lake",
    image:
      
  },
  {
    id: 2,
    title: "Dog Clubs",
    image:
    
  },
];

const Similer = () => {
  return (
    <div className="similer">
      <h2 className="similer__title">Treasure to Choose</h2>

      <div className="similer__list">
        {similerData.map((item) => (
          <div className="similer__card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <span className="similer__name">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Similer;
import React from "react";
import ChoiseCard from "./ChoiseCard";
import choiseData from "./choise-data.json";

function ChoiseSection() {
  return (
    <div className="choiseGrid">
      {choiseData["choise-cards"]
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
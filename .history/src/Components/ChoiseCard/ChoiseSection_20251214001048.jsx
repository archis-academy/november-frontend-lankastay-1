import React from "react";
import ChoiseCard from "../ChoiseCard/ChoiseCard";
import styles from "./ChoiseSection.module.scss";

function ChoiseSection({ data }) {
  if (!data || data.length === 0) return null;

  const popularChoises = data.filter(item => item.isPopularChoise);

  return (
    <section className={styles.choiseSection}>
      <h2 className={styles.sectionTitle}>Popular Choice</h2>

      <div className={styles.choiseGrid}>
        {popularChoises.map(item => (
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
    </section>
  );
}

export default ChoiseSection;

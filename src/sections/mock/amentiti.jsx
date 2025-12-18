import React from "react";
import styles from "./amentiti.module.scss";


const Amentiti = ({ data }) => {
  return (
    <div className={styles.amentitiContainer}>
      {data?.map((item) => {

        const fixedUrl = item.iconUrl ? item.iconUrl.replace("public/", "/") : "";

        return (
          <div key={item.id} className={styles.card}>
           
            <img 
                src={fixedUrl} 
                alt={item.label} 
                className={styles.icon} 
            />
            <p className={styles.text}>
                <span className={styles.value}>{item.value} </span>
                {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Amentiti;
import React from "react";
import styles from "./amentiti.module.scss";
import QuickStats from "../../Components/quick-stats-component/quick_stats";

const Amentiti = ({ data }) => {
  return (
    <div className={styles.amentitiContainer}>
      {data?.map((item) => {

        const currentUrl = item.iconUrl ? item.iconUrl.replace("public/", "/") : "";

        return (
          <QuickStats
            key={item.id}
            number={item.value}   
            content={item.label}  
            iconUrl={currentUrl}
          />
        );
      })}
    </div>
  );
};
export default Amentiti;
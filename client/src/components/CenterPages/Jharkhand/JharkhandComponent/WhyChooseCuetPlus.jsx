import React from "react";
import styles from "./WhyChooseCuetPlus.module.css";

const WhyChooseCuetPlus = ({ data }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.features}>
        {data.features.map((item, index) => (
          <div key={index} className={styles.featureCard}>
            <h2 className={styles.featureTitle}>{item.feature}</h2>
            <p className={styles.featureAdvantage}>{item.advantage}</p>
          </div>
        ))}
      </div>
      <p className={styles.conclusion}>{data.conclusion}</p>
    </div>
  );
};

export default WhyChooseCuetPlus;

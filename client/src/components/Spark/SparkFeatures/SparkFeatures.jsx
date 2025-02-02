import React from "react";
import styles from "./SparkFeatures.module.css";

const SparkFeatures = ({ heading, keyFeatures }) => {
  return (
    <div className={styles.SparkFeatures}>
      <h2 className={styles.title}>
        {heading.title} <span>{heading.span}</span>
      </h2>
      <ol className={styles.features}>
        {keyFeatures.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <ul className={styles.featureList}>
              {feature.desc.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SparkFeatures;

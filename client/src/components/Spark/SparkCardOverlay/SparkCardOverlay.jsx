import React from "react";
import styles from "./SparkCardOverlay.module.css";

const SparkCardOverlay = ({ title, imageSrc, imageAlt }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <div className={styles.cardImage}>
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default SparkCardOverlay;

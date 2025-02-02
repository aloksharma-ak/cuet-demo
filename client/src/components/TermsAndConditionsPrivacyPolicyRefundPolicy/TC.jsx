import React from "react";
import styles from "./TC.module.css";

const TC = ({ termsData }) => {
  if (!termsData) return null; // Guard clause for empty data

  const { title, description, note, subTitle, conditions, disclaimer } =
    termsData;

  return (
    <div className={styles.TermAndConditionsHero}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {description && <p className={styles.description}>{description}</p>}

      {note && (
        <div className={styles.note}>
          <span>Note:</span> {note}
        </div>
      )}

      {subTitle && <h2 className={styles.subTitle}>{subTitle}</h2>}

      {conditions && conditions.length > 0 && (
        <ol className={styles.list}>
          {conditions.map((condition, index) => (
            <li key={index} className={styles.listItem}>
              {condition}
            </li>
          ))}
        </ol>
      )}

      {disclaimer && (
        <div className={styles.note}>
          <span>Disclaimer:</span> {disclaimer}
        </div>
      )}
    </div>
  );
};

export default TC;

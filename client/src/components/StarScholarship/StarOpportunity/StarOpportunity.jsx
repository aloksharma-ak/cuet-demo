import React from "react";
import styles from "./StarOpportunity.module.css";

const StarOpportunity = ({ heading, cardData }) => {
  return (
    <div className={styles.opportunitySection}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>
          {heading.title}
          <br />
          <span>{heading.tagLine}</span>
        </h2>
        <p className={styles.description}>{heading.desc}</p>
      </div>
      {/* <div className={styles.bottomSection}>
        {cardData.map((data, index) => (
          <div className={styles.cardContainer} key={index}>
            <ExcelCard
              imgUrl={data.imgUrl}
              title={data.title}
              desc={data.desc}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default StarOpportunity;

const ExcelCard = ({ imgUrl, title, desc }) => (
  <div className={styles.card}>
    <img src={imgUrl} alt="Star Image" className={styles.excelImg} />
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDesc}>{desc}</p>
  </div>
);

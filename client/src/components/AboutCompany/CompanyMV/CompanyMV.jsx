import React from "react";
import styles from "./CompanyMV.module.css";

const CompanyMV = ({ contentData }) => {
  return (
    <section className={styles.CompanyMV}>
      <div className={styles.textContainer}>
        <h3 className={styles.subTitle}>{contentData.subTitle}</h3>
        <h2 className={styles.title}>{contentData.title}</h2>
        {contentData.descriptions.map((desc, index) => (
          <p key={index} className={styles.description}>
            {desc}
          </p>
        ))}
        <div className={styles.btnContainer}>{contentData.btnText}</div>
      </div>
      <img src={contentData.image} alt="vision" className={styles.image} />
    </section>
  );
};

export default CompanyMV;

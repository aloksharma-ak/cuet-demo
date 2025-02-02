import React from "react";
import styles from "./SparkBannerAction.module.css";
import { Link } from "react-router-dom";

const SparkBannerAction = ({ heading, buttons }) => {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.title}>{heading.title}</h2>
      <p className={styles.description}>{heading.desc}</p>
      <div className={styles.buttonContainer}>
        {buttons.map((button, i) => (
          <div className={styles.btns}  key={i}>
            <Link to={button.link} className={styles.btn}>
              {button.btn}
            </Link>
            <p className={styles.btnDesc}>{button.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SparkBannerAction;

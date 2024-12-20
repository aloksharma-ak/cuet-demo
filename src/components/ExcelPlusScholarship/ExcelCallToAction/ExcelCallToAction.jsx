import React from "react";
import { Link } from "react-router-dom";
import styles from "./ExcelCallToAction.module.css";

const ExcelCallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.title}>Ready to Excel? Join Star Now!</h2>
      <p className={styles.description}>
        Take the first step toward your academic success. Register today and let
        CUET Plus guide you to your dream university.
      </p>
      <div className={styles.buttonContainer}>
        <Link to="/scholarship-form">
          <button className={styles.primaryButton}>
            Register for Star Scholarship Test
          </button>
        </Link>
      </div>
      <p
        className={styles.description}
        style={{ fontWeight: "500", opacity: "1" }}
      >
        CUET Plus – Empowering Aspirations, One Student at a Time.
      </p>
    </section>
  );
};

export default ExcelCallToAction;

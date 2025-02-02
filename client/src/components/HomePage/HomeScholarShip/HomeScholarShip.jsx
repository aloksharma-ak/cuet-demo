import React from "react";
import styles from "./HomeScholarShip.module.css";
import { Link } from "react-router-dom";

const HomeScholarShip = () => {
  return (
    <div className={styles.HomeScholarShip}>
      <div className={styles.content}>
        Let <span>CUETPlus</span> Guide You To A Better & Brighter Future
      </div>
      <div className={styles.card}>
        <h2 className={styles.cardHeading}>CUET 2025 Scholarship</h2>
        <p className={styles.desc}>
          Appear in CUET Scholarship Admission Test <br /> Get up to
          100% scholarship and more
        </p>
        <span className={styles.cardTime}>25th December 2024</span>
        <Link to="/cuet-scholarship"><button className={styles.button}>Apply Now</button></Link>
      </div>
    </div>
  );
};

export default HomeScholarShip;

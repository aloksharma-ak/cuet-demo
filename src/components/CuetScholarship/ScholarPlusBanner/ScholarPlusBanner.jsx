import React from "react";
import styles from "./ScholarPlusBanner.module.css";
import { Link } from "react-router-dom";

const ScholarPlusBanner = () => {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.title}>Ready to Unlock Your Future?</h2>
      <p className={styles.description}>
        Don’t let financial challenges hold you back. Join the ranks of
        successful students who have transformed their future with ScholarPlus.
      </p>
      <div className={styles.buttonContainer}>
        <Link to="/scholarship-form">
          <button className={styles.primaryButton}>
            Apply for ScholarPlus Now
          </button>
        </Link>
        <Link to="/counselling">
          <button className={styles.secondaryButton}>
            Talk to Our Counselors
          </button>
        </Link>
      </div>
      <p className={styles.tagLine}>
        Don’t Miss Out – Limited Scholarships Available. Apply Now to Secure
        Your Future!”
      </p>
    </section>
  );
};

export default ScholarPlusBanner;

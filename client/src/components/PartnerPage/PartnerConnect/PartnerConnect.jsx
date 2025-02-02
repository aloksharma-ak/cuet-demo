import React from "react";
import styles from "./PartnerConnect.module.css";
import { Link } from "react-router-dom";
// import image from "./your-image-path.jpg";

const PartnerConnect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.heading}>Ready to Partner with Us?</p>
        <h2 className={styles.subHeading}>
          Let’s Build a Stronger Future in Education — Together.
        </h2>
        <p className={styles.description}>
          Be part of a growing education network that empowers students,
          supports partners, and builds successful futures.
        </p>
        <div className={styles.buttons}>
          <Link to="/partnership-form">
            <button className={styles.primaryButton}>
              Apply to Become a Partner Today
            </button>
          </Link>
          <button className={styles.secondaryButton}>Talk to Our Team</button>
        </div>
      </div>
    </div>
  );
};

export default PartnerConnect;

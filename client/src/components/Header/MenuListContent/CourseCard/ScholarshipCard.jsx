import React from "react";
import styles from "./ScholarshipCard.module.css";
import { Link } from "react-router-dom";

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className={styles.container}>
      <Link to={scholarship.url}>
        <div className={styles.scholarshipTag}>{scholarship.eligible}</div>
        <h2 className={styles.title}>{scholarship.name}</h2>
        <h3 className={styles.tagline}>{scholarship.tag}</h3>
        <p className={styles.program}>{scholarship.program}</p>
        <p className={styles.class}>{scholarship.class}</p>
        <p className={styles.description}>{scholarship.desc}</p>
        <ul className={styles.details}>
          <li>
            <strong>Duration:</strong> {scholarship.duration}
          </li>
          <li>
            <strong>Eligibility:</strong> {scholarship.eligibility}
          </li>
          <li>
            <strong>Mode:</strong> {scholarship.mode}
          </li>
        </ul>
        <p className={styles.enroll}>{scholarship.enroll}</p>
        <button className={styles.enrollButton}>{scholarship.GrAction}</button>
      </Link>
    </div>
  );
};

export default ScholarshipCard;

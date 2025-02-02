import React from "react";
import styles from "./StarScholarshipHero.module.css";
import { Link as RouterLink } from "react-router-dom";
import { ScholarshipFormContainer } from "../../CuetScholarship/ScholarshipForm/ScholarshipForm";

const StarScholarshipHero = ({ title, description, buttonText, formStyle }) => {
  return (
    <div className={styles.partnerSection}>
      <div className={styles.textSection}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{description}</p>
        <RouterLink to="/scholarship-form">
          <button className={styles.partnerButton}>{buttonText}</button>
        </RouterLink>
      </div>
      <div className={styles.imageSection}>
        <ScholarshipFormContainer style={formStyle} />
      </div>
    </div>
  );
};

export default StarScholarshipHero;

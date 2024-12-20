import React from "react";
import styles from "./ExcelPlusScholarshipHero.module.css";
// Aliasing the Link import from react-scroll
// Importing Link from react-router-dom as is
import { Link as RouterLink } from "react-router-dom";
import { ScholarshipFormContainer } from "../../CuetScholarship/ScholarshipForm/ScholarshipForm";

const ExcelPlusScholarshipHero = () => {
  return (
    <div className={styles.partnerSection}>
      <div className={styles.textSection}>
        <h2 className={styles.title}>
        Achieve Excellence with the <span>Star</span> Scholarship Test
        </h2>
        <p className={styles.desc}>
          your journey to India’s top universities starts here. Achieve academic
          success with scholarships that remove financialbarriers and pave the
          way for your dreams.
        </p>
        {/* Use RouterLink for navigation between pages */}
        <RouterLink to="/scholarship-form">
          <button className={styles.partnerButton}>
            Apply Now for the CUET Star Scholarship
          </button>
        </RouterLink>
      </div>
      <div className={styles.imageSection}>
        {/* <img src={partnership_image} alt="Partner" /> */}
        <ScholarshipFormContainer none={{display: 'none'}}/>
      </div>
    </div>
  );
};

export default ExcelPlusScholarshipHero;

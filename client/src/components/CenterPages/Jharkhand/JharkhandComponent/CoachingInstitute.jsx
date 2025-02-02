import React from "react";
import styles from "./CoachingInstitute.module.css";
import { SectionCoachingInstitute } from "../SectionCUET/Section";

const CoachingInstitute = ({ cuetPlusCoachingInstitute }) => {
  return (
    <div className={styles.instituteContainer}>
      <h2 className={styles.title}>{cuetPlusCoachingInstitute.title}</h2>
      <p className={styles.introduction}>{cuetPlusCoachingInstitute.introduction}</p>
      <div className={styles.sections}>
        {cuetPlusCoachingInstitute.sections.map((section, index) => (
          <SectionCoachingInstitute key={index} section={section} />
        ))}
      </div>
    </div>
  );
};

export default CoachingInstitute;

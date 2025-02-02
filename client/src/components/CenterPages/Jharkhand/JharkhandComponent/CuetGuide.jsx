import React from "react";
import styles from "./CuetGuide.module.css";
import Section from "../SectionCUET/Section";

const CuetGuide = ({ cuetGuide }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cuetGuide.title}</h1>
      <h2 className={styles.subTitle}>Table of Contents</h2>
      <ul className={styles.tableOfContents}>
        {cuetGuide.tableOfContents.map((section) => (
          <Section key={section.section} section={section} />
        ))}
      </ul>
    </div>
  );
};

export default CuetGuide;

import React from "react";
import { PiArrowBendDownRightLight } from "react-icons/pi";
import styles from "./AboutCuet.module.css";

const AboutCuetData = [
  `The Common University Entrance Test (CUET) is a standardized exam introduced in 2022 for students seeking admission into undergraduate and masters program at all Central Universities in India. By unifying the entrance process, CUET provides a single platform for candidates across the country, ensuring equal opportunities for students from diverse backgrounds, including those in rural and remote areas.
`,
  `CUET simplifies the admissions process, allowing students to apply to multiple universities with one exam, increasing their options for higher education. Previously known as the Central Universities Common Entrance Test (CUCET), CUET was initially launched in 2010 to streamline admissions for several central universities. Now, as CUET, it has expanded to include all Central Universities, helping students reach their desired academic institutions with ease.
`,
  `CUET (UG) for the academic year of 2025-26 will be conducted in 13 languages across India. The test will be available in both Hybrid (Pen & Paper / Computuer Based Test) mode, providing students with a flexible examination experience. Through CUET, students can pursue a variety of undergraduate as well as postgraduate programs, making it a key stepping stone toward quality higher education in India.`,
  ,
];

const AboutCuet = () => (
  <div className={styles.aboutCuet}>
    <h2>Common University Entrance Test (CUET)</h2>
    {AboutCuetData.map((text, index) => (
      <div key={index} className={styles.titleDesc}>
        <div className={styles.icon}>
          <PiArrowBendDownRightLight />
        </div>
        <p>{text}</p>
      </div>
    ))}
  </div>
);

export default AboutCuet;

import React from "react";
import { PiArrowBendDownRightLight } from "react-icons/pi";
import styles from "./Eligibility.module.css"; // Import the CSS module

const Eligibility = () => (
  <div className={styles.eligibility}>
    <h2>CUET Eligibility Criteria 2025</h2>
    {[
      "The eligibility criteria for CUET 2025 vary depending on the program and university to which students are applying. However, there are some general requirements for undergraduate (UG) admissions across universities. For General category students, a minimum of 50% marks in Class XII or an equivalent exam is required, while candidates from Scheduled Caste (SC) and Scheduled Tribe (ST) categories need a minimum of 45% in Class XII.",
      "There is no specific age limit for candidates appearing in CUET (UG) 2025. However, applicants must meet any age requirements specified by the university they wish to join. It’s recommended that students check the individual eligibility guidelines of their target universities to ensure they meet all criteria.",
      "Application Process",
    ].map((text, index) => (
      <div key={index} className={styles.titleDesc}>
        <div className={styles.icon}>
          <PiArrowBendDownRightLight />
        </div>
        <p>{text}</p>
      </div>
    ))}
    <div className={styles.titleDesc}>
      <span>
        The CUET application is available only online through the official
        website. Candidates can follow these steps to register themselves:
      </span>
    </div>

    <ul className={styles.eligibilityList}>
      <li className={styles.eligibilityItem}>
        Visit{" "}
        <a
          href="https://cuet.samarth.ac.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          cuet.samarth.ac.in
        </a>{" "}
        and register.
      </li>
      <li className={styles.eligibilityItem}>
        Complete the application form, select courses, and upload the required
        documents.
      </li>
      <li className={styles.eligibilityItem}>
        Pay the exam fee based on the number of chosen subjects: ₹1000 for
        General candidates (first three subjects), with additional charges for
        extra subjects.
      </li>
      <li className={styles.eligibilityItem}>
        For smooth processing, applicants should keep a printed copy of the
        application form for reference. CUET 2025 ensures streamlined admission
        opportunities for students across India's Central Universities.
      </li>
    </ul>
  </div>
);

export default Eligibility;

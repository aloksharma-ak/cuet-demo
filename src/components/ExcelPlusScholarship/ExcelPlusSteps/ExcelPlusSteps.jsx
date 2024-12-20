import React from "react";
import styles from "./ExcelPlusSteps.module.css";

const ExcelPlusSteps = () => {
  const steps = [
    {
      number: "1",
      title: "SUBMIT YOUR APPLICATION",
      description: "Fill in your academic details and submit your application online.",
    },
    {
      number: "2",
      title: "TAKE THE SCHOLARSHIP TEST",
      description: "Showcase your skills in our aptitude-based test conducted online or offline.",
    },
    {
      number: "3",
      title: "RECEIVE YOUR SCHOLARSHIP OFFER",
      description: "Qualified students will receive tailored scholarship packages based on performance.",
    },
  ];

  return (
    <section className={styles.scholarshipSteps}>
      {/* <h2 className={styles.title}>
        Your Path to the CUET Star Scholarship in 3 Easy Steps
      </h2>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
      <button className={styles.ctaButton}>Register for the Test Now</button> */}
      <ExamInstructions/>
    </section>
  );
};

const StepCard = ({ number, title, description }) => (
  <div className={styles.stepCard}>
    <div className={styles.stepNumber}>{number}</div>
    <h3 className={styles.stepTitle}>{title}</h3>
    <p className={styles.stepDescription}>{description}</p>
  </div>
);

const ExamInstructions = () => {
  return (
    <div className={styles.instructionsContainer}>
      <h3 className={styles.title}>Exam Instructions</h3>
      <ul className={styles.list}>
        <li>
          Ensure a stable internet connection for uninterrupted access.
        </li>
        <li>
          Login credentials will be sent via email 48 hours before the test.
        </li>
        <li>
          The test duration is 60 minutes, and there will be 50 multiple-choice
          questions (MCQs).
        </li>
        <li>
          Keep a valid photo ID ready for identity verification during the login
          process.
        </li>
        <li>
          Use a laptop/desktop with a webcam. Mobile devices are not
          recommended.
        </li>
      </ul>
      <p className={styles.note}>
        <strong>Note:</strong> Cheating or malpractice will result in{" "}
        <span>immediate disqualification</span>.
      </p>
    </div>
  );
};

export default ExcelPlusSteps;


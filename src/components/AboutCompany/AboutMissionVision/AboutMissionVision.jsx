import React from "react";
import styles from "./AboutMissionVision.module.css";

const AboutMissionVision = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Our Mission, Your Success</h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Our Mission</h2>
          <p className={styles.cardText}>
            At CUETPlus, our mission is to empower students with the knowledge and skills required to excel in the CUET, helping them achieve their academic goals and unlock the doors to top universities. We are dedicated to providing affordable, high-quality, accessible, and personalized coaching to ensure that every student can achieve exam success and a bright future.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Our Vision</h2>
          <p className={styles.cardText}>
            We envision a future where every deserving student in India has access to quality education and the opportunity to pursue higher studies at prestigious universities. CUET Plus aims to be at the forefront of educational innovation, using technology, expert mentorship, and student-centric teaching methods to shape the next generation of leaders, scholars, and professionals.
          </p>
        </div>
      </div>
      <p className={styles.footerText}>
        CUET Plus is more than just a coaching institute; it’s a community of learners, educators, and leaders who share a common goal of academic achievement. Join us and be part of a movement that’s shaping the future of higher education in India.
      </p>
    </section>
  );
};

export default AboutMissionVision;

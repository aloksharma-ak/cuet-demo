import React from "react";
import styles from "./Benefits.module.css";

import webinar from '../../../assets/webinar.png'
import student from '../../../assets/student.png'
import infographic from '../../../assets/infographic.png'
import teacher from '../../../assets/teacher.png'

import benifitPartnerImage1 from '../../../assets/bar-graph.png'
import benifitPartnerImage2 from '../../../assets/indiaSmall.png'
import benifitPartnerImage3 from '../../../assets/online-support.png'

const studentBenefits = [
  {
    img: student, 
    title: "Proven Track Record",
    description: "95% of our students clear CUET",
  },
  { img: teacher, title: "Expert Faculty", description: "Learn from experienced mentors." },
  {
    img: infographic,
    title: "Comprehensive Resources",
    description: "Access online, hybrid, and classroom materials.",
  },
  {
    img: webinar,
    title: "Personalized Attention",
    description: "Tailored learning plans for every student.",
  },
];

const partnerBenefits = [
  {
    img: benifitPartnerImage1,
    title: "Proven Model for Success",
    description: "Grow your business with an established brand.",
  },
  {
    img: benifitPartnerImage2,
    title: "Nationwide Reach",
    description: "Benefit from CUET Plus’s marketing and admissions.",
  },
  {
    img: benifitPartnerImage3,
    title: "Technical Support",
    description: "Get tools to manage operations and scale up.",
  },
];

const Benefits = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Why Choose CUET Plus?</h2>
      <div className={styles.benefitsSection}>
        {/* Student Benefits */}
        <div className={styles.column}>
          <h3 className={styles.subHeading}>Benefits for Students</h3>
          <div className={styles.cardContainer}>
            {studentBenefits.map(({ img, title, description }, index) => (
              <div key={index} className={styles.card}>
                <img src={img} className={styles.img} alt="Student Benefits"/>
                <div className={styles.content}>
                  <h4 className={styles.title}>{title}</h4>
                  <p className={styles.description}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Benefits */}
        <div className={styles.column}>
          <h3 className={styles.subHeading}>Benefits for Partners</h3>
          <div className={styles.cardContainer}>
            {partnerBenefits.map(({ img, title, description }, index) => (
              <div key={index} className={styles.card}>
                <img src={img} className={styles.img} alt="Partner Benefits"/>
                <div className={styles.content}>
                  <h4 className={styles.title}>{title}</h4>
                  <p className={styles.description}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

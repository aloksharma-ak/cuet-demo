import React from "react";
import { useNavigate } from "react-router-dom";
import EmpathyIcon from "../../../assets/Empathy.png";
import MotivationalIcon from "../../../assets/motivation.png";
import CredibilityIcon from "../../../assets/reliability.png";
import styles from "./ExcelPlusWhyChoose.module.css";

const ExcelPlusWhyChoose = () => {
  const reasons = [
    {
      imageUrl: EmpathyIcon,
      title: "Empathy Appeal",
      description:
        "We recognize the financial hurdles many students face and are here to ensure that no deserving student is left behind.",
    },
    {
      imageUrl: CredibilityIcon,
      title: "Credibility",
      description:
        "Over 10,000 students have benefited from CUET Plus’s scholarship programs, achieving top results and admissions to leading universities.",
    },
    {
      imageUrl: MotivationalIcon,
      title: "Motivational Insight",
      description:
        "Scholarships are more than financial aid—they are a testament to your potential and a catalyst for your future success.",
    },
  ];

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/cuet-scholarship");
  };


  return (
    <section className={styles.whyChooseSection}>
      <h2 className={styles.title}>Why Choose CUET Star?</h2>
      <div className={styles.reasonsContainer}>
        {reasons.map((reason, index) => (
          <ReasonCard key={index} {...reason} />
        ))}
      </div>
      <button className={styles.ctaButton} onClick={handleRedirect}>Learn More About ScholarPlus</button>
    </section>
  );
};

const ReasonCard = ({ imageUrl, title, description }) => (
  <div className={styles.reasonCard}>
    <img src={imageUrl} alt={title} className={styles.reasonImage} />
    <div className={styles.reasonContent}>
      <h3 className={styles.reasonTitle}>{title}</h3>
      <p className={styles.reasonDescription}>{description}</p>
    </div>
  </div>
);

export default ExcelPlusWhyChoose;

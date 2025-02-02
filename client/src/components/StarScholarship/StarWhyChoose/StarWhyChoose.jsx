import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import styles from "./StarWhyChoose.module.css";

const StarWhyChoose = ({ heading, reasons }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/cuet-scholarship");
  };

  return (
    <section className={styles.whyChooseSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {heading}
      </motion.h2>

      <motion.div
        className={styles.reasonsContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + index * 0.2, // Stagger effect
              duration: 0.6,
            }}
          >
            <ReasonCard {...reason} />
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        className={styles.ctaButton}
        onClick={handleRedirect}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Learn More About ScholarPlus
      </motion.button>
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

export default StarWhyChoose;

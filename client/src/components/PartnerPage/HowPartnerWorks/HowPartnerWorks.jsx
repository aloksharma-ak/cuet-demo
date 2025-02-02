import React from "react";
import { motion } from "framer-motion";
import styles from "./HowPartnerWorks.module.css";

const HowPartnerWorks = () => {
  const steps = [
    {
      title: "Reach Out to Us",
      description:
        "Choose the partnership model that suits you best and fill out the application.",
    },
    {
      title: "Let’s Collaborate",
      description:
        "Our team will guide you through onboarding, training, and the partnership setup process.",
    },
    {
      title: "Grow Together",
      description:
        "Start reaping the benefits of a trusted education brand while contributing to student success.",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>How It Works</h2>
      <h3 className={styles.subHeader}>A Simple Path to Success</h3>
      <motion.div
        className={styles.stepsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }}
        variants={animationVariants}
      >
        {steps.map((step, index) => (
          <motion.div className={styles.step} key={index} variants={animationVariants}>
            <div className={styles.connector} />
            <div className={styles.stepText}>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HowPartnerWorks;

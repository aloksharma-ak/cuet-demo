import React from "react";
import { motion } from "framer-motion";
import { VscArrowRight } from "react-icons/vsc";
import styles from "./HowToRegister.module.css";

const HowToRegister = ({ stepsData, headingData }) => {
  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={styles.HowToRegister}>
      <h2 className={styles.registerHeading}>
        {headingData.title} <span>{headingData.highlight}</span>
      </h2>
      <h3 className={styles.registerSubHeading}>{headingData.subtitle}</h3>
      <div className={styles.registerSteps}>
        <motion.div
          className={styles.stepsDiv}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          variants={animationVariants}
        >
          <div className={styles.dotedLine}></div>
          {stepsData.map((_, index) => (
            <React.Fragment key={index}>
              <motion.div className={styles.no} variants={animationVariants}>
                {index + 1}
              </motion.div>
              {index < stepsData.length - 1 && <VscArrowRight />}
            </React.Fragment>
          ))}
        </motion.div>
        <motion.div
          className={styles.steps}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          variants={animationVariants}
        >
          {stepsData.map((step, index) => (
            <motion.div className={styles.step} variants={animationVariants} key={index}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowToRegister;



export const CallToActionBtn = ({ title }) => {
  return (
    <div className={styles.btn}>
      <button className={`${styles.Btn}`}>{title}</button>
    </div>
  );
};

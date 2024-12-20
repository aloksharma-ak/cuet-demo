import { motion } from "framer-motion";
import { VscArrowRight } from "react-icons/vsc";
import styles from "./HowToRegister.module.css";

const HowToRegister = () => {
  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={styles.HowToRegister}>
      <h2 className={styles.registerHeading}>
        How <span>ScholarPlus</span> Works?
      </h2>
      <h3 className={styles.registerSubHeading}>
        The Path to Your Dream Scholarship is Just 5 Steps Away
      </h3>
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
          <motion.div className={styles.no} variants={animationVariants}>
            1
          </motion.div>
          <VscArrowRight />
          <motion.div className={styles.no} variants={animationVariants}>
            2
          </motion.div>
          <VscArrowRight />
          <motion.div className={styles.no} variants={animationVariants}>
            3
          </motion.div>
          <VscArrowRight />
          <motion.div className={styles.no} variants={animationVariants}>
            4
          </motion.div>
          <VscArrowRight />
          <motion.div className={styles.no} variants={animationVariants}>
            5
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.steps}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          variants={animationVariants}
        >
          <motion.div className={styles.step} variants={animationVariants}>
            <h3 className={styles.stepTitle}>Select a Scholarship Model</h3>
            <p>
              Choose a scholarship program according to your qualifications and
              eligibility criteria
            </p>
          </motion.div>
          <motion.div className={styles.step} variants={animationVariants}>
            <h3 className={styles.stepTitle}>Submit your Application</h3>
            <p>Share your academic background to complete your application.</p>
          </motion.div>
          <motion.div className={styles.step} variants={animationVariants}>
            <h3 className={styles.stepTitle}>
              Take the ScholarPlus Assessment
            </h3>
            <p>
              The test will be conducted online, allowing students nationwide to
              participate easily from the comfort of home.
            </p>
          </motion.div>
          <motion.div className={styles.step} variants={animationVariants}>
            <h3 className={styles.stepTitle}>Receive Your Scholarship</h3>
            <p>
              Earn tuition waivers, discounts, and additional benefits based on
              your scores.
            </p>
          </motion.div>
          <motion.div className={styles.step} variants={animationVariants}>
            <h3 className={styles.stepTitle}>Begin Your Journey</h3>
            <p>Join CUET Plus and start preparing for your bright future!</p>
          </motion.div>
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

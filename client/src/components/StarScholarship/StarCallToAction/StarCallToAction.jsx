import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./StarCallToAction.module.css";

const StarCallToAction = ({ title, description, buttonText, link, footerText }) => {
  return (
    <section className={styles.ctaSection}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {description}
      </motion.p>

      <div className={styles.buttonContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link to={link}>
            <button className={styles.primaryButton}>
              {buttonText}
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.p
        className={styles.description}
        style={{ fontWeight: "500", opacity: "1" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {footerText}
      </motion.p>
    </section>
  );
};

export default StarCallToAction;

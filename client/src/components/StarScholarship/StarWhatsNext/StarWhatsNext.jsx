import React from "react";
import { motion } from "framer-motion";
import styles from "./StarWhatsNext.module.css";

const StarWhatsNext = ({ cards }) => {
  return (
    <div className={styles.container}>
      <motion.h3
        className={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        What's Next After the Test?
      </motion.h3>

      <motion.div
        className={styles.cardContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {cards.map((card, index) => (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + index * 0.2, // Stagger effect based on index
              duration: 0.6,
            }}
          >
            <div className={styles.icon}>
              {/* <img
                src={card.icon}
                alt={card.alt}
                className={styles.iconImage}
              /> */}
            </div>
            <h4 className={styles.cardTitle}>{card.title}</h4>
            <p className={styles.cardDescription}>{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StarWhatsNext;

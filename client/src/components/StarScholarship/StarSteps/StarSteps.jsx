import React from "react";
import { motion } from "framer-motion";
import styles from "./StarSteps.module.css";

const StarSteps = ({ instructions, note }) => {
  return (
    <section className={styles.scholarshipSteps}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ExamInstructions instructions={instructions} note={note} />
      </motion.div>
    </section>
  );
};

const ExamInstructions = ({ instructions, note }) => {
  return (
    <motion.div
      className={styles.instructionsContainer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h3
        className={styles.title}
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Exam Instructions
      </motion.h3>

      <motion.ul
        className={styles.list}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {instructions.map((instruction, index) => (
          <motion.li
            key={index}
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
          >
            {instruction}
          </motion.li>
        ))}
      </motion.ul>

      <motion.p
        className={styles.note}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <strong>Note:</strong> {note.text} <span>{note.highlight}</span>
      </motion.p>
    </motion.div>
  );
};

export default StarSteps;

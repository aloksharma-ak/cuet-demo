// Timeline.jsx
import React from "react";
import styles from "./Timeline.module.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      year: "1994",
      title: "12 SELECTIONS",
      description: "in Rajasthan PMT in 1994",
      position: "top",
      icon: "🏠",
    },
    {
      id: 2,
      year: "1995",
      title: "First RANK 1",
      description: "in Rajasthan PMT in 1995",
      position: "bottom",
      icon: "🥇",
    },
    {
      id: 3,
      year: "2008",
      title: "JEE division launched",
      description: "in 2008",
      position: "top",
      icon: "🚀",
    },
    {
      id: 4,
      year: "1994",
      title: "12 SELECTIONS",
      description: "in Rajasthan PMT in 1994",
      position: "bottom",
      icon: "🏠",
    },
    {
      id: 5,
      year: "1995",
      title: "First RANK 1",
      description: "in Rajasthan PMT in 1995",
      position: "top",
      icon: "🥇",
    },
    {
      id: 6,
      year: "2008",
      title: "JEE division launched",
      description: "in 2008",
      position: "bottom",
      icon: "🚀",
    },
    {
      id: 7,
      year: "2008",
      title: "JEE division launched",
      description: "in 2008",
      position: "top",
      icon: "🚀",
    },
    {
      id: 8,
      year: "1994",
      title: "12 SELECTIONS",
      description: "in Rajasthan PMT in 1994",
      position: "bottom",
      icon: "🏠",
    },
    {
      id: 9,
      year: "1995",
      title: "First RANK 1",
      description: "in Rajasthan PMT in 1995",
      position: "top",
      icon: "🥇",
    },
    {
      id: 10,
      year: "2008",
      title: "JEE division launched",
      description: "in 2008",
      position: "bottom",
      icon: "🚀",
    },
  ];

  return (
    <div className={styles.timeline}>
      <div className={styles.line}></div>
      {timelineData.map((item) => (
        <div
          key={item.id}
          className={`${styles.timelineItem} ${styles[item.position]}`}
        >
          <div className={styles.icon}>{item.icon}</div>
          <div className={styles.content}>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

export const TimelineNew = () => {
  const timelineData = [
    {
      year: "2022",
      desc: "CUETPlus established to redefine CUET coaching standards.",
    },
    {
      year: "2023",
      desc: "Expended to 10+ cities with hybrid learning models.",
    },
    {
      year: "2024",
      desc: "Recognized as a top CUET coaching institute in India.",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={styles.timeline}>
      {timelineData.map((data, i) => (
        <motion.div
          className={styles.timelineCard}
          key={`timeline-card-${i}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // Animates every time it enters the viewport
          transition={{ duration: 0.5, delay: i * 0.2 }}
          variants={animationVariants}
        >
          <div className={styles.year}>{data.year}</div>
          <div className={styles.desc}>{data.desc}</div>
        </motion.div>
      ))}
      <motion.div
        className={styles.arrowBox}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // Ensures animation re-triggers
        transition={{ duration: 0.5, delay: timelineData.length * 0.2 }}
        variants={animationVariants}
      >
        {[<MdOutlineArrowRightAlt />, <MdOutlineArrowRightAlt />].map(
          (icon, i) => (
            <div className={styles.arrow} key={`arrow-${i}`}>
              {icon}
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};  

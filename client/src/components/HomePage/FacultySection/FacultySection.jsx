import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./FacultySection.module.css";

function FacultySection({ facultySection1, title, facultyData }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants for individual cards
  const cardVariants = {
    initial: { opacity: 1, filter: "blur(0px)", scale: 1 },
    hover: { scale: 1.05 },
    blur: { opacity: 0.5, filter: "blur(4px)" },
  };

  return (
    <div className={styles.facultySection} style={facultySection1}>
      {title && <h2 className={styles.heading}>{title}</h2>}
      <motion.div className={styles.facultyBox}>
        {facultyData &&
          facultyData.map((item, index) => (
            <motion.div
              className={styles.facultyCard}
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={
                hoveredCard === null
                  ? "initial"
                  : hoveredCard === index
                  ? "hover"
                  : "blur"
              }
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <p>{item.description}</p>
              <img src={item.img} alt={item.name} loading="lazy" />
              <h3>{item.name}</h3>
              <span>{item.faculty}</span>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}

export default FacultySection;

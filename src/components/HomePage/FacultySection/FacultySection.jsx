import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FacultySection.module.css";

gsap.registerPlugin(ScrollTrigger);

function FacultySection({ facultySection1, title, facultyData }) {
  return (
    <div className={styles.facultySection} style={facultySection1}>
      {title && <h2 className={styles.heading}>{title}</h2>}
      <div className={styles.facultyBox}>
        {facultyData &&
          facultyData.map((item, index) => (
            <div className={styles.facultyCard} key={index}>
              <p>{item.description}</p>
              <img src={item.img} alt={item.name} loading="lazy" />
              <h3>{item.name}</h3>
              <span>{item.faculty}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FacultySection;

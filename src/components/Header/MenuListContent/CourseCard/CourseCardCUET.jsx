import React from "react";
import styles from "./CourseCardCUET.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ScholarshipCard from "./ScholarshipCard";

const CourseCardCUET = ({ course, selectedMainItem, scholarship }) => {
  const menuItemsDatas = ["CUET-UG", "CUET-PG"];

  return (
    <div className={styles.cuetContainer}>
      <div className={styles.menuDropHeader}>
        {menuItemsDatas.map((item, index) => (
          <h2
            key={index}
            className={`${styles.menuItem} ${
              index % 2 === 0 ? styles.bgDarkGray : styles.bgLightGray
            } ${selectedMainItem === item ? styles.selected : ""}`}
          >
            {item}
            <IoIosArrowForward />
          </h2>
        ))}
      </div>
      <div className={styles.courseContent}>
        <div className={styles.cuetScholar}>
          <ScholarshipCard scholarship={scholarship} />
        </div>
        <div className={styles.coursesSmall}>
          {course.map((course, index) => (
            <CardCUET key={index} course={course} />
          ))}
        </div>
        <div className={styles.cuetImg}></div>
      </div>
    </div>
  );
};

export default CourseCardCUET;

const CardCUET = ({ course }) => {
  return (
    <Link to="/our-courses" className={styles.card}>
      <img src={course.img} alt={course.title} className={styles.image} />
      <button className={styles.viewButton}>View</button>
      <h3 className={styles.title}>{course.title}</h3>
      <p className={styles.description}>{course.description}</p>
      <p className={styles.students}>{course.studentCount} Students</p>
    </Link>
  );
};

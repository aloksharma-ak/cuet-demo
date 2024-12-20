import React from "react";
import styles from "./CourseCard.module.css";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, instructor, students, duration, imageUrl } = course;

  return (
    <Link to="our-Courses">
      <div className={styles.card}>
        <img src={imageUrl} alt={title} className={styles.cardImage} />
        <div className={styles.cardContent}>
          {imageUrl && <span className={styles.tag}>View</span>}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.instructor}>{instructor}</p>
          <div className={styles.bottom}>
            <p className={styles.students}>{students}</p>
            <p className={styles.duration}>{duration}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

export const CourseCardBig = ({ course, bigCourseImage }) => {
  const { title, instructor, students, duration, imageUrl } = course;

  return (
    <Link to="/our-courses">
      <div className={`${styles.card} ${styles.bigCard}`}>
        <img
          src={imageUrl}
          alt={title}
          className={styles.cardImageBig}
          style={{ display: "none" }}
        />
        <img src={bigCourseImage} alt={title} className={styles.cardImageBig} />
        <div className={styles.cardContentBig}>
          {imageUrl && (
            <span className={`${styles.tag} ${styles.tagBig}`}>View</span>
          )}
          <h3 className={styles.titleBig}>{title}</h3>
          <p className={styles.instructorBig}>{instructor}</p>
          <div className={styles.bottom}>
            <p className={styles.studentsBig}>{students}</p>
            <p className={styles.durationBig}>{duration}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

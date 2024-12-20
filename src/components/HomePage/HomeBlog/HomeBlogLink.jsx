import React from "react";
import styles from "./HomeBlogLink.module.css";
import timeTableImg from "../../../assets/latestBlogCuetTimeTableImg.jpg";
import LatestUpdate from "../LatestUpdate/LatestUpdate";
import blogIMG1 from "../../../assets/blogIMG1.jpg";
import blogIMG2 from "../../../assets/blogIMG2.png";
import img1 from '../../../assets/UniversityDemoImg.jpg'

const HomeBlogLink = () => {
  return (
    <>
      <div className={styles.homeBlogLink}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Latest Blogs</h2>
          <div className={styles.imageDiv}>
            <img src={timeTableImg} loading="lazy" alt="cuet timetable" className={styles.image} />
            <div className={styles.imageOverlay}>
            CUET UG 2025 <br /> Timetable | NTA Exam  <br />Calendar Expected Soon
            </div>
          </div>
          <h3 className={styles.title}></h3>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>
            CUET 2025: Your Ultimate Guide to University Admissions, Official Websites & Application Process
            </h4>
            <img src={blogIMG1} alt="Blogs" className={styles.cardImg} />
          </div>
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>
            CBSE Announces Subject-Wise Marks Breakdown for Class 10, 12 Board Exams
            </h4>
            <img src={blogIMG2} alt="cuet blogs" className={styles.cardImg} />
          </div>
          <div className={styles.card}>
            <h4 className={styles.cardTitle}>
              Top 20 CUET Collages in India Accepting 2025 Exam
            </h4>
            <img src={img1} alt="CUET Blogs" className={styles.cardImg} />
          </div>
          <div className={styles.LatestUpdateDiv}>
            <LatestUpdate />
          </div>
        </div>
      </div>
      <div className={styles.LatestUpdateDivMobile}>
        <LatestUpdate />
      </div>
    </>
  );
};

export default HomeBlogLink;

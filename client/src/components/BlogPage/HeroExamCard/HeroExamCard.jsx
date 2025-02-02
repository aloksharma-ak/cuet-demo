import React from "react";
import styles from "./HeroExamCard.module.css";
import BlogsImg from "../../../assets/blogImages/Blogs.avif";

const HeroExamCard = () => {
  return (
    <div className={styles.cardContainer}>
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <a
          href=""
          title="How a Small Town Boy Scored CAT 99.76%ile and Converted IIM Bangalore"
          rel="bookmark"
        >
         <img src={BlogsImg} alt="Image" className={styles.image} />
        </a>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        {/* Title */}
        <h3 className={styles.title}>
          <a
            href=""
            rel="bookmark"
          >
            How a Small Town Boy Scored CAT 99.76%ile and Converted IIM
            Bangalore
          </a>
        </h3>

        {/* Meta Information */}
        <div className={styles.meta}>
          <div className={styles.metaRow}>
            <a
              href=""
              className={styles.authorLink}
            >
              Anand Jha
            </a>
            <span className={styles.separator}>-</span>
            <time dateTime="2024-11-13T12:49:18+05:30">
              November 13, 2024
            </time>
          </div>
        </div>

        {/* Excerpt */}
        <p className={styles.excerpt}>
          Here&apos;s the Interview of CAT Topper Mayank, who hails from a small
          town of Bihar, scored 99.76%ile in the...
        </p>
      </div>
    </div>
  );
};

export default HeroExamCard;

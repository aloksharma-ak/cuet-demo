import React from "react";
import styles from "./HeroSectionCard.module.css";
import BlogsImg from "../../../assets/blogImages/Blogs.avif";

const HeroSectionCard = () => {
  return (
    <div className={styles.container}>
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <a
          href=""
          title="CUET Plus Recognized Under StartUp India Initiative by Govt. of India"
          rel="bookmark"
        >
          <img src={BlogsImg} alt="Image" className={styles.image} />
        </a>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        {/* Title */}
        <h3 className={styles.title}>
          <a href="" rel="bookmark" className={styles.titleLink}>
            CUET Plus Recognized Under StartUp India Initiative by Govt. of
            India
          </a>
        </h3>

        {/* Meta Information */}
        <div className={styles.meta}>
          <a href="" className={styles.metaLink}>
            <span>|</span> CUET Plus Initiatives <span>|</span>
          </a>
          <div>
            <a href="" className={styles.authorLink}>
              Anand Jha
            </a>
            <span>-</span>
            <time dateTime="2023-07-14T15:55:41+05:30">July 14, 2023</time>
          </div>
        </div>

        {/* Excerpt */}
        <p className={styles.excerpt}>
          CUET Plus Recognized Under StartUp India Initiative by Govt. of India
          With immense pleasure, we would like to let you all know that CUET
          Plus has been...
        </p>
      </div>
    </div>
  );
};

export default HeroSectionCard;

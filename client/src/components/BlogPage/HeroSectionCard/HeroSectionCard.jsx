import React from "react";
import styles from "./HeroSectionCard.module.css";

const HeroSectionCard = ({ image, title, link, metaCategory, author, date, excerpt }) => {
  return (
    <div className={styles.container}>
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <a href={link} title={title} rel="bookmark">
          <img src={image} alt="Blog Image" className={styles.image} />
        </a>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        {/* Title */}
        <h3 className={styles.title}>
          <a href={link} rel="bookmark" className={styles.titleLink}>
            {title}
          </a>
        </h3>

        {/* Meta Information */}
        <div className={styles.meta}>
          <a href={link} className={styles.metaLink}>
            <span>|</span> {metaCategory} <span>|</span>
          </a>
          <div>
            <a href={link} className={styles.authorLink}>
              {author}
            </a>
            <span>-</span>
            <time dateTime={new Date(date).toISOString()}>{date}</time>
          </div>
        </div>

        {/* Excerpt */}
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </div>
  );
};

export default HeroSectionCard;

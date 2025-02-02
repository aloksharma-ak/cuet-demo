import React from "react";
import styles from "./TopPosts.module.css";

function TopPosts({ title, link, imgUrl, category }) {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div
            className={styles.imageContainer}
            style={{ backgroundImage: `url(${imgUrl})` }}
          ></div>
        </a>
        <div className={styles.textContainer}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.title}
          >
            <h5>{title}</h5>
          </a>
          <div className={styles.category}>
            <span>{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPosts;

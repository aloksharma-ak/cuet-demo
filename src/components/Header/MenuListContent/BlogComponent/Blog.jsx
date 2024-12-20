import React from "react";
import styles from "./Blog.module.css";

const Blog = ({ img, title, desc }) => {
  return (
    <section className={styles.Blog}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.Content}>
        <h2 className={styles.Title}>{title}</h2>
        <p className={styles.Description}>{desc}</p>
      </div>
    </section>
  );
};

export default Blog;

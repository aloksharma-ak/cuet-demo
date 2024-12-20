import React from "react";
import styles from "./ExamsBlogs.module.css";
import HeroExamCard from "../HeroExamCard/HeroExamCard";
import BlogList from "../BlogList/BlogList";

const ExamsBlogs = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.redCard}`}>
        <h2 className={styles.title}>CAT EXAM</h2>
        <HeroExamCard />
        <HeroExamCard />
      </div>
      <div className={`${styles.card} ${styles.divider}`}>
        <h2 className={styles.title}>CLAT</h2>
        <BlogList />
      </div>
      <div className={styles.card}>
        <h2 className={styles.title}>CUET</h2>
        <BlogList />
      </div>
    </div>
  );
};

export default ExamsBlogs;

import React from "react";
import styles from "./BlogList.module.css";
import BlogsImg from "../../../assets/blogImages/Blogs.avif";

const blogPosts = [
  {
    title: "Top 20 CLAT Colleges in India Accepting CLAT 2024 Scores",
    imageUrl: BlogsImg,
    postUrl: "",
  },
  {
    title: "Top Law Entrance Exams 2024-25: Registration, Colleges, Details",
    imageUrl: BlogsImg,
    postUrl:
      "",
  },
  {
    title: "NLU Placement 2023: Average and Highest Placements of all NLUs",
    imageUrl: BlogsImg,
    postUrl: "",
  },
  {
    title: "Aditya L1 : Unveiling the Mysteries of the Sun",
    imageUrl: BlogsImg,
    postUrl:
      "",
  },
  {
    title: "Current Affairs For CLAT 2025: Strategy and Practice Questions",
    imageUrl: BlogsImg,
    postUrl: "",
  },
  {
    title: "CLAT Seats 2024: Domicile and General Seat Matrix",
    imageUrl: BlogsImg,
    postUrl:
      "",
  },
  {
    title: "NLU Admission Process 2025 : Application, Eligibility & Dates",
    imageUrl: BlogsImg,
    postUrl: "",
  },
];

const BlogList = () => {
  return (
    <div className={styles.container}>
      {blogPosts.map((post, index) => (
        <div key={index} className={styles.blogItem}>
          {/* Content Section */}
          <div className={styles.content}>
            <h3 className={styles.title}>
              <a href={post.postUrl} className={styles.link} title={post.title}>
                {post.title}
              </a>
            </h3>
          </div>

          {/* Image Section */}
          <div className={styles.imageContainer}>
            <a href={post.postUrl} className={styles.imageLink}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              ></div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

import React from "react";
import styles from "./DontMiss.module.css";
import BlogsImg from "../../../assets/blogImages/Blogs.avif";

const Article = ({ href, imgUrl, title, category, author, authorHref }) => {
  return (
    <div className={styles.article}>
      <div className={`${styles.articleImage} ${styles.articleImageLg}`}>
        <a href={href} rel="bookmark" title={title}>
          <img
            src={imgUrl}
            alt={title}
            className={styles.articleImageWrapper}
          />
        </a>
      </div>

      <div className={styles.articleContent}>
        <h3 className={styles.articleTitle}>
          <a href={href} rel="bookmark" title={title}>
            {title}
          </a>
        </h3>

        <div className={styles.articleCategoryAuthor}>
          <a href={category.href} className={styles.categoryLink}>
            {category.name}
          </a>
          <span className={styles.separator}>|</span>
          <a href={authorHref} className={styles.authorLink}>
            {author}
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogPost = ({ href, imgUrl, title, category, date }) => {
  return (
    <div className={styles.blogPost}>
      <div className={styles.blogPostImageWrapper}>
        <a href={href} rel="bookmark" title={title}>
          <img src={imgUrl} alt={title} className={styles.blogPostImage} />
        </a>
      </div>

      <div className={styles.blogPostContent}>
        <h3 className={styles.blogPostTitle}>
          <a href={href} rel="bookmark" title={title}>
            {title}
          </a>
        </h3>
        <div className={styles.blogPostCategoryDate}>
          <a href={category.href} className={styles.blogPostCategoryLink}>
            {category.name}
          </a>
          <span className={styles.separator}>|</span>
          <time dateTime={date} className={styles.blogPostDate}>
            {new Date(date).toDateString()}
          </time>
        </div>
      </div>
    </div>
  );
};

const DontMiss = () => {
  return (
    <div className={styles.dontMissContainer}>
      <div className={styles.dontMissContentWrapper}>
        <div>
          <h3 className={styles.dontMissTitle}>Information Bulletin</h3>{" "}
          <div className={styles.leftColumn}>
            <Article
              href=""
              imgUrl={BlogsImg}
              title="Top 15 MBA Colleges Accepting SNAP Score"
              category={{
                href: "",
                name: "B-Schools",
              }}
              author="Sushmita Kshatri"
              authorHref=""
            />
            <Article
              href=""
              imgUrl={BlogsImg}
              title="Top 15 MBA Colleges Accepting SNAP Score"
              category={{
                href: "",
                name: "B-Schools",
              }}
              author="Sushmita Kshatri"
              authorHref=""
            />
            <Article
              href=""
              imgUrl={BlogsImg}
              title="Top 15 MBA Colleges Accepting SNAP Score"
              category={{
                href: "",
                name: "B-Schools",
              }}
              author="Sushmita Kshatri"
              authorHref=""
            />
            <Article
              href=""
              imgUrl={BlogsImg}
              title="Top 15 MBA Colleges Accepting SNAP Score"
              category={{
                href: "",
                name: "B-Schools",
              }}
              author="Sushmita Kshatri"
              authorHref=""
            />
            {/* Add other <Article /> components as required */}
          </div>
        </div>

        <div className={styles.divider}></div>

        <div>
          {" "}
          <div className={styles.rightColumn}>
            <BlogPost
              href=""
              imgUrl={BlogsImg}
              title="CAT 2024 : Last 2 Week Strategy & Mistakes to Avoid"
              category={{
                href: "",
                name: "CAT & Non-CAT",
              }}
              date="2024-11-11T16:06:52+05:30"
            />
            <BlogPost
              href=""
              imgUrl={BlogsImg}
              title="CAT 2024 : Last 2 Week Strategy & Mistakes to Avoid"
              category={{
                href: "",
                name: "CAT & Non-CAT",
              }}
              date="2024-11-11T16:06:52+05:30"
            />
            <BlogPost
              href=""
              imgUrl={BlogsImg}
              title="CAT 2024 : Last 2 Week Strategy & Mistakes to Avoid"
              category={{
                href: "",
                name: "CAT & Non-CAT",
              }}
              date="2024-11-11T16:06:52+05:30"
            />
            <BlogPost
              href=""
              imgUrl={BlogsImg}
              title="CAT 2024 : Last 2 Week Strategy & Mistakes to Avoid"
              category={{
                href: "",
                name: "CAT & Non-CAT",
              }}
              date="2024-11-11T16:06:52+05:30"
            />
            {/* Add other <BlogPost /> components as required */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMiss;

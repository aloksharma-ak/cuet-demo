import React from "react";
import styles from "./DontMiss.module.css";
import { Link } from "react-router-dom";
import { articlesData, blogPostsData } from '../blogData/dontMissData'



const Article = ({ href, imgUrl, title, category, author, authorHref }) => {
  return (
    <div className={styles.article}>
      <div className={`${styles.articleImage} ${styles.articleImageLg}`}>
        <Link to={`/blogs/${href}`} rel="bookmark" title={title}>
          <img
            src={imgUrl}
            alt={title}
            className={styles.articleImageWrapper}
          />
        </Link>
      </div>

      <div className={styles.articleContent}>
        <h3 className={styles.articleTitle}>
          <Link to={`/blogs/${href}`} rel="bookmark" title={title}>
            {title}
          </Link>
        </h3>

        <div className={styles.articleCategoryAuthor}>
          <Link to={`/blogs/${category.href}`} className={styles.categoryLink}>
            {category.name}
          </Link>
          <span className={styles.separator}>|</span>
          <Link to={`/blogs/${authorHref}`} className={styles.authorLink}>
            {author}
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogPost = ({ href, imgUrl, title, category, date }) => {
  return (
    <div className={styles.blogPost}>
      <div className={styles.blogPostImageWrapper}>
        <Link to={`/blogs/${href}`} rel="bookmark" title={title}>
          <img src={imgUrl} alt={title} className={styles.blogPostImage} />
        </Link>
      </div>

      <div className={styles.blogPostContent}>
        <h3 className={styles.blogPostTitle}>
          <Link to={`/blogs/${href}`} rel="bookmark" title={title}>
            {title}
          </Link>
        </h3>
        <div className={styles.blogPostCategoryDate}>
          <Link to={`/blogs/${category.href}`} className={styles.blogPostCategoryLink}>
            {category.name}
          </Link>
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
        <div className={styles.leftColumnWrapper}>
          <h3 className={styles.dontMissTitle}>Information Bulletin</h3>{" "}
          <div className={styles.leftColumn}>
            {articlesData.map((article) => (
              <Article
                key={article.id}
                href={article.href}
                imgUrl={article.imgUrl}
                title={article.title}
                category={article.category}
                author={article.author}
                authorHref={article.authorHref}
              />
            ))}
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.rightColumnWrapper}>
          <div className={styles.rightColumn}>
            {blogPostsData.map((post) => (
              <BlogPost
                key={post.id}
                href={post.href}
                imgUrl={post.imgUrl}
                title={post.title}
                category={post.category}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DontMiss;

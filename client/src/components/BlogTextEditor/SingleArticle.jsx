import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import styles from "./SingleArticle.module.css";

const SingleArticle = () => {
  const { slug } = useParams(); // Get slug from the URL
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the article by slug
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/getArticle/${slug}`);
        setArticle(response.data.article);
      } catch (error) {
        setError("Failed to fetch the article.");
      }
    };

    fetchArticle();
  }, [slug]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.SingleArticle}>
      <div className={styles.container}>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.shortDesc}>{article.desc}</p>
        <div className={styles.details}>
          <h3 className={styles.author}>{article.author}</h3>
          <span className={styles.time}>{format(article.createdAt)}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.textContent }} />
      </div>
    </section>
  );
};

export default SingleArticle;

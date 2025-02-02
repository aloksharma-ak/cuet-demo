import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import styles from "./ArticlesList.module.css";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch articles from the backend
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/api/getArticles");
        setArticles(response.data.articles);
      } catch (error) {
        setError("Failed to load articles");
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles.ArticlesList}>
      {error && <span className={styles.error}>{error}</span>}
      {articles && (
        <section className={styles.container}>
          {articles.map((post) => (
            <div className={styles.cardPost} key={post._id}>
              <Link to={`${post.slug}`} className={styles.title}>
                {post.title}
              </Link>
              <p className={styles.shortDesc}>{post.desc}</p>
              <div className={styles.details}>
                <h3 className={styles.author}>{post.author}</h3>
                <span className={styles.time}>{format(post.createdAt)}</span>
              </div>
              <Link to={`${post.slug}`} className={styles.readMore}>
                Read More
              </Link>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ArticlesList;

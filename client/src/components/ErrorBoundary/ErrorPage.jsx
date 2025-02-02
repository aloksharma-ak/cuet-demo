import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.errorPage}>
      <h1>404 - Page Not Found</h1>
      <p>
        The page you’re looking for doesn’t exist or might have been moved. Let’s
        get you back on track!
      </p>
      <div className={styles.errorActions}>
        <button onClick={() => navigate("/")} className={styles.homeButton}>
          Back to Homepage
        </button>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Return to Previous Page
        </button>
      </div>
      <p>
        Need assistance? Feel free to{" "}
        <a href="mailto:cuetplus@gmail.com" className={styles.contactLink}>
          contact us
        </a>
        .
      </p>
    </div>
  );
};

export default ErrorPage;

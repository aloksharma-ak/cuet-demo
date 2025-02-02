import React from "react";
import styles from "./RedNewsletterForm.module.css";
import BlogsImg from "../../../assets/blogImages/Blogs.avif";

const Article = ({ title, link, date }) => {
  return (
    <div className={styles.article}>
      <h3 className={styles.articleTitle}>
        <a href={link}>{title}</a>
      </h3>
      <div className={styles.articleDateContainer}>
        <p className={styles.articleDate}>{date}</p>
      </div>
    </div>
  );
};

const articles = [
  {
    title: "Mastering the Art of Answer Writing: Top Examination Techniques",
    link: "",
    date: "December 15, 2024",
  },
  {
    title: "Effective Exam Strategies: How to Attempt Papers for Maximum Marks",
    link: "",
    date: "December 15, 2024",
  },
  {
    title: " How to Manage Time During Exams: Pro Techniques for Students",
    link: "",
    date: "December 15, 2024",
  },
  {
    title: "The Science of Smart Revision: Techniques to Retain More in Less Time",
    link: "",
    date: "December 15, 2024",
  },
  {
    title: "Multiple-Choice Question Techniques: How to Ace Objective Exams",
    link: "",
    date: "December 15, 2024",
  },
];

const RedNewsletterForm = () => {
  return (
    <div>
      {/* Newsletter Form */}
      {/* <form className={styles.form}>
        <input type="hidden" name="list" value="402" />
        <input type="hidden" name="double_opt_in" value="" />
        <input type="url" name="rdr_url" value="" className={styles.hidden} />

        <div>
          <input
            type="email"
            name="email"
            aria-label="email"
            placeholder="Email address"
            required
            className={styles.input}
          />

          <button type="submit" name="tds-subscribe" className={styles.button}>
            I want in {"->"}
          </button>
        </div>

        <div className={styles.checkbox}>
          <input
            id="pp_checkbox_tdi_109"
            value="Y"
            type="checkbox"
            className={styles.cursorPointer}
          />
          <label htmlFor="pp_checkbox_tdi_109" className={styles.label}>
            I&apos;ve read and accept the{" "}
            <a href="#" className={styles.labelLink}>
              Privacy Policy
            </a>
            .
          </label>
        </div>
      </form> */}

      {/* Technology Section */}
      <div className={styles.technologySection}>
        <h3 className={styles.technologyTitle}>Examination</h3>
        <a
          href=""
          title="Importance of Mock Tests for CUET UG 2025"
          className={styles.technologyLink}
          style={{
            backgroundImage: `url(${BlogsImg})`,
            backgroundSize: "cover",
          }}
        >
          <span className={styles.technologyContent}>
            <h3 className={styles.technologyTitleText}>
              Importance of Mock Tests for CUET UG 2025
            </h3>
            <p className={styles.technologyDate}>
              Anand Jha - December 15, 2024
            </p>
          </span>
        </a>
      </div>

      {/* Examination Techniques Section */}
      <div className={styles.healthSection}>
        <h3 className={styles.healthTitle}>Examination Techniques</h3>
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            link={article.link}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
};

export default RedNewsletterForm;

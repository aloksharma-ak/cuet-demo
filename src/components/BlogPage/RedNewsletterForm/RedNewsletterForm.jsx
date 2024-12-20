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
    title: "Importance of Mock Tests for CAT 2025",
    link: "",
    date: "November 15, 2024",
  },
  {
    title: "Best Books for Quantitative Aptitude for CAT",
    link: "",
    date: "November 15, 2024",
  },
  {
    title: "IIFT Convert Soumyadeep Shares His Preparation Strategy",
    link: "",
    date: "November 15, 2024",
  },
  {
    title: "CUET UG Syllabus 2025: All Subjects and Sections",
    link: "",
    date: "November 15, 2024",
  },
  {
    title: "NLSIU Bangalore: Best NLU in India",
    link: "",
    date: "November 15, 2024",
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
        <h3 className={styles.technologyTitle}>Technology</h3>
        <a
          href=""
          title="Importance of Mock Tests for CAT 2025"
          className={styles.technologyLink}
          style={{
            backgroundImage: `url(${BlogsImg})`,
            backgroundSize: "cover",
          }}
        >
          <span className={styles.technologyContent}>
            <h3 className={styles.technologyTitleText}>
              Importance of Mock Tests for CAT 2025
            </h3>
            <p className={styles.technologyDate}>
              Anand Jha - November 15, 2024
            </p>
          </span>
        </a>
      </div>

      {/* Health Section */}
      <div className={styles.healthSection}>
        <h3 className={styles.healthTitle}>Health</h3>
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

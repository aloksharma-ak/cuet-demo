import React from "react";
import styles from "./LatestPosts.module.css";
import RedNewsletterForm from "../RedNewsletterForm/RedNewsletterForm";
import BlogsImg from "../../../assets/backImgBody.png";

const BlogPost = ({
  title,
  link,
  category,
  categoryLink,
  author,
  authorLink,
  imageUrl,
}) => {
  return (
    <div className={styles.articlePost}>
      <div className={styles.imageContainer}>
        <a href={link}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </a>
      </div>
      <h3 className={styles.title}>
        <a href={link}>{title}</a>
      </h3>
      <div className={styles.details}>
        <a href={categoryLink} className={styles.category}>
          | {category} |
        </a>{" "}
        <a href={authorLink}>{author}</a>
      </div>
    </div>
  );
};

const LatestPosts = () => {
  const articles = [
    {
      title:
        "Top Tips from Experts: How to Prepare for CUET and CBSE Simultaneously",
      para: "Learn to balance board exam preparation with CUET strategies for guaranteed success in both...",
      url: "",
      imgUrl: BlogsImg,
      category: "CUET UG",
      author: "Anand Jha",
      date: "November 14, 2024",
    },
    {
      title: "Expert Advice: Common Mistakes to Avoid During CUET and CBSE Prep",
      para: 'Avoid these pitfalls in your study plan and maximize your performance in both exams...',
      url: "",
      imgUrl: BlogsImg,
      category: "CUET Mini Mock Series",
      author: "Anand Jha",
      date: "November 14, 2024",
    },
    {
      title:
        "Time Management Tips: Balancing CBSE Boards and CUET Preparation",
        para: 'A practical guide to managing your time effectively while preparing for two critical exams...',
      url: "",
      imgUrl: BlogsImg,
      category: "CUET UG",
      author: "Anand Jha",
      date: "November 13, 2024",
    },
    {
      title:
        "How to Ace CUET and CBSE with Expert-Recommended Study Resources",
        para: 'Discover the best books, mock tests, and online tools for acing CUET and CBSE board exams...',
      url: "",
      imgUrl: BlogsImg,
      category: "CUET UG",
      author: "Anand Jha",
      date: "November 11, 2024",
    },
    {
      title: "Subject-Wise Preparation Tips for CUET and CBSE Exams",
      para: 'Expert suggestions for mastering key subjects, including English, Science, Math, and General Knowledge...',
      url: "",
      imgUrl: BlogsImg,
      category: "IPMAT",
      author: "Anand Jha",
      date: "November 11, 2024",
    },
    {
      title: "Master the CUET General Test While Excelling in CBSE Boards",
      para: 'Pro tips to tackle CUET’s general aptitude section without compromising on board exam preparation...',
      url: "",
      imgUrl: BlogsImg,
      category: "CUET UG",
      date: "November 15, 2024",
    },
  ];

  const blogData = [
    {
      title: "CBSE vs. CUET: Expert Insights on Prioritizing Preparation",
      link: "",
      category: "CUET UG",
      categoryLink: "",
      author: "Anand Jha",
      authorLink: "",
      imageUrl: BlogsImg,
    },
    {
      title:
        "CUET and CBSE Exam Stress? Experts Share Strategies to Stay Calm",
      link: "",
      category: "CUET UG",
      categoryLink: "",
      author: "Anand Jha",
      authorLink: "",
      imageUrl: BlogsImg,
    },
    {
      title:
        "How to Use CBSE Knowledge as a Foundation for CUET Success",
      link: "",
      category: "CUET UG",
      categoryLink: "",
      author: "Anand Jha",
      authorLink: "",
      imageUrl: BlogsImg,
    },
    {
      title: "Expert-Backed Revision Techniques for CUET and CBSE Students",
      link: "",
      category: "CUET UG",
      categoryLink: "",
      author: "Anand Jha",
      authorLink: "",
      imageUrl: BlogsImg,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.articleContainer}>
          {articles.map((article, index) => (
            <div key={index} className={styles.article}>
              <div className={styles.imageContainer}>
                <a href={article.url}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${article.imgUrl})` }}
                  />
                </a>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>
                  <a href={article.url}>{article.title}</a>
                </h3>
                <p className={styles.paragraph}>{article.para}</p>
                <div className={styles.details}>
                  <span className={styles.category}>
                    | {article.category} |
                  </span>
                  <span className={styles.date}>{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sidebar}>
        {blogData.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            link={post.link}
            category={post.category}
            categoryLink={post.categoryLink}
            author={post.author}
            authorLink={post.authorLink}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
      <div className={styles.newsletter}>
        <RedNewsletterForm />
      </div>
    </div>
  );
};

export default LatestPosts;

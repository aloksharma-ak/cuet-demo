import React from "react";
import styles from "./LatestPosts.module.css";
import RedNewsletterForm from "../RedNewsletterForm/RedNewsletterForm";
import BlogsImg from "../../../assets/blogImages/Blogs.avif";

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
        </a>
        <a href={authorLink}>{author}</a>
      </div>
    </div>
  );
};

const LatestPosts = () => {
  const articles = [
    {
      title:
        "CUET 99.96%iler, IIM Ahmedabad Convert Kislay Shares his Secret Strategy",
      url: "",
      imgUrl: BlogsImg,
      category: "CUET & Non-CUET",
      author: "Anand Jha",
      date: "November 14, 2024",
    },
    {
      title: "CUET Mini Mock Series by CUETPlus: 25th Dec 2024",
      url: "",
      imgUrl: BlogsImg,
      category: "CUET Mini Mock Series",
      author: "Anand Jha",
      date: "November 14, 2024",
    },
    {
      title:
        "How a Small Town Boy Scored CUET 99.76%ile and Converted IIM Bangalore",
      url: "",
      imgUrl: BlogsImg,
      category: "CUET & Non-CUET",
      author: "Anand Jha",
      date: "November 13, 2024",
    },
    {
      title:
        "Solve 100+ CUET Level Algebra Questions in 10 Hours : Algebra Marathon by CUETPlus",
      url: "",
      imgUrl: BlogsImg,
      category: "CUET & Non-CUET",
      author: "Anand Jha",
      date: "November 11, 2024",
    },
    {
      title: "IPMAT Registration Details: Fees, Last Date, Eligibility & More",
      url: "",
      imgUrl: BlogsImg,
      category: "IPMAT",
      author: "Anand Jha",
      date: "November 11, 2024",
    },
    {
      title: "IIFT Convert Soumyadeep Shares His Preparation Strategy",
      url: "",
      imgUrl: BlogsImg,
      category: "CUET & Non-CUET",
      date: "November 15, 2024",
    },
  ];

  const blogData = [
    {
      title: "CUET Mini Mock Series by CUETPlus: 14th November 2024",
      link: "",
      category: "CUET Mini Mock Series",
      categoryLink: "",
      author: "Anand Jha",
      authorLink: "",
      imageUrl: BlogsImg,
    },
    {
      title:
        "How a Small Town Boy Scored CUET 99.76%ile and Converted IIM Bangalore",
      link: "",
      category: "CUET & Non-CUET",
      categoryLink: "",
      author: "Anand Jha",
      authorLink: "",
      imageUrl: BlogsImg,
    },
    {
      title:
        "Solve 100+ CUET Level Algebra Questions in 10 Hours : Algebra Marathon by CUETPlus",
      link: "",
      category: "CUET & Non-CUET",
      categoryLink: "",
      author: "Anand Jha",
      authorLink: "",
      imageUrl: BlogsImg,
    },
    {
      title: "IPMAT Registration Details: Fees, Last Date, Eligibility & More",
      link: "",
      category: "IPMAT",
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

import React, { useEffect } from "react";
import styles from "./BlogHero.module.css";
import BlogPosts from "../BlogPosts/BlogPosts";
import HeroSectionCard from "../HeroSectionCard/HeroSectionCard";
import TopPosts from "../TopPosts/TopPosts";
import BlogsImg from "../../../assets/blogImages/Blogs.avif";
import PodcastNewsletter from "../PodcastNewsletter/PodcastNewsletter";

const BlogHero = () => {
  const articles = [
    {
      title: "From 83%ile to 99.03%ile: The Journey of Karal Maheshwari",
      link: "",
      imageUrl: BlogsImg,
      category: "Success Stories",
      excerpt:
        "Karal Maheshwari transformed his CUET score from 83%ile to 99.03%ile in his third attempt. Learn how his persistence and strategic planning made it possible.",
    },
    {
      title: "99.11%iler Shares His CUET Preparation Tips",
      link: "",
      imageUrl: BlogsImg,
      category: "Success Stories",
      excerpt:
        "Abhinay Shrivastava, a student of FMS Delhi, cleared the CUET exam with 99.11%ile. Discover the strategies that helped him achieve this success.",
    },
    {
      title: "Rushikesh Patil: From First Attempt to IIM Bangalore",
      link: "",
      imageUrl: BlogsImg,
      category: "Success Stories",
      excerpt:
        "Rushikesh Patil cleared CUET in his first attempt and secured admission to IIM Bangalore. Learn how his structured approach made it possible.",
    },
  ];

  const additionalArticles = [
    {
      title: "CUET UG Syllabus 2025: All Subjects and Sections",
      link: "",
      imageUrl: BlogsImg,
      category: "Soumya Singh",
      author: "December 10, 2024",
    },
    {
      title:
        "Top 12 MBA Colleges in Uttar Pradesh: Ranking, Fees, Exams, Admission",
      link: "",
      imageUrl: BlogsImg,
      category: "B-Schools",
      author: "Subham Har",
    },
    {
      title: "Top 50 MBA Colleges in the World : Rank, Fee & Placement",
      link: "",
      imageUrl: BlogsImg,
      category: "B-Schools",
      author: "Subham Har",
    },
    {
      title: "Top 12 GMAT Colleges in India : Know Programs, Fee & Package",
      link: "",
      imageUrl: BlogsImg,
      category: "B-Schools",
      author: "Mansi Priyal",
    },
  ];

  const bigArticles = [
    {
      title:
        "CUET Admit Card 2025 – ReleaseDate, Steps to Download and OtherDetails",
      link: "",
      imageUrl: BlogsImg,
      category: "Soumya Singh",
      author: "December 10, 2024",
      desc: "CUET admit card 2025 release date is December 20, 2024 and itwill be available in the online mode. The admit card has detailssuch as name of the candidate, photo, roll number, exam centre,reporting time, etc. CUET admit card download link isxatonline.in. The admit card can be downloaded using the ID andthe date of birth of the candidate. CUET admit card 2025 isissued only to candidates who have completed the registrationprocess successfully. Read further to know more details aboutsteps to download admit...",
    },
  ];

  const topPosts = [
    {
      title: "How Karan Converted FMS Delhi with Less Than 60% in Graduation",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET & Non-CUET |",
    },
    {
      title: "How Karal Went From CUET 83%ile to 99.03%ile",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET & Non-CUET |",
    },
    {
      title:
        "FMS Delhi Student, CUET 99.11%iler Shares His CUET Preparation Journey",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET EXAM |",
    },
    {
      title: "How Rushikesh Converted IIM Bangalore in his First Attempt",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET & Non-CUET |",
    },
    {
      title: "How 99.83%iler Rishav Converted IIM ABC With Job",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET & Non-CUET |",
    },
  ];

  useEffect(() => {
    if (location.hash === "#Notifications") {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -100; // Fixed offset for proper positioning
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className={styles.latestBlogHead}>
        <h2 className={styles.latestBlogTitle}>Latest Blogs</h2>
        <p className={styles.latestBlogDesc}>
          Everything you need to know about CUET 2025
        </p>
      </div>
      <section className={styles.section}>
        {/* <div className={`${styles.container} ${styles.grid} ${styles.gridCols3}`}>
        {articles.map((article, index) => (
          <div key={index} className={styles.card}>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${article.imageUrl})` }}
              ></div>
            </a>
            <div className={styles.cardContent}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <h3 className={styles.cardTitle}>{article.title}</h3>
              </a>
              <div className={styles.cardCategory}>| {article.category} |</div>
              <p className={styles.cardExcerpt}>{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div> */}

        <div className={`${styles.flex}`}>
          <div className={`${styles.container} ${styles.bigArticle}`}>
            {bigArticles.map((item, index) => (
              <div key={index} className={styles.card}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div
                    className={styles.cardImage1}
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                </a>
                <div className={styles.cardContent}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3
                      className={`${styles.cardTitle2} ${styles.cardTextLeft}`}
                    >
                      {item.title}
                    </h3>
                  </a>
                  <div
                    className={`${styles.cardCategory} ${styles.cardTextLeft}`}
                  >
                    <span>{item.category} - </span>
                    <span>{item.author}</span>
                  </div>
                  <p className={`${styles.cardDesc} ${styles.cardExcerpt}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`${styles.container} ${styles.smallCard} ${styles.mt2}`}
          >
            {additionalArticles.map((item, index) => (
              <div key={index} className={styles.card}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div
                    className={styles.cardImage2}
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                </a>
                <div className={styles.cardContent}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3
                      className={`${styles.cardTitle2} ${styles.cardTextLeft}`}
                    >
                      {item.title}
                    </h3>
                  </a>
                  <div
                    className={`${styles.cardCategory} ${styles.cardTextLeft}`}
                  >
                    <span>{item.category} - </span>
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Letters */}
        <PodcastNewsletter />
        {/* Notification */}
        <div id="Notifications"
          className={`${styles.container} ${styles.flexContainer} ${styles.flexRow}`}
        >
          <div
            className={`${styles.container} ${styles.postsContainer} ${styles.postsContainerWidth} ${styles.sticky}`}
          >
            <h2 className={`${styles.notification} ${styles.notificationMobile}`}>Notification</h2>
            <h2 className={styles.topPosts}>Top 5 This Week</h2>
            {topPosts.map((post, index) => (
              <div key={index}>
                <TopPosts {...post} />
              </div>
            ))}
          </div>
          <div className={`${styles.flexColumn} ${styles.postsContainer}`}>
            <h2 className={styles.notification}>Notification</h2>
            <div className={styles.notificationCard}>
              <HeroSectionCard />
              <HeroSectionCard />
              <HeroSectionCard />
            </div>
          </div>
          <div
            className={`${styles.container} ${styles.postsContainer} ${styles.postsContainerWidth} ${styles.sticky}`}
            style={{ paddingBottom: "1rem" }}
          >
            <BlogPosts />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHero;

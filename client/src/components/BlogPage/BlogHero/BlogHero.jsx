import React, { useEffect } from "react";
import styles from "./BlogHero.module.css";
import BlogPosts from "../BlogPosts/BlogPosts";
import HeroSectionCard from "../HeroSectionCard/HeroSectionCard";
import TopPosts from "../TopPosts/TopPosts";
import PodcastNewsletter from "../PodcastNewsletter/PodcastNewsletter";
import BlogsImg from "../../../assets/backImgBody.png";
import article_5 from "../../../assets/blogImages/AdmitCard.jpg";
import timeTableImg from "../../../assets/latestBlogCuetTimeTableImg.jpg";
import blogIMG1 from "../../../assets/blogIMG1.jpg";
import blogIMG2 from "../../../assets/blogIMG2.png";
import article2 from "../../../assets/UniversityDemoImg.jpg";

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
      title: `CUET UG 2025 Timetable | NTA Exam Calendar Expected Soon`,
      link: "",
      imageUrl: timeTableImg,
      category: "Dec 10, 2024",
      author: "Soumya Singh",
    },
    {
      title: "Top 20 CUET Collages in India Accepting 2025 Exam",
      link: "",
      imageUrl: article2,
      category: "Jan 1, 2025",
      author: "",
    },
    {
      title:
        "CBSE Announces Subject-Wise Marks Breakdown for Class 10, 12 Board Exams",
      link: "",
      imageUrl: blogIMG2,
      category: "Jan 1, 2025",
      author: "Anand",
    },
    {
      title:
        "CUET 2025: Your Ultimate Guide to University Admissions, Official Websites & Application Process",
      link: "",
      imageUrl: blogIMG1,
      category: "Jan 1, 2025",
      author: "Anand",
    },
  ];

  const bigArticles = [
    {
      title:
        "CUET Admit Card 2025 – ReleaseDate, Steps to Download and OtherDetails",
      link: "",
      imageUrl: article_5,
      category: "Soumya Singh",
      author: "December 10, 2024",
      desc: "CUET admit card 2025 release date is December 20, 2024 and itwill be available in the online mode. The admit card has detailssuch as name of the candidate, photo, roll number, exam centre,reporting time, etc. CUET admit card download link isxatonline.in. The admit card can be downloaded using the ID andthe date of birth of the candidate. CUET admit card 2025 isissued only to candidates who have completed the registrationprocess successfully. Read further to know more details aboutsteps to download admit...",
    },
  ];

  const topPosts = [
    {
      title: "CUET 2025 Registration Opens: Key Dates and Application Process",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET UG |",
    },
    {
      title: "CUET 2025 Exam Pattern Revealed: What Aspirants Should Expect",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET UG |",
    },
    {
      title: "Top Preparation Strategies for CUET 2025: Expert Advice",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET EXAM |",
    },
    {
      title: "CUET 2025 Syllabus Updates: New Topics and Focus Areas",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET UG |",
    },
    {
      title: "Eligibility Criteria for CUET 2025: Are You Qualified?",
      link: "",
      imgUrl: BlogsImg,
      category: "| CUET UG |",
    },
  ];

  const blogData = [
    {
      image: BlogsImg,
      title:
        "Understanding the CUET 2025 Reservation Policy: Seats Allocation Explained",
      link: "/blogs/startup-india-initiative",
      metaCategory: "CUET Plus Initiatives",
      author: "Anand Jha",
      date: "July 14, 2023",
      excerpt:
        "Insights into the reservation criteria and how seats are distributed among different categories...",
    },
    {
      image: BlogsImg,
      title: "CUET 2025 Mock Tests: Where to Find and How to Utilize Them",
      link: "/blogs/cuet-preparation-tips-2025",
      metaCategory: "CUET Preparation",
      author: "Priya Sharma",
      date: "December 20, 2024",
      excerpt:
        "A curated list of reliable mock test resources to enhance your preparation for CUET 2025...",
    },
    {
      image: BlogsImg,
      title: "CUET 2025 Counseling Process: What Happens After the Results?",
      link: "/blogs/future-of-education",
      metaCategory: "Education Insights",
      author: "Anand Jha",
      date: "November 15, 2024",
      excerpt:
        "An overview of the post-exam procedures, including counseling sessions and seat allotment...",
    },
    {
      image: BlogsImg,
      title: "Success Stories: Toppers Share Their CUET Preparation Journey",
      link: "/blogs/success-story",
      metaCategory: "Education Insights",
      author: "Anand Jha",
      date: "November 15, 2024",
      excerpt:
        "Inspiring accounts from previous CUET top scorers on their study techniques and tips for aspirants...",
    },
    {
      image: BlogsImg,
      title: "CUET 2025 Admit Card Release: How to Download and Important Instructions",
      link: "/blogs/future-of-education",
      metaCategory: "Education Insights",
      author: "Anand Jha",
      date: "November 15, 2024",
      excerpt:
        "Step-by-step guide to accessing your admit card and essential guidelines for exam day...",
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
                      className={`${styles.cardTitle} ${styles.cardTextLeft}`}
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
        <div
          id="Notifications"
          className={`${styles.container} ${styles.flexContainer} ${styles.flexRow}`}
        >
          <div
            className={`${styles.container} ${styles.postsContainer} ${styles.postsContainerWidth} ${styles.sticky}`}
          >
            <h2
              className={`${styles.notification} ${styles.notificationMobile}`}
            >
              Notification
            </h2>
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
              {blogData.map((data, index) => (
                <HeroSectionCard key={index} {...data} />
              ))}
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

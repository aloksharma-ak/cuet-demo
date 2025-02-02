import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../components/BlogPage/BlogPage.module.css";
import BlogHero from "../components/BlogPage/BlogHero/BlogHero";
import DontMiss from "../components/BlogPage/DontMiss/DontMiss";
import ExamsBlogs from "../components/BlogPage/ExamBlog/ExamBlog";
import LatestPosts from "../components/BlogPage/LatestPosts/LatestPosts";

import {
  articlesData,
  blogPostsData,
} from "../components/BlogPage/blogData/dontMissData";

const BlogPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#LatestBlogs") {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -100; // Fixed offset for proper positioning
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === "#InformationBulletin") {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -100; // Fixed offset for proper positioning
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === "#SalahPlus") {
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
    <div>
      <Helmet>
        <title>
          CUETPlus Blogs - Latest CUET Preparation Tips, News, and Updates
        </title>
        <meta
          name="description"
          content="Stay updated with the latest CUET preparation tips, expert advice, news, and updates on CUET exams. Learn from our blog at CUETPlus!"
        />
        <meta
          name="keywords"
          content="CUET blogs, CUET preparation, CUET exam news, CUET tips, CUET study resources, CUETPlus blog, CUET updates"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CUETPlus Team" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="CUETPlus Blogs - Latest CUET Preparation Tips, News, and Updates"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest CUET preparation tips, expert advice, news, and updates on CUET exams. Learn from our blog at CUETPlus!"
        />
        <meta
          property="og:image"
          content="https://cuet.plus/assets/cuetplus-blog-image.jpg"
        />
        <meta name="og:image:alt" content="CUETPlus Blog Banner" />
        <meta property="og:url" content="https://cuet.plus/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CUETPlus" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CUETPlusOfficial" />
        <meta
          name="twitter:title"
          content="CUETPlus Blogs - Latest CUET Preparation Tips, News, and Updates"
        />
        <meta
          name="twitter:description"
          content="Stay updated with the latest CUET preparation tips, expert advice, news, and updates on CUET exams. Learn from our blog at CUETPlus!"
        />
        <meta
          name="twitter:image"
          content="https://cuet.plus/assets/cuetplus-blog-image.jpg"
        />
        <meta name="twitter:image:alt" content="CUETPlus Blog Banner" />
      </Helmet>

      {/* Latest Blogs */}
      <div id="LatestBlogs" />
      <BlogHero />

      {/* Information Bulletin */}
      <div id="InformationBulletin" />
      <DontMiss />

      {/* <ExamsBlogs /> */}

      {/* SalahPlus */}
      <h2
        id="SalahPlus"
        style={{
          background: "#fff",
          color: "#000",
          fontSize: "2.8rem",
          fontWeight: "bold",
          width: "100%",
          padding: "1rem",
          textAlign: "center",
          fontStyle: "italic",
          scrollMarginTop: "100px",
        }}
      >
        Expert Advice
      </h2>
      <LatestPosts />
    </div>
  );
};

export default BlogPage;

export const BlogDetailPage = () => {
  const { blogUrl } = useParams();

  // Finding the article based on the URL parameter
  const article = articlesData.find((article) => article.href === blogUrl);
  const blog = blogPostsData.find((blog) => blog.href === blogUrl)

  // Dynamically store either article or blog, whichever is found
  const foundContent = article || blog;

  return (
    <section className={styles.blogContainer}>
      {foundContent ? (
        <div className={styles.blogContent}>
          {foundContent.component ? (
            foundContent.component
          ) : (
            <h2 className={styles.blogTitle}>
              Blog details are not available
            </h2>
          )}
        </div>
      ) : (
        <h2 className={styles.notFound}>Blog not found</h2>
      )}
    </section>
  );
};

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogHero from "../components/BlogPage/BlogHero/BlogHero";
import DontMiss from "../components/BlogPage/DontMiss/DontMiss";
import ExamsBlogs from "../components/BlogPage/ExamBlog/ExamBlog";
import LatestPosts from "../components/BlogPage/LatestPosts/LatestPosts";

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

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FKSWC4KB96"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-FKSWC4KB96');
    `}
        </script>

        {/* Google Ads Conversion Tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16805748874"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'AW-16805748874');
    `}
        </script>

        {/* Google Tag Manager */}
        <script>
          {`
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l !== 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-TFD9H5H4');
    `}
        </script>
        {/* End Google Tag Manager */}

        {/* Conversion Reporting Script */}
        <script>
          {`
      function gtag_report_conversion(url) {
        var callback = function () {
          if (typeof url !== 'undefined') {
            window.location = url;
          }
        };
        gtag('event', 'conversion', {
          'send_to': 'AW-16805748874/23TjCK7NkfoZEIrBzc0-',
          'value': 30.0,
          'currency': 'INR',
          'event_callback': callback
        });
        return false;
      }
    `}
        </script>
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

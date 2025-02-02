import React, { useEffect, useState } from "react";
import styles from "./Delhi.module.css";
import { FaArrowUpLong } from "react-icons/fa6";
import { animateScroll as scroll } from "react-scroll";
import CuetGuideDelhi from "./DelhiComponent/CuetGuideDelhi/CuetGuideDelhi";
import IntroDelhi from "./DelhiComponent/introDelhi/introDelhi";
import { Helmet } from "react-helmet";

const Delhi = () => {
  // State to track the scroll position
  const [scrolling, setScrolling] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 300) {
      // Show the button if scrolled more than 300px
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Effect to add event listener on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    scroll.scrollToTop(); // Smooth scroll to top of the page
  };

  return (
    <div className={styles.Delhi}>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Best CUET Coaching in Delhi | Top Institutes & Expert Guidance
        </title>
        <meta
          name="description"
          content="Find the best CUET coaching in Delhi with expert teachers, personalized plans, and proven results. Start your journey to success with top-rated coaching institutes"
        />
        <meta
          name="keywords"
          content="best cuet coaching in delhi, cuet coaching in delhi, best cuet coaching, cuet online coaching, online cuet coaching, cuet 2025-2026, CUET preparation, CUET classes, CUET study material"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.cuet.plus/centers/best-cuet-coaching-in-delhi"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.cuet.plus/centers/best-cuet-coaching-in-delhi"
        />
        <meta name="author" content="Piyush Jaiswal" />

        <meta property="og:site_name" content="cuet.plus" />
        <meta property="og:type" content="Article" />
        <meta
          property="og:title"
          content="Best CUET Coaching in Delhi | Top Institutes & Expert Guidance"
        />
        <meta
          property="og:description"
          content="Find the best CUET coaching in Delhi with expert teachers, personalized plans, and proven results. Start your journey to success with top-rated coaching institutes"
        />
        <meta
          property="og:image"
          content="https://www.cuet.plus/assets/Blog-BbDrzsaS.jpg"
        />
        <meta
          property="og:url"
          content="https://www.cuet.plus/centers/best-cuet-coaching-in-delhi"
        />

        <meta name="twitter:card" content="CUET Plus Institute" />
        <meta name="twitter:site" content="cuet.plus" />
        <meta
          name="twitter:title"
          content="CUET Online Coaching - Best CUET Coaching | CUET Coaching"
        />
        <meta
          name="twitter:description"
          content="Best CUET Coaching for online & offline prep. Expert guidance, interactive classes, & study material to ace CUET. Start your journey today!"
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/image.jpg"
        />

        <meta
          property="og:title"
          content="CUET Online Coaching - Best CUET Coaching | CUET Coaching"
        />
        <meta
          property="og:description"
          content="Best CUET Coaching for online & offline prep. Expert guidance, interactive classes, & study material to ace CUET. Start your journey today!"
        />
        <meta property="og:url" content="https://www.facebook.com/cuetplus" />
        <meta
          property="og:image"
          content="https://www.facebook.com/photo/?fbid=283180278090091&set=a.136710486070405"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="CUET Coaching" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.cuet.plus/centers/best-cuet-coaching-in-delhi"
            },
            "headline": "Best CUET Coaching in Delhi – A Complete Guide for Aspiring Students",
            "description": "Find the best CUET coaching in Delhi with expert teachers, personalized plans, and proven results. Start your journey to success with top-rated coaching institutes.",
            "image": "https://www.cuet.plus/assets/Blog-BbDrzsaS.jpg",
            "author": {
              "@type": "Organization",
              "name": "Piyush Jaiswal"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CUET Plus",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.cuet.plus/assets/logo.png"
              }
            },
            "datePublished": "2024-12-18"
          }
        `}
        </script>
      </Helmet>

      <CuetGuideDelhi />
      <div id="section-1">
        <IntroDelhi />
      </div>

      {/* Scroll to Top Button */}
      {scrolling && (
        <button onClick={scrollToTop} className={styles.scrollToTopButton}>
          <FaArrowUpLong />
        </button>
      )}
    </div>
  );
};

export default Delhi;

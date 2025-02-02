import React, { useEffect, useState } from "react";
import styles from "./UttarPradesh.module.css";
import {
  cuetGuide,
  introductionContent,
  whyOptContent,
  choosingTheRightCoachingInstitute,
  benefitsOfCuetCoaching,
  cuetPlusCoachingInstitute,
  whyChooseCuetPlus,
  cuetFaqs,
  cuetConclusion,
} from "./UttarPradeshData/UttarPradeshData";
import { FaArrowUpLong } from "react-icons/fa6";
import { animateScroll as scroll } from "react-scroll";
import CuetGuide from "../Jharkhand/JharkhandComponent/CuetGuide";
import IntroductionLayout from "../Jharkhand/JharkhandComponent/IntroductionLayout";
import WhyOptForCuetCoaching from "../Jharkhand/JharkhandComponent/WhyOptForCuetCoaching";
import ChoosingTheRightCoaching from "../Jharkhand/JharkhandComponent/ChoosingTheRightCoaching";
import BenefitsOfCuetCoaching from "../Jharkhand/JharkhandComponent/BenefitsOfCuetCoaching";
import CoachingInstitute from "../Jharkhand/JharkhandComponent/CoachingInstitute";
import WhyChooseCuetPlus from "../Jharkhand/JharkhandComponent/WhyChooseCuetPlus";
import FaqLayout from "../Jharkhand/JharkhandComponent/FaqLayout";
import CuetConclusion from "../Jharkhand/JharkhandComponent/CuetConclusion";
import { Helmet } from "react-helmet";

const UttarPradesh = () => {
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
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Best CUET Coaching in UP: Top Institutes for Exam Success</title>
        <meta
          name="description"
          content="Explore the best CUET coaching in UP. Find expert faculty, affordable programs, and flexible learning options in cities like Lucknow, Kanpur, and Varanasi."
        />
        <meta
          name="keywords"
          content="best cuet coaching in UP, cuet coaching in UP, best cuet coaching, cuet online coaching, online cuet coaching, cuet 2025-2026, CUET preparation, CUET classes, CUET study material"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.cuet.plus/centers/best-cuet-coaching-in-uttar-pradesh"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.cuet.plus/centers/best-cuet-coaching-in-uttar-pradesh"
        />
        <meta name="author" content="Piyush Jaiswal" />
        {/* <!-- Open Graph meta tags --> */}

        <meta property="og:site_name" content="cuet.plus" />
        <meta property="og:type" content="Article" />
        <meta
          property="og:title"
          content="Best CUET Coaching in UP: Top Institutes for Exam Success"
        />
        <meta
          property="og:description"
          content="Explore the best CUET coaching in UP. Find expert faculty, affordable programs, and flexible learning options in cities like Lucknow, Kanpur, and Varanasi."
        />
        <meta
          property="og:image"
          content="https://www.cuet.plus/assets/Blog-BbDrzsaS.jpg"
        />
        <meta
          property="og:url"
          content="https://www.cuet.plus/centers/best-cuet-coaching-in-uttar-pradesh"
        />
        {/* <!-- Twitter card meta tags --> */}

        <meta name="twitter:card" content="CUET Plus Institute" />
        <meta name="twitter:site" content="cuet.plus" />
        <meta
          name="twitter:title"
          content="Best CUET Coaching in UP: Top Institutes for Exam Success"
        />
        <meta
          name="twitter:description"
          content="Explore the best CUET coaching in UP. Find expert faculty, affordable programs, and flexible learning options in cities like Lucknow, Kanpur, and Varanasi."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/image.jpg"
        />
        {/* <!-- Facebook card meta tags --> */}

        <meta
          property="og:title"
          content="Best CUET Coaching in UP: Top Institutes for Exam Success"
        />
        <meta
          property="og:description"
          content="Explore the best CUET coaching in UP. Find expert faculty, affordable programs, and flexible learning options in cities like Lucknow, Kanpur, and Varanasi."
        />
        <meta
          property="og:url"
          content="https://www.cuet.plus/centers/best-cuet-coaching-in-uttar-pradesh"
        />
        <meta
          property="og:image"
          content="https://www.facebook.com/photo/?fbid=283180278090091&set=a.136710486070405"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="CUET Coaching" />

        <script type="application/ld+json">
          {`"@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.cuet.plus/centers/best-cuet-coaching-in-uttar-pradesh"
    },
    "headline": "Best CUET Coaching in Delhi – A Complete Guide for Aspiring Students",
    "description": "Find the best CUET coaching in Delhi with expert teachers, personalized plans, and proven results. Start your journey to success with top-rated coaching institutes",
    "image": "https://www.cuet.plus/assets/Blog-BbDrzsaS.jpg",  
    "author": {
      "@type": "Organization",
      "name": "Piyush Jaiswal"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": ""`}
        </script>
      </Helmet>
      <div className={styles.UttarPradesh}>
        <div id="section">
          <CuetGuide cuetGuide={cuetGuide} />
        </div>
        <div id="section-1">
          <IntroductionLayout introductionContent={introductionContent} />
        </div>
        <div id="section-2">
          <WhyOptForCuetCoaching whyOptContent={whyOptContent} />
        </div>
        <div id="section-3">
          <ChoosingTheRightCoaching
            choosingTheRightCoachingInstitute={
              choosingTheRightCoachingInstitute
            }
          />
        </div>
        <div id="section-4">
          <ChoosingTheRightCoaching
            choosingTheRightCoachingInstitute={benefitsOfCuetCoaching}
          />
        </div>
        <div id="section-5">
          <ChoosingTheRightCoaching
            choosingTheRightCoachingInstitute={cuetPlusCoachingInstitute}
          />
        </div>
        <div id="section-7">
          <WhyChooseCuetPlus data={whyChooseCuetPlus} />
        </div>
        <div id="section-6">
          <FaqLayout faqs={cuetFaqs} />
        </div>
        <div id="section-8">
          <CuetConclusion data={cuetConclusion} />
        </div>

        {/* Scroll to Top Button */}
        {scrolling && (
          <button onClick={scrollToTop} className={styles.scrollToTopButton}>
            <FaArrowUpLong />
          </button>
        )}
      </div>
    </>
  );
};

export default UttarPradesh;

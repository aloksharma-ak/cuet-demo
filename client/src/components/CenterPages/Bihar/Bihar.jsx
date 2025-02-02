import React, { useEffect, useState } from "react";
import styles from "./Bihar.module.css";
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
} from "./BiharData/BiharData";
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

const Bihar = () => {
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
        <title>Best CUET Coaching in Bihar | Top Preparation Institutes</title>
        <meta
          name="description"
          content="Find the best CUET coaching in Bihar with experienced faculty, affordable fees, scholarships, and personalized guidance. Excel in CUET for top university admissions."
        />
        <meta
          name="keywords"
          content="best cuet coaching in delhi, cuet coaching in delhi, best cuet coaching, cuet online coaching, online cuet coaching, cuet 2025-2026, CUET preparation, CUET classes, CUET study material"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.cuet.plus/centers/best-cuet-coaching-in-bihar"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.cuet.plus/centers/best-cuet-coaching-in-bihar"
        />
        <meta name="author" content="Piyush Jaiswal" />
        {/* <!-- Open Graph meta tags --> */}

        <meta property="og:site_name" content="cuet.plus" />
        <meta property="og:type" content="Article" />
        <meta
          property="og:title"
          content="Best CUET Coaching in Bihar | Top Preparation Institutes"
        />
        <meta
          property="og:description"
          content="Find the best CUET coaching in Bihar with experienced faculty, affordable fees, scholarships, and personalized guidance. Excel in CUET for top university admissions."
        />
        <meta
          property="og:image"
          content="https://www.cuet.plus/assets/Blog-BbDrzsaS.jpg"
        />
        <meta
          property="og:url"
          content="https://www.cuet.plus/centers/best-cuet-coaching-in-bihar"
        />
        {/* <!-- Twitter card meta tags --> */}

        <meta name="twitter:card" content="CUET Plus Institute" />
        <meta name="twitter:site" content="cuet.plus" />
        <meta
          name="twitter:title"
          content="Best CUET Coaching in Bihar | Top Preparation Institutes"
        />
        <meta
          name="twitter:description"
          content="Find the best CUET coaching in Bihar with experienced faculty, affordable fees, scholarships, and personalized guidance. Excel in CUET for top university admissions."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/image.jpg"
        />
        {/* <!-- Facebook card meta tags --> */}

        <meta
          property="og:title"
          content="Best CUET Coaching in Bihar | Top Preparation Institutes"
        />
        <meta
          property="og:description"
          content="Find the best CUET coaching in Bihar with experienced faculty, affordable fees, scholarships, and personalized guidance. Excel in CUET for top university admissions."
        />
        <meta
          property="og:url"
          content="https://www.cuet.plus/centers/best-cuet-coaching-in-bihar"
        />
        <meta
          property="og:image"
          content="https://www.facebook.com/photo/?fbid=283180278090091&set=a.136710486070405"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="CUET Coaching" />

        <script type="application/ld+json">
          {`
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.cuet.plus/centers/best-cuet-coaching-in-bihar"
    },
    "headline": "Best CUET Coaching in Bihar | Top Preparation Institutes",
    "description": "Find the best CUET coaching in Bihar with experienced faculty, affordable fees, scholarships, and personalized guidance. Excel in CUET for top university admissions.",
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
      <div className={styles.Bihar}>
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

export default Bihar;

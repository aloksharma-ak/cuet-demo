import React, { useEffect, useState } from "react";
import styles from "./Jharkhand.module.css";
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
} from "./JharkhandData/JharkhandData";
import CuetGuide from "./JharkhandComponent/CuetGuide";
import IntroductionLayout from "./JharkhandComponent/IntroductionLayout";
import WhyOptForCuetCoaching from "./JharkhandComponent/WhyOptForCuetCoaching";
import ChoosingTheRightCoaching from "./JharkhandComponent/ChoosingTheRightCoaching";
import BenefitsOfCuetCoaching from "./JharkhandComponent/BenefitsOfCuetCoaching";
import CoachingInstitute from "./JharkhandComponent/CoachingInstitute";
import WhyChooseCuetPlus from "./JharkhandComponent/WhyChooseCuetPlus";
import FaqLayout from "./JharkhandComponent/FaqLayout";
import CuetConclusion from "./JharkhandComponent/CuetConclusion";
import { FaArrowUpLong } from "react-icons/fa6";
import { animateScroll as scroll } from "react-scroll";
import { Helmet } from "react-helmet";

const Jharkhand = () => {
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
        <title>
          Best CUET Coaching in Jharkhand – Achieve Your Academic Goals
        </title>
        <meta
          name="description"
          content="Find the best CUET coaching in Jharkhand with expert faculty, affordable options, and inclusive programs. Secure admission to top universities with ease."
        />
        <meta
          name="keywords"
          content="best cuet coaching in Jharkhand, cuet coaching in Jharkhand, best cuet coaching, cuet online coaching, online cuet coaching, cuet 2025-2026, CUET preparation, CUET classes, CUET study material"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.cuet.plus/centers/best-cuet-coaching-in-jharkhand"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.cuet.plus/centers/best-cuet-coaching-in-jharkhand"
        />
        <meta name="author" content="Piyush Jaiswal" />
        {/* <!-- Open Graph meta tags --> */}

        <meta property="og:site_name" content="cuet.plus" />
        <meta property="og:type" content="Article" />
        <meta
          property="og:title"
          content="Best CUET Coaching in Jharkhand – Achieve Your Academic Goals"
        />
        <meta
          property="og:description"
          content="Find the best CUET coaching in Jharkhand with expert faculty, affordable options, and inclusive programs. Secure admission to top universities with ease."
        />
        <meta
          property="og:image"
          content="https://www.cuet.plus/assets/Blog-BbDrzsaS.jpg"
        />
        <meta
          property="og:url"
          content="https://www.cuet.plus/centers/best-cuet-coaching-in-jharkhand"
        />
        {/* <!-- Twitter card meta tags --> */}

        <meta name="twitter:card" content="CUET Plus Institute" />
        <meta name="twitter:site" content="cuet.plus" />
        <meta
          name="twitter:title"
          content="Best CUET Coaching in Jharkhand – Achieve Your Academic Goals"
        />
        <meta
          name="twitter:description"
          content="Find the best CUET coaching in Jharkhand with expert faculty, affordable options, and inclusive programs. Secure admission to top universities with ease."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/image.jpg"
        />
        {/* <!-- Facebook card meta tags --> */}

        <meta
          property="og:title"
          content="Best CUET Coaching in Jharkhand – Achieve Your Academic Goals"
        />
        <meta
          property="og:description"
          content="Find the best CUET coaching in Jharkhand with expert faculty, affordable options, and inclusive programs. Secure admission to top universities with ease."
        />
        <meta
          property="og:url"
          content="https://www.cuet.plus/centers/best-cuet-coaching-in-jharkhand"
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
      "@id": "https://www.cuet.plus/centers/best-cuet-coaching-in-jharkhand"
    },
    "headline": "Best CUET Coaching in Jharkhand – Achieve Your Academic Goals",
    "description": "Find the best CUET coaching in Jharkhand with expert faculty, affordable options, and inclusive programs. Secure admission to top universities with ease.",
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
      <div className={styles.Jharkhand}>
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
          <BenefitsOfCuetCoaching
            benefitsOfCuetCoaching={benefitsOfCuetCoaching}
          />
        </div>
        <div id="section-5">
          <CoachingInstitute
            cuetPlusCoachingInstitute={cuetPlusCoachingInstitute}
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

export default Jharkhand;

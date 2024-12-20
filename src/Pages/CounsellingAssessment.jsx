import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import AssessmentIntro from "../components/CounsellingAssessment/AssessmentIntro/AssessmentIntro";
// import AssessmentVision from "../components/CounsellingAssessment/AssessmentVision/AssessmentVision";
// import ContactForm from "../components/HomePage/IntroSection/ContactForm";
// import { IoClose } from "react-icons/io5";
// import styles from '../components/CounsellingAssessment/CounsellingAssessment.module.css'
// import WhyCUETPlus from "../components/CounsellingAssessment/WhyCUETPlus/WhyCUETPlus";
// import ReadyNextStep from "../components/CounsellingAssessment/Ready/ReadyNextStep";
import counselling_banner from "../assets/counselling_banner.jpg";
import { Link } from "react-router-dom";

function CounsellingAssessment() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  // const toggleFormOverlay = () => {
  //   setShowForm((prev) => !prev);
  // };

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>
          Counselling Assessment - Expert Guidance for Your CUET Journey
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get personalized counselling and assessment for CUET preparation. Understand your strengths, work on your weaknesses, and achieve your goals with CUETPlus."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="CUET counselling, CUET assessment, CUET preparation guidance, CUETPlus expert counselling"
        />

        {/* Robots and Author */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CUETPlus Team" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Counselling Assessment - Expert Guidance for Your CUET Journey"
        />
        <meta
          property="og:description"
          content="Take the next step in your CUET preparation with expert counselling and personalized assessment at CUETPlus."
        />
        <meta property="og:image" content={counselling_banner} />
        <meta property="og:image:alt" content="CUET Counselling Assessment" />
        <meta property="og:url" content="https://cuet.plus/counselling" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CUETPlus" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CUETPlusOfficial" />
        <meta
          name="twitter:title"
          content="Counselling Assessment - Expert Guidance for Your CUET Journey"
        />
        <meta
          name="twitter:description"
          content="Boost your CUET preparation with personalized counselling and expert guidance at CUETPlus."
        />
        <meta name="twitter:image" content={counselling_banner} />
        <meta name="twitter:image:alt" content="CUET Counselling Assessment" />

        {/* Google Analytics Tag */}
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
        gtag("js", new Date());
        gtag("config", "AW-16805748874");
      `}
        </script>

        {/* Google Tag Manager */}
        <script>
          {`(function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-TFD9H5H4');`}
        </script>

        {/* Google Ads Conversion Tracking */}
        <script>
          {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
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

      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "0rem",
          textAlign: "center",
          color: "transparent",
          fontSize: "2vw",
          fontWeight: "bold",
          zIndex: "-100",
        }}
      >
        <h1 style={{ backgroundColor: "transparent", color: "transparent" }}>
          Expert CUET Counselling for Admission Success
        </h1>
        <h2 style={{ backgroundColor: "transparent", color: "transparent" }}>
          Best CUET Counselling for College Admissions
        </h2>
        <Link to="/contact-us" style={{ position: "absolute", zIndex: "-20" }}>
          <div
            className="course-page-btn"
            style={{ backgroundColor: "transparent", color: "transparent" }}
          >
            Get in Touch
          </div>
        </Link>
      </div>

      <AssessmentIntro />
      {/* <AssessmentVision toggleFormOverlay={toggleFormOverlay} />
      <WhyCUETPlus />
      <ReadyNextStep toggleFormOverlay={toggleFormOverlay}/>
      {showForm && (
        <div className={styles.formOverlay}>
          <div className={styles.formContent} ref={formRef}>
            <ContactForm formHead="Contact our Experts" />
            <button className={styles.closeBtn} onClick={toggleFormOverlay}>
              <IoClose />
            </button>
          </div>
        </div>
      )} */}
    </>
  );
}

export default CounsellingAssessment;

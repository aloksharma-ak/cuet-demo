import React from "react";
import { Helmet } from "react-helmet";
import ScholarshipPrize from "../components/CuetScholarship/ScholarshipPrize/ScholarshipPrize";
import ExamFactor from "../components/CuetScholarship/ExamFactor/ExamFactor";
import FAQ from "../components/HomePage/Communities/FAQ/FAQ";
import ScholarshipIntro from "../components/CuetScholarship/ScholarshipIntro/ScholarshipIntro";
import ScholarshipBenefit from "../components/CuetScholarship/ScholarshipBenefit/ScholarshipBenefit";
import ScholarshipDifferentUs from "../components/CuetScholarship/ScholarshipDifferentUs/ScholarshipDifferentUs";
import HowToRegister, {
  CallToActionBtn,
} from "../components/CuetScholarship/HowToRegister/HowToRegister";
import TypeOfScholarship from "../components/CuetScholarship/TypeOfScholarship/TypeOfScholarship";
import scholarship_banner from "../assets/scholarship_banner.jpg";
import { Link } from "react-router-dom";
import CounsellingTestimonial from "../components/CounsellingAssessment/CounsellingTestimonial/CounsellingTestimonial";
import ScholarshipCallToAction from "../components/CuetScholarship/ScholoarshipCallToAction/ScholoarshipCallToAction";
import ScholarPlusBanner from "../components/CuetScholarship/ScholarPlusBanner/ScholarPlusBanner";
import review_img_1 from "../assets/30.png";
import review_img_2 from "../assets/18.png";
import review_img_3 from "../assets/6.png";
import review_img_4 from "../assets/14.png";
import review_img_5 from "../assets/13.png";
import review_img_6 from "../assets/22.png";
import review_img_7 from "../assets/21.png";
import review_img_8 from "../assets/20.png";
import review_img_9 from "../assets/28.png";
import review_img_10 from "../assets/24.png";

function CuetScholarship() {
  const faqs1 = [
    {
      question: "What scholarships does CUET Plus offer?",
      answer:
        "We offer three scholarships: AchievePlus, AspirePlus, and ExcelPlus for CUET and academic success.",
    },
    {
      question: "Who can apply for the AchievePlus scholarship?",
      answer:
        "Students entering Class 11 with aspirations to excel in CUET and academics can apply.",
    },
    {
      question: "What is the AspirePlus scholarship?",
      answer:
        "AspirePlus is for Class 12 students preparing for CUET and board exams.",
    },
    {
      question: "Who is eligible for the ExcelPlus scholarship?",
      answer:
        "ExcelPlus is designed for students focusing solely on CUET preparation.",
    },
    {
      question: "What are the benefits of CUET Plus scholarships?",
      answer:
        "Benefits include tuition waivers, application fee coverage, and discounts based on merit.",
    },
  ];

  const faqs2 = [
    {
      question: "How can I apply for a scholarship?",
      answer:
        "Register on our website and complete the ScholarPlus Assessment to qualify.",
    },
    {
      question: "What is the ScholarPlus Assessment?",
      answer: "It’s an evaluation test to determine scholarship eligibility.",
    },
    {
      question: "Can I apply for more than one scholarship?",
      answer:
        "Students can apply for the most relevant scholarship based on their grade and goals.",
    },
    {
      question: "Is the scholarship test conducted online?",
      answer:
        "Yes, the ScholarPlus Assessment is conducted online for convenience.",
    },
    {
      question: "When is the next scholarship test?",
      answer:
        "Check our website for updates on upcoming scholarship test dates.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>CUET Scholarship Test - Apply for CUET UG Scholarship</title>
        <meta
          name="description"
          content="Prepare for the CUET UG Scholarship Test with CUETPlus. Learn about scholarship prizes, registration, benefits, FAQs, and more."
        />
        <meta
          name="keywords"
          content="CUET Scholarship, CUET UG, CUET UG Scholarship Test, scholarship rewards, CUET preparation, CUETPlus, CUET benefits"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CUETPlus Team" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="CUET Scholarship Test - Apply for CUET UG Scholarship"
        />
        <meta
          property="og:description"
          content="Prepare for the CUET UG Scholarship Test with CUETPlus. Get scholarship rewards and detailed test results. Register now!"
        />
        <meta property="og:image" content={scholarshipBanner} />
        <meta name="og:image:alt" content="CUET Scholarship Banner" />
        <meta property="og:url" content="https://cuet.plus/cuet-scholarship" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CUETPlus" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CUETPlusOfficial" />
        <meta
          name="twitter:title"
          content="CUET Scholarship Test - Apply for CUET UG Scholarship"
        />
        <meta
          name="twitter:description"
          content="Prepare for the CUET UG Scholarship Test with CUETPlus. Learn how to register, get benefits, and more."
        />
        <meta name="twitter:image" content={scholarshipBanner} />
        <meta name="twitter:image:alt" content="CUET Scholarship Banner" />

        {/* Google Tag Manager */}
        <script>
          {`
          (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-TFD9H5H4');
        `}
        </script>

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
          gtag('config', 'AW-16805748874');
        `}
        </script>

        {/* Conversion Tracking */}
        <script>
          {`
          function gtag_report_conversion(url) {
            var callback = function() {
              if (typeof url !== 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              send_to: 'AW-16805748874/23TjCK7NkfoZEIrBzc0-',
              value: 30.0,
              currency: 'INR',
              event_callback: callback
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
        <h1>CUETPlus Scholarship for Higher Education</h1>
        <h2>CUET Scholarship for UG admissions</h2>
        <Link to="/contact-us" style={{ position: "absolute", zIndex: "-20" }}>
          <div
            className="course-page-btn"
            style={{ backgroundColor: "transparent", color: "transparent" }}
          >
            Get in Touch
          </div>
        </Link>
      </div>

      <ScholarshipIntro />
      {/* <ScholarshipPrize /> */}
      <ScholarshipBenefit />
      <ScholarshipCallToAction
        title={`Upcoming Test Date: 25th December 2024`}
        icon="📅"
        iconText="Mode: Online"
        icon2="📍"
        iconText2="Eligibility: All CUET aspirants"
        btn="Register Now"
      />
      <TypeOfScholarship />
      <ScholarshipDifferentUs />
      <HowToRegister />
      <Link to="/scholarship-form">
        <CallToActionBtn title="Start Your Application Today" />
      </Link>
      <CounsellingTestimonial
        review_imgs={review_imgs}
        paddinglr={{ paddingLeft: "10%", paddingRight: "10%" }}
      />
      <CallToActionBtn title="Join Our Success Stories" />
      {/* <ExamFactor /> */}
      <ScholarshipCallToAction
        title={`Join ScholarPlus Today`}
        desc="StoriesUnlock unparalleled opportunities and take the first step toward your academicsuccess."
        btn="👉 Apply for ScholarPlus"
      />
      <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <FAQ faqs1={faqs1} faqs2={faqs2} heading="FAQs" />
      </div>
      <ScholarPlusBanner />
    </>
  );
}

export default CuetScholarship;

const review_imgs = [
  {
    img: review_img_1,
    name: "Aman R.",
    class: "Scholarship Recipient",
    description:
      "The ScholarPlus scholarship covered my tuition fees, making quality education accessible for me.Thank you, CUET Plus!",
  },
  {
    img: review_img_2,
    name: "Pooja S.",
    class: "Class 12 Student",
    description:
      "I received a full tuition waiver under the AspirePlus scholarship. It was a game-changer for my CUET preparation!",
  },
  {
    img: review_img_3,
    name: "Kunal D.",
    class: "CUET Aspirant",
    description:
      "ExcelPlus made my CUET journey affordable. The scholarship helped me focus on studying without worrying about finances.",
  },
  {
    img: review_img_4,
    name: "Aditi J.",
    class: "Class 11 Student",
    description:
      "I didn’t think I could afford coaching, but ScholarPlus turned my dreams into reality. Highly recommend CUET Plus!",
  },
  {
    img: review_img_5,
    name: "Neha G.",
    class: "Class 12 Student",
    description:
      "CUET Plus scholarships don’t just reward talent; they empower students to achieve their best. Grateful for this opportunity!",
  },
  {
    img: review_img_6,
    name: "Varun T.",
    class: "Scholarship Awardee",
    description:
      "Winning the AchievePlus scholarship gave me the motivation to work even harder. The team at CUET Plus is amazing!",
  },
  {
    img: review_img_7,
    name: "Rohit K.",
    class: "Class 11 Student",
    description:
      "The ScholarPlus assessment was straightforward, and the rewards are incredible. CUET Plus truly supports students like me.",
  },
  {
    img: review_img_8,
    name: "Anjali S.",
    class: "CUET Candidate",
    description:
      "My full scholarship under ExcelPlus made my dream of studying at a top university possible. Can’t thank CUET Plus enough!",
  },
  {
    img: review_img_9,
    name: "Akash N.",
    class: "Class 11 Student",
    description:
      "CUET Plus scholarships are the best for students aiming for CUET. The application process was seamless and transparent.",
  },
  {
    img: review_img_10,
    name: "Ishita M.",
    class: "Class 12 Student",
    description:
      "Thanks to AspirePlus, I didn’t just save on fees but also gained access to top-quality coaching and resources. Highly recommend!",
  },
];

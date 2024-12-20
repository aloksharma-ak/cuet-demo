import React from "react";
import ExcelPlusScholarshipHero from "../components/ExcelPlusScholarship/ExcelPlusScholarshipHero/ExcelPlusScholarshipHero";
import ExcelPlusOpportunity from "../components/ExcelPlusScholarship/ExcelPlusOpportunity/ExcelPlusOpportunity";
import ExcelPlusStars from "../components/ExcelPlusScholarship/ExcelPlusStars/ExcelPlusStars";
import ExcelPlusSteps from "../components/ExcelPlusScholarship/ExcelPlusSteps/ExcelPlusSteps";
import ExcelPlusWhyChoose from "../components/ExcelPlusScholarship/ExcelPlusWhyChoose/ExcelPlusWhyChoose";
import ExcelCallToAction from "../components/ExcelPlusScholarship/ExcelCallToAction/ExcelCallToAction";
import ScholarshipPrize from "../components/CuetScholarship/ScholarshipPrize/ScholarshipPrize";
import HowToRegister, {
  CallToActionBtn,
} from "../components/CuetScholarship/HowToRegister/HowToRegister";
import { Link } from "react-router-dom";
import FAQ from "../components/HomePage/Communities/FAQ/FAQ";
import ExcelWhatsNext from "../components/ExcelPlusScholarship/ExcelWhatsNext/ExcelWhatsNext";
import CounsellingTestimonial from "../components/CounsellingAssessment/CounsellingTestimonial/CounsellingTestimonial";
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
import { Helmet } from "react-helmet";
import scholarship_banner from "../assets/scholarship_banner.jpg";

const ExcelPlusScholarship = () => {
  const faqs1 = [
    {
      question: "Who is eligible for the CUET ExcelPlus Scholarship?",
      answer:
        "All CUET aspirants, regardless of their current academic stage, can apply.",
    },
    {
      question: "What is covered under the scholarship?",
      answer:
        "The scholarship provides full or partial tuition waivers, depending on performance, and additional support for application and admission fees.",
    },
    {
      question: "How do I apply?",
      answer:
        "Click 'Apply Now', fill in your details, and register for the scholarship test.",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>STAR CUET Scholarship Test - Apply for CUET UG STAR Scholarship</title>
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
        <meta property="og:image" content={scholarship_banner} />
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
        <meta name="twitter:image" content={scholarship_banner} />
        <meta name="twitter:image:alt" content="CUET Scholarship Banner" />

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

      <ExcelPlusScholarshipHero />
      <ScholarshipPrize />
      <ExcelPlusOpportunity />
      <ExcelPlusStars />
      <HowToRegister />
      <Link to="/scholarship-form">
        <CallToActionBtn title="Register for the Test Now" />
      </Link>
      <ExcelPlusSteps />
      <CounsellingTestimonial
        review_imgs={review_imgs}
        paddinglr={{ paddingLeft: "10%", paddingRight: "10%" }}
      />
      <ExcelWhatsNext />
      <ExcelPlusWhyChoose />
      <div style={{ padding: "10px" }}>
        <FAQ
          faqs1={faqs1}
          heading="Frequently Asked Questions"
          customStyle={{ width: "100%" }}
        />
      </div>
      <ExcelCallToAction />
    </div>
  );
};

export default ExcelPlusScholarship;

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

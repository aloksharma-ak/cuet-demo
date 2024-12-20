import React from "react";
import PartnerSection from "../components/PartnerPage/PartnerSection/PartnerSection";
import PartnershipSection from "../components/PartnerPage/PartnershipSection/PartnershipSection";
import PartnershipOppoSection from "../components/PartnerPage/PartnershipOppoSection/PartnershipOppoSection";
import PartnerConnect from "../components/PartnerPage/PartnerConnect/PartnerConnect";
import HowPartnerWorks from "../components/PartnerPage/HowPartnerWorks/HowPartnerWorks";

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
import CounsellingTestimonial from "../components/CounsellingAssessment/CounsellingTestimonial/CounsellingTestimonial";
import FAQ from "../components/HomePage/Communities/FAQ/FAQ";

const faqs1 = [
  {
    question: "What partnerships does CUET Plus offer?",
    answer:
      "We offer Education Consultant, Franchise, and Center Partner opportunities.",
  },
  {
    question: "Who can become an Education Consultant?",
    answer:
      "Individuals passionate about education and connected to student networks can apply.",
  },
  {
    question: "What is the role of an Education Franchisee?",
    answer:
      "Franchisees operate CUET Plus centers and leverage our resources and reputation.",
  },
  {
    question: "What is a Center Partner?",
    answer:
      "Existing coaching centers can partner with us to expand their reach and profitability.",
  },
  {
    question: "What support does CUET Plus provide to partners?",
    answer:
      "We offer technical, marketing, and operational support to all partners.",
  },
];

const faqs2 = [
  {
    question: "How do I apply to become a partner?",
    answer:
      "Visit our website’s Partner section and fill out the application form.",
  },
  {
    question: "What are the benefits of partnering with CUET Plus?",
    answer:
      "Access to a proven system, student admissions, and shared profits.",
  },
  {
    question: "Do I need prior experience to become a partner?",
    answer: "While experience helps, passion and commitment are key.",
  },
  {
    question: "What is the investment required for a franchise?",
    answer: "Contact us directly for details on franchise investment and ROI.",
  },
  {
    question: "Can I partner with CUET Plus online?",
    answer: "Yes, partnerships are open for online and offline operations.",
  },
];

const PartnerPage = () => {
  return (
    <div>
      <Helmet>
        <title>CUETPlus Partners - Trusted Partners for CUET Preparation</title>
        <meta
          name="description"
          content="CUETPlus Partners - Our trusted partners help provide top-tier resources and support for CUET preparation. Discover our collaborations and how they enhance your learning experience."
        />
        <meta
          name="keywords"
          content="CUET partners, CUET preparation partners, CUET coaching collaborations, CUETPlus partners, trusted CUET resources, CUET learning support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CUETPlus Team" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="CUETPlus Partners - Trusted Partners for CUET Preparation"
        />
        <meta
          property="og:description"
          content="CUETPlus Partners - Our trusted partners help provide top-tier resources and support for CUET preparation. Learn more about our collaborations."
        />
        <meta
          property="og:image"
          content="https://www.cuet.plus/assets/partners-banner.jpg" // Replace with the actual image URL
        />
        <meta name="og:image:alt" content="CUETPlus Partners Banner" />
        <meta property="og:url" content="https://cuet.plus/partners" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CUETPlus" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CUETPlusOfficial" />
        <meta
          name="twitter:title"
          content="CUETPlus Partners - Trusted Partners for CUET Preparation"
        />
        <meta
          name="twitter:description"
          content="CUETPlus Partners - Learn about the trusted partners providing resources and support for CUET preparation at CUETPlus."
        />
        <meta
          name="twitter:image"
          content="https://www.cuet.plus/assets/partners-banner.jpg" // Replace with the actual image URL
        />
        <meta name="twitter:image:alt" content="CUETPlus Partners Banner" />

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

      <PartnerSection />
      <PartnershipSection />
      <PartnershipOppoSection />
      <HowPartnerWorks />
      <CounsellingTestimonial
        review_imgs={review_imgs}
        paddinglr={{ paddingLeft: "10%", paddingRight: "10%" }}
      />
      <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <FAQ faqs1={faqs1} faqs2={faqs2} heading="FAQs" />
      </div>
      <PartnerConnect />
    </div>
  );
};

export default PartnerPage;

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

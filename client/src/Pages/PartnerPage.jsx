import React from "react";
import styles from '../components/PartnerPage/PartnerPage.module.css'
import PartnerSection from "../components/PartnerPage/PartnerSection/PartnerSection";
import PartnershipSection from "../components/PartnerPage/PartnershipSection/PartnershipSection";
import PartnershipOppoSection from "../components/PartnerPage/PartnershipOppoSection/PartnershipOppoSection";
import PartnerConnect from "../components/PartnerPage/PartnerConnect/PartnerConnect";
import HowPartnerWorks from "../components/PartnerPage/HowPartnerWorks/HowPartnerWorks";

import review_img_1 from "../assets/backImgBody.png";
import review_img_2 from "../assets/backImgBody.png";
import review_img_3 from "../assets/backImgBody.png";
import review_img_4 from "../assets/backImgBody.png";
import review_img_5 from "../assets/backImgBody.png";
import CounsellingTestimonial from "../components/CounsellingAssessment/CounsellingTestimonial/CounsellingTestimonial";
import FAQ from "../components/HomePage/Communities/FAQ/FAQ";
import { Helmet } from "react-helmet";

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
      </Helmet>

      <PartnerSection />
      <PartnershipSection />
      <PartnershipOppoSection />
      <HowPartnerWorks />
      <CounsellingTestimonial
        review_imgs={review_imgs}
        paddinglr={{ paddingLeft: "10%", paddingRight: "10%" }}
      />
      <div className={styles.faqs}>
        <FAQ faqsGroup={[faqs1, faqs2]} />
      </div>
      <PartnerConnect />
    </div>
  );
};

export default PartnerPage;

const review_imgs = [
  {
    img: review_img_5,
    name: "Knowledge Avenue Institute",
    class: "– Mr. Vikram Sethi, Academic Head, Knowledge Avenue Institute",
    description:
      "CUET Plus has set a benchmark in collaborative education. Through their personalized mentorship programs and robust online learning platform, we’ve witnessed a remarkable increase in student engagement and performance. It’s a privilege to partner with a team so dedicated to making a difference in education.",
  },
  {
    img: review_img_1,
    name: "EduMentor Coaching Institute",
    class: "– Mr. Rajiv Sharma, Director, EduMentor Coaching",
    description:
      "Partnering with CUET Plus has been a game-changer for us. Their student-centric approach and advanced learning management system have significantly enhanced the quality of our services. We’ve seen remarkable student outcomes, and the support from their team has been exceptional. Truly, a partnership that’s built for success.",
  },
  {
    img: review_img_2,
    name: "ABC Learning Hub",
    class: "– Ms. Priya Mehta, Founder, ABC Learning Hub",
    description:
      "Collaborating with CUET Plus has opened up new opportunities for our institution. Their innovative programs, like the ScholarPlus scholarships and personalized mentorship, have empowered our students to aim higher. The streamlined process and nationwide network have made our partnership seamless and highly rewarding.",
  },
  {
    img: review_img_3,
    name: "Bright Future Academy",
    class: "– Dr. Sanjay Verma, CEO, Bright Future Academy",
    description:
      "CUET Plus has redefined what a successful partnership means. Their commitment to quality education, transparent operations, and technological innovation aligns perfectly with our vision. We’ve been able to provide our students with unparalleled access to CUET preparation resources, and the feedback has been overwhelmingly positive.",
  },
  {
    img: review_img_4,
    name: "FutureConnect EdTech Solutions",
    class: "– Ms. Swati Kapoor, Co-Founder, FutureConnect EdTech",
    description:
      "The collaboration with CUET Plus has been an incredibly enriching experience for our team. Their faculty’s expertise, comprehensive test series, and 24/7 support system have elevated our students’ learning journey. CUET Plus is more than a partner; they’re a catalyst for educational transformation.",
  },
  
];

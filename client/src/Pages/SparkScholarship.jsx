import React from "react";
import ScholarshipPrize from "../components/CuetScholarship/ScholarshipPrize/ScholarshipPrize";
import HowToRegister, {
  CallToActionBtn,
} from "../components/CuetScholarship/HowToRegister/HowToRegister";
import { Link } from "react-router-dom";
import FAQ from "../components/HomePage/Communities/FAQ/FAQ";
import CounsellingTestimonial from "../components/CounsellingAssessment/CounsellingTestimonial/CounsellingTestimonial";
import { Helmet } from "react-helmet";
import scholarship_banner from "../assets/scholarship_banner.jpg";
import StarScholarshipHero from "../components/StarScholarship/StarScholarshipHero/StarScholarshipHero";
import StarOpportunity from "../components/StarScholarship/StarOpportunity/StarOpportunity";
import StarStars from "../components/StarScholarship/StarStars/StarStars";
import StarSteps from "../components/StarScholarship/StarSteps/StarSteps";
import StarWhatsNext from "../components/StarScholarship/StarWhatsNext/StarWhatsNext";
import StarWhyChoose from "../components/StarScholarship/StarWhyChoose/StarWhyChoose";
import StarCallToAction from "../components/StarScholarship/StarCallToAction/StarCallToAction";

import upto100 from "../assets/upto100.svg";
import scpdf from "../assets/scpdf.svg";
import worth_sc from "../assets/worth_sc.svg";
import green_tick from "../assets/green-tick.svg";

import img from "../assets/StudentsCont.jpg";

import TOPACHIEVERS from "../assets/TOPACHIEVERS.jpg";
import MERITBASEDDISCOUNTS from "../assets/MERIT-BASEDDISCOUNTS.jpg";
import SUPPORTFORSUCCESS from "../assets/SUPPORTFORSUCCESS.jpg";

import performanceImg from "../assets/statistics.png";
import notificationImg from "../assets/ipmat.png";
import enrollImg from "../assets/will.png";

import EmpathyIcon from "../assets/Empathy.png";
import MotivationalIcon from "../assets/motivation.png";
import CredibilityIcon from "../assets/reliability.png";

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

const SparkScholarship = () => {
  const heroData = {
    title: (
      <>
        Achieve Excellence with the <span>Spark</span> Scholarship Test
      </>
    ),
    description: `Your journey to India’s top universities starts here. Achieve academic
          success with scholarships that remove financialbarriers and pave the
          way for your dreams.`,
    buttonText: "Apply Now for the CUET Spark Scholarship",
    formStyle: { display: "none" },
  };
  const prizeData = {
    heading: [
      "Your Talent Deserves to Shine– We’re Here to Make It Happen From",
    ],
    prizeData: [
      { img: upto100, title: "Up to 100% Fee-waiver" },
      { img: scpdf, title: "Free CUET sample paper PDF worth ₹999/-" },
      { img: worth_sc, title: "Free CUET Previous Year Paper PDF worth ₹249" },
    ],

    whoCanApply: [
      "Students stepping into Class 11 and aiming to pursue two years of preparation for both 12th board exams and CUET.",
      "CUET Enthusiasts: Seeking financial support to pursue high-quality coaching.",
    ],

    keyHighlights: [
      { icon: green_tick, text: "15-Minutes Online Scholarship Test" },
      { icon: green_tick, text: "Test Date: 25th December 2024" },
      { icon: green_tick, text: "Time: 10:00 AM (IST)" },
      {
        icon: green_tick,
        text: "Mode: Online (Attend from the comfort of your home)",
      },
    ],
  };
  const opportunitiesData = {
    heading: {
      title: "YOUR TALENT DESERVES TO Shine",
      tagLine: "– WE’RE HERE TO MAKE IT HAPPEN",
      desc: ` The Spark Scholarship Test is a merit-based online exam designed
            to identify and reward talented students with scholarships that make
            quality education accessible to all.`,
    },
    cardData: [
      {
        imgUrl: img,
        title: "Full tuition waivers",
        desc: "Covering CUET preparation fees for top-performing students.",
      },
      {
        imgUrl: img,
        title: "Merit-based discounts",
        desc: "Significant fee reductions for academically strong candidates.",
      },
      {
        imgUrl: img,
        title: "Additional Perks",
        desc: "Assistance with CUET application fees and collegeadmission charges.",
      },
    ],
  };
  const starsData = {
    cards: [
      {
        imageUrl: TOPACHIEVERS,
        title: "TOP ACHIEVERS",
        items: [
          "100% tuition fee waiver for Class 11th and 12th board exams, including CUET coaching.",
          "Additional support for CUET application, college admission fees, and all graduation fees are covered.",
        ],
      },
      {
        imageUrl: MERITBASEDDISCOUNTS,
        title: "MERIT-BASED DISCOUNTS",
        items: [
          "Discounts based on performance in the scholarship test or past academic results.",
        ],
      },
      {
        imageUrl: SUPPORTFORSUCCESS,
        title: "SUPPORT FOR SUCCESS",
        items: [
          "Access to personalized mentorship, expert guidance, and mock test series.",
        ],
      },
    ],
    btnTitle: " Start Your Application Today",
  };
  const registerData = {
    headingData: {
      title: "How",
      highlight: "ScholarPlus",
      subtitle: "The Path to Your Dream Scholarship is Just 5 Steps Away",
    },
    stepsData: [
      {
        title: "Select a Scholarship Model",
        description:
          "Choose a scholarship program according to your qualifications and eligibility criteria.",
      },
      {
        title: "Submit your Application",
        description:
          "Share your academic background to complete your application.",
      },
      {
        title: "Take the ScholarPlus Assessment",
        description:
          "The test will be conducted online, allowing students nationwide to participate easily from the comfort of home.",
      },
      {
        title: "Receive Your Scholarship",
        description:
          "Earn tuition waivers, discounts, and additional benefits based on your scores.",
      },
      {
        title: "Begin Your Journey",
        description:
          "Join CUET Plus and start preparing for your bright future!",
      },
    ],
  };
  const examInstructionsData = {
    instructions: [
      "Ensure a stable internet connection for uninterrupted access.",
      "Login credentials will be sent via email 48 hours before the test.",
      "The test duration is 60 minutes, and there will be 50 multiple-choice questions (MCQs).",
      "Keep a valid photo ID ready for identity verification during the login process.",
      "Use a laptop/desktop with a webcam. Mobile devices are not recommended.",
    ],
    note: {
      text: "Cheating or malpractice will result in",
      highlight: "immediate disqualification",
    },
  };
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
        "Spark made my CUET journey affordable. The scholarship helped me focus on studying without worrying about finances.",
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
        "My full scholarship under Spark made my dream of studying at a top university possible. Can’t thank CUET Plus enough!",
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
  const whatsNextData = {
    cards: [
      {
        icon: performanceImg,
        title: "Performance Analysis:",
        description:
          "Receive a detailed report highlighting your strengths and areas to improve.",
        alt: "Performance Analysis Icon",
      },
      {
        icon: notificationImg,
        title: "Scholarship Notification:",
        description:
          "Winners will be notified via email and phone by 30th December 2024.",
        alt: "Scholarship Notification Icon",
      },
      {
        icon: enrollImg,
        title: "Enroll in CUET Plus Programs:",
        description:
          "Use your scholarship to join our expert-led CUET preparation courses.",
        alt: "Enroll in CUET Plus Programs Icon",
      },
    ],
  };
  const whyChooseData = {
    heading: "Why Choose CUET Spark?",
    reasons: [
      {
        imageUrl: EmpathyIcon,
        title: "Empathy Appeal",
        description:
          "We recognize the financial hurdles many students face and are here to ensure that no deserving student is left behind.",
      },
      {
        imageUrl: CredibilityIcon,
        title: "Credibility",
        description:
          "Over 10,000 students have benefited from CUET Plus’s scholarship programs, achieving top results and admissions to leading universities.",
      },
      {
        imageUrl: MotivationalIcon,
        title: "Motivational Insight",
        description:
          "Scholarships are more than financial aid—they are a testament to your potential and a catalyst for your future success.",
      },
    ],
  };
  const faqs = [
    {
      question: "What is the Spark Scholarship Program by CUET Plus?",
      answer:
        "The Spark Scholarship Program offers financial aid for the two-year foundation course, combining CUET and board exam preparation for students of Classes 11 and 12.",
    },
    {
      question: "How can I apply for the Spark Scholarship?",
      answer:
        "You can apply for the Spark Scholarship by registering for the Scholar Plus Scholarship Test, conducted by CUET Plus.",
    },
    {
      question: "Who is eligible for the Spark Scholarship Program?",
      answer:
        "Students entering Class 11 and enrolling in the Spark Program - two-year foundation course are eligible for the scholarship.",
    },
    {
      question: "Does the Spark Scholarship cover full tuition fees?",
      answer:
        "Yes, students who excel in the Scholar Plus Scholarship Test may receive up to 100% tuition fee waiver under this program.",
    },
    {
      question: "What are the benefits of the Spark Scholarship?",
      answer:
        "The Spark Scholarship provides access to expert faculty, advanced study material, and a comprehensive curriculum for CUET and board exam preparation.",
    },
    {
      question:
        "Is the Spark Scholarship available for students in all streams?",
      answer:
        "Yes, the scholarship is open to students from Commerce, Science, and Humanities streams.",
    },
  ];
  const callToActionData = {
    title: "Ready to Excel? Join Spark Now!",
    description:
      "Take the first step toward your academic success. Register today and let CUET Plus guide you to your dream university.",
    buttonText: "Register for Spark Scholarship Test",
    link: "/scholarship-form",
    footerText: "CUET Plus – Empowering Aspirations, One Student at a Time.",
  };
  return (
    <div>
      <Helmet>
        <title>
          SPARK CUET Scholarship Test - Apply for CUET UG SPARK Scholarship
        </title>
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
        <meta
          property="og:url"
          content="https://cuet.plus/cuet-scholarship/spark-scholarship"
        />
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
      </Helmet>

      <StarScholarshipHero {...heroData} />
      <ScholarshipPrize {...prizeData} />
      <StarOpportunity {...opportunitiesData} />
      <StarStars {...starsData} />
      <HowToRegister {...registerData} />
      <Link to="/scholarship-form">
        <CallToActionBtn title="Register for the Test Now" />
      </Link>
      <StarSteps {...examInstructionsData} />
      <CounsellingTestimonial
        title="Success Stories from Our Students"
        review_imgs={review_imgs}
        paddinglr={{ paddingLeft: "10%", paddingRight: "10%" }}
      />
      <StarWhatsNext {...whatsNextData} />
      <StarWhyChoose {...whyChooseData} />
      <div style={{ padding: "15px" }}>
        <FAQ faqsGroup={[faqs]} />
      </div>
      <StarCallToAction {...callToActionData} />
    </div>
  );
};

export default SparkScholarship;

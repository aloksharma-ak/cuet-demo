import React from "react";
import styles from "../components/HomePage/HomePage.module.css";
import FAQ from "../components/HomePage/Communities/FAQ/FAQ";
import CuetBenefit from "../components/HomePage/CuetBenefit/CuetBenefit";
import CuetCourse from "../components/HomePage/CuetCourse/CuetCourse";
import CuetExam from "../components/HomePage/CuetExam/CuetExam";
import CuetUniversity from "../components/HomePage/CuetUniversity/CuetUniversity";
import FacultySection from "../components/HomePage/FacultySection/FacultySection";
// import HomeBlog from "../components/HomePage/HomeBlog/HomeBlog";
import HomeOurCentre from "../components/HomePage/HomeOurCentre/HomeOurCentre";
import HomeStreamCareer from "../components/HomePage/HomeStreamCareer/HomeStreamCareer";
import IntroSection from "../components/HomePage/IntroSection/IntroSection";
// import LatestUpdate from "../components/HomePage/LatestUpdate/LatestUpdate";
import Review from "../components/HomePage/Review/Review";
import ReviewSection from "../components/HomePage/ReviewSection/ReviewSection";
import HomeScholarShip from "../components/HomePage/HomeScholarShip/HomeScholarShip";
import HomeBlogLink from "../components/HomePage/HomeBlog/HomeBlogLink";
import ogImage from "../assets/CUETPlus_logo.png";
import twitterImage from "../assets/hero_img_1.webp";
import { Link } from "react-router-dom";
import anand_cuet_faculty from "../assets/anand_cuet_faculty.jpg";
import nisha_cuet_faculty from "../assets/nisha_cuet_faculty.jpg";
import nikky_cuet_faculty from "../assets/nikky_cuet_faculty.jpg";
import HomeCallToAction from "../components/HomePage/HomeCallToAction/HomeCallToAction";

function HomePage() {
  const faqs1 = [
    {
      question: "How can students or partners reach CUET Plus for inquiries?",
      answer:
        "Students and partners can contact CUET Plus via phone, email, or the website’s contact form for quick and efficient assistance.",
    },
    {
      question: "What is CUET, and why is it important for students?",
      answer:
        "CUET (Common University Entrance Test) is a national-level exam that determines admission to top universities in India, making it crucial for academic success.",
    },
    {
      question: "How does CUET Plus help students prepare for CUET?",
      answer:
        "CUET Plus is India’s fastest-growing educational platform, offering high-quality coaching, personalized guidance, and innovative learning resources to help students excel in CUET and board exams.",
    },
    {
      question: "What scholarships does CUET Plus offer to students?",
      answer:
        "CUET Plus offers the ScholarPlus program, including AchievePlus, AspirePlus, and ExcelPlus scholarships, providing full or partial fee waivers based on merit.",
    },
    {
      question: "What types of courses are available at CUET Plus?",
      answer:
        "We provide comprehensive programs like 2-Year Foundations, 1-Year Intermediate, CUET Crash Courses, and specialized coaching for Commerce, Science, and Humanities streams.",
    },
  ];
  const faqs2 = [
    {
      question:
        "How can students benefit from CUET Plus’s free counseling services?",
      answer:
        "Students can receive personalized guidance on stream selection, career planning, and exam strategies through free counseling sessions.",
    },
    {
      question: "Who are the faculty members at CUET Plus?",
      answer:
        "CUET Plus has a team of experienced and dedicated educators specializing in CUET subjects, ensuring top-quality instruction.",
    },
    {
      question: "Where are CUET Plus centers located?",
      answer:
        "CUET Plus centers are strategically located nationwide, featuring modern facilities and interactive learning environments.",
    },
    {
      question: "How can organizations partner with CUET Plus?",
      answer:
        "Organizations can collaborate with CUET Plus for scholarships, events, and technology integration, creating impactful educational opportunities.",
    },
    {
      question: "What is CUET Plus’s track record in delivering results?",
      answer:
        "CUET Plus boasts an impressive success rate, with many students achieving top ranks and gaining admission to prestigious universities.",
    },
  ];

  const reviewTitle = (
    <>
      Our students have achieved record-breaking results in the{" "}
      <span style={{ color: "#e07525" }}>CUET</span> so far
    </>
  );

  const reviews = [
    { no: "50", name: "100 Percentiles" },
    { no: "100", name: "99 Percentiles" },
    { no: "200", name: "95 Percentiles" },
  ];

  const facultyData = [
    {
      img: nikky_cuet_faculty,
      name: "Nikky",
      faculty: "(English Faculty)",
      description:
        "With over 15 years of experience in teaching English, Nikky is a renowned name in the world of language education. His approach to teaching goes beyond textbooks, focusing on developing students' comprehension, grammar, and language skills to ensure top results. His students have consistently ranked among India's best, making him highly respected in the field.",
    },
    {
      img: nisha_cuet_faculty,
      name: "Mrs. Nisha Panwar",
      faculty: "(Commerce Faculty)",
      description:
        "Mrs. Nisha Panwar brings over 10 years of expertise in teaching Accounts and Economics. Her deep understanding of commerce subjects and unique teaching methodologies have helped countless students achieve top marks in board exams. Mrs. Panwar’s focus on conceptual clarity and practical application makes learning engaging and effective.",
    },
    {
      img: anand_cuet_faculty,
      name: "Mr. Anand Jha",
      faculty: "(General Test Faculty)",
      description:
        "Mr. Anand Jha is a seasoned educator with 15 years of experience in preparing students for General Knowledge, Current Affairs, and various reasoning subjects. His vast knowledge and practical problem-solving techniques make him an exceptional mentor for CUET aspirants. Under his guidance, students consistently deliver outstanding results in competitive exams.",
    },
  ];

  return (
    <>
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
          Best CUET Coaching in India for Online & Offline Preparation
        </h1>
        <h2 style={{ backgroundColor: "transparent", color: "transparent" }}>
          Top CUET coaching centers in India
        </h2>
      </div>

      <IntroSection />
      <CuetExam />
      <CuetUniversity />
      <HomeScholarShip />
      <CuetCourse />
      <Link to="/our-courses" style={{ position: "absolute", zIndex: "-200" }}>
        <div
          className="course-page-btn"
          style={{ color: "transparent", backgroundColor: "transparent" }}
        >
          Explore CUET Courses
        </div>
      </Link>
      <CuetBenefit />
      <Review reviewTitle={reviewTitle} reviews={reviews} />
      <ReviewSection />
      <HomeStreamCareer />
      <FacultySection
        title="Our CUET Faculty"
        facultyData={facultyData}
        facultySection1={{ padding: "4vw 12% 2vw" }}
      />
      <HomeOurCentre />
      {/* <HomeBlog /> */}
      <HomeCallToAction />
      <HomeBlogLink />
      <div className={styles.faqs}>
        <FAQ faqsGroup={[faqs1, faqs2]} />
      </div>
    </>
  );
}

export default HomePage;

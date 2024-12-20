import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CompanyIntro from "../components/AboutCompany/CompanyIntro/CompanyIntro";
import CompanyMV from "../components/AboutCompany/CompanyMV/CompanyMV";
import OurJourney from "../components/AboutCompany/OurJourney/OurJourney";
import Achievement from "../components/AboutCompany/Achievement/Achievement";
import OurFocus from "../components/AboutCompany/OurFocus/OurFocus";
import course_cuet_img_1 from "../assets/course_cuet_img_1.avif";
import course_cuet_img_2 from "../assets/course_cuet_img_2.avif";
import course_cuet_img_3 from "../assets/course_cuet_img_3.avif";
import image from "../assets/visionImage.png";
import imageTeam from "../assets/founderManagementTeamImg.jpg";
import cuet_image from "../assets/cuetplus_about.jpg";
import { Link, useLocation } from "react-router-dom";
import AboutMissionVision from "../components/AboutCompany/AboutMissionVision/AboutMissionVision";
import TeamSection from "../components/AboutCompany/TeamSection/TeamSection";
import Benefits from "../components/AboutCompany/Benefits/Benefits";
import PartnersSection from "../components/AboutCompany/Partners/PartnersSection";
import CounsellingTestimonial from "../components/CounsellingAssessment/CounsellingTestimonial/CounsellingTestimonial";

import review_img_1 from "../assets/31.png";
import review_img_2 from "../assets/21.png";
import review_img_3 from "../assets/12.png";
import review_img_4 from "../assets/15.png";
import review_img_5 from "../assets/22.png";
import review_img_6 from "../assets/5.png";
import review_img_7 from "../assets/17.png";
import review_img_8 from "../assets/23.png";
import review_img_9 from "../assets/26.png";
import review_img_10 from "../assets/24.png";

import AboutConnect from "../components/AboutCompany/AboutConnect/AboutConnect";
import ContactSection, {
  AboutInquiryForm,
} from "../components/AboutCompany/ContactSection/ContactSection";
import { IoMdClose } from "react-icons/io";

const STUDENT_QUERY_SHEET_URL = import.meta.env
  .VITE_GOOGLE_SHEET_API_URL_STUDENTS;
const PARTNER_QUERY_SHEET_URL = import.meta.env
  .VITE_GOOGLE_SHEET_API_URL_PARTNERS;

const AboutCompany = () => {
  const achievements = [
    {
      title: "1st Place",
      description:
        "50,000+ Students Trained:Guiding students to success inCUET and beyond.",
    },
    {
      title: "2nd Place",
      description:
        "1,000+ top universityadmissions achievedthrough CUETpreparation.",
    },
    {
      title: "3rd Place",
      description:
        "2,000+ Scholarships Awarded:Supporting students fromdiverse backgrounds.",
    },
    {
      title: "4th Place",
      description:
        "10+ social initiatives launched to provide scholarships to underprivileged students.",
    },
    {
      title: "5th Place",
      description:
        "15+ States Served: Making quality education accessible nationwide.",
    },
    {
      title: "6th Place",
      description:
        "1 Million+ Mock TestsConducted: Ensuringstudents are exam-ready.",
    },
  ];
  const heading = ["Out 10 year achievements", "Creating impact at a scale"];

  const images = [
    { img: course_cuet_img_1 },
    { img: course_cuet_img_2 },
    { img: course_cuet_img_3 },
    { img: course_cuet_img_1 },
    { img: course_cuet_img_2 },
    { img: course_cuet_img_3 },
  ];
  const headingWork = ["Work with us", "Join us and make a difference"];

  const contentData = {
    subTitle: "Our vision",
    title: "Our Commitment to Your Success",
    descriptions: [
      "At CUET Plus, we're on a mission to empower every student with the skills, knowledge, and confidence needed to excel in the CUET, unlocking doors to India's top universities. We believe education should be accessible, affordable, and high-quality for all.",
      "Our vision is a future where every dedicated student has access to resources and expert guidance for success.",
      "Through personalized coaching, technology-driven learning, and a student-first approach, CUET Plus strives to create a nurturing environment that not only prepares students for exams but also shapes them into tomorrow's leaders, scholars, and change-makers. Your journey is our commitment.",
    ],
    btnText: "JOIN NOW",
    image: image,
  };
  const contentDataTeam = {
    subTitle: "Our Team",
    title: "The Visionaries Behind CUETPlus",
    descriptions: [
      `The success of CUETPlus is driven by a passionate team of educators and
        visionaries dedicated to empowering students on their journey to top
        universities. Founded by Mr. Anand Jha alongside Pragati Daga, Soumya
        Singh, Piyush Jaiswal, Anish Tigga, Nikita Mehto, Suman Tigga, and Rttik
        Kumar, CUET Plus was established with a mission to reshape the CUET
        preparation landscape by delivering high-quality education and
        accessible resources.`,
      `CUETPlus Founders & Management — building futures, one student at a time.`,
    ],
    btnText: "JOIN NOW",
    image: imageTeam,
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#founders-and-leadership") {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -80; // Fixed offset for proper positioning
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    if (location.hash === "#mission-vision") {
      const element = document.querySelector(location.hash);
      if (element) {
        const yOffset = -80; // Fixed offset for proper positioning
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  const [overlay, setOverlay] = useState({ isOpen: false, type: "" });
  const [isHoveredClose, setIsHoveredClose] = useState(false);

  const handleStudentBtn = () => setOverlay({ isOpen: true, type: "student" });
  const handlePartnerBtn = () => setOverlay({ isOpen: true, type: "partner" });
  const closeOverlay = () => setOverlay({ isOpen: false, type: "" });

  return (
    <>
      <Helmet>
        <title>About CUETPlus - Empowering Students for CUET Success</title>
        <meta
          name="description"
          content="Learn about CUETPlus, a leader in CUET preparation. Explore our journey, achievements, and the passionate team behind our mission to empower students."
        />
        <meta
          name="keywords"
          content="CUET Plus, CUET preparation, education, CUET coaching, CUET vision, CUET team, online coaching, education empowerment"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CUETPlus Team" />
        <meta name="language" content="English" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="About CUETPlus - Empowering Students for CUET Success"
        />
        <meta
          property="og:description"
          content="CUETPlus is dedicated to empowering students with the knowledge and skills to excel in the CUET, with personalized coaching and expert guidance."
        />
        <meta property="og:image" content={cuetImage} />
        <meta property="og:image:alt" content="CUETPlus Vision Image" />
        <meta property="og:url" content="https://cuet.plus/about-company" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CUETPlus Coaching" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CUETPlusOfficial" />
        <meta
          name="twitter:title"
          content="About CUETPlus - Empowering Students for CUET Success"
        />
        <meta
          name="twitter:description"
          content="CUETPlus empowers students with the tools and guidance they need to succeed in CUET exams, led by a passionate team of experts."
        />
        <meta name="twitter:image" content={imageTeam} />
        <meta name="twitter:image:alt" content="CUETPlus Team" />

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
          {`
        (function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-TFD9H5H4");
      `}
        </script>

        {/* Conversion Tracking */}
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

      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "0rem",
          textAlign: "center",
          color: "#95a6a0",
          fontSize: "",
          fontWeight: "bold",
          zIndex: "-100",
        }}
      >
        <h1
          style={{
            backgroundColor: "transparent",
            color: "transparent",
            fontSize: "2vw",
            fontWeight: "bold",
            margin: "0",
            padding: "0",
          }}
        >
          Best CUET coaching and preparation for successful university
          admissions
        </h1>
        <h2 style={{ backgroundColor: "transparent", color: "transparent" }}>
          Top CUET coaching institute for UG admissions
        </h2>
        <Link
          to="/our-courses"
          style={{ position: "absolute", zIndex: "-200" }}
        >
          <div
            className="course-page-btn"
            style={{ backgroundColor: "transparent", color: "transparent" }}
          >
            Explore CUET Courses
          </div>
        </Link>
      </div>

      <CompanyIntro />
      <OurJourney />
      <div
        id="mission-vision"
        style={{
          scrollMarginTop: "100px",
        }}
      >
        <AboutMissionVision />
      </div>
      <OurFocus />
      <div
        id="founders-and-leadership"
        style={{
          scrollMarginTop: "100px",
        }}
      >
        <TeamSection />
      </div>
      <Benefits />
      <Achievement achievements={achievements} heading={heading} />
      <PartnersSection />
      <div style={{ padding: "3vw 10%" }}>
        <CounsellingTestimonial review_imgs={review_imgs} />
      </div>
      <ContactSection
        handleStudentBtn={handleStudentBtn}
        handlePartnerBtn={handlePartnerBtn}
      />
      {/* <AboutConnect title={`Let's Connect`} /> */}

      {/* <CompanyMV contentData={contentData} /> */}
      {/* <Achievement achievements={images} heading={headingWork} /> */}
      {/* <CompanyMV contentData={contentDataTeam} /> */}
      {/* Overlay and Form */}
      {overlay.isOpen && (
        <div style={overlayStyles.overlay} onClick={closeOverlay}>
          <div
            style={overlayStyles.formContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                ...overlayStyles.closeBtn,
                color: isHoveredClose ? "#e07525" : "#fff",
              }}
              onClick={closeOverlay}
              onMouseEnter={() => setIsHoveredClose(true)}
              onMouseLeave={() => setIsHoveredClose(false)}
            >
              <IoMdClose />
            </button>
            {overlay.type === "student" && (
              <AboutInquiryForm
                title="Student Query"
                desc="Have Queries? Get Expert Guidance Now!"
                desc2="Ask us anything - we're here to help you succeed!"
                query="Your query"
                GOOGLE_SHEET={STUDENT_QUERY_SHEET_URL}
                closeOverlay={closeOverlay}
              />
            )}
            {overlay.type === "partner" && (
              <AboutInquiryForm
                title="Partner Query"
                desc="Interested In Partnering with us?"
                desc2="Contact us today to discuss how we can work together."
                query="How can we help you?"
                GOOGLE_SHEET={PARTNER_QUERY_SHEET_URL}
                closeOverlay={closeOverlay}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AboutCompany;

const review_imgs = [
  {
    img: review_img_1,
    name: "Priya S.",
    class: "Class 10 Student",
    description:
      "CUET Plus helped me choose the right stream for my future. Disha Plus gave me clarity on my strengths, and now I'm excelling in Humanities!",
  },
  {
    img: review_img_2,
    name: "Rajat K.",
    class: "Class 12 Student",
    description:
      "The Vision Plus counseling session was life-changing. I now have a clear career plan, and my confidence has skyrocketed!",
  },
  {
    img: review_img_3,
    name: "Aarti M.",
    class: "Class 10 Student",
    description:
      "I was unsure about my options after Class 10, but CUET Plus stream counseling made it simple. Their advice was practical and personalized.",
  },
  {
    img: review_img_4,
    name: "Ankita J.",
    class: "Class 9 Student",
    description:
      "CUET Plus counselors are incredibly knowledgeable. They guided me toward a stream that matches my passion and career goals.",
  },
  {
    img: review_img_5,
    name: "Harsh T.",
    class: "Class 10 Student",
    description:
      "The counseling session at CUET Plus was so detailed. They not only helped me pick a stream but also explained future career opportunities.",
  },
  {
    img: review_img_6,
    name: "Rohan S.",
    class: "Class 10 Student",
    description:
      "I loved how the Disha Plus program analyzed my skills and interests. Now, I’m on the right path for my dream career in Science!",
  },
  {
    img: review_img_7,
    name: "Simran D.",
    class: "Class 9 Student",
    description:
      "CUET Plus helped me identify my true potential. I’m now pursuing Commerce, and I couldn’t be happier with my choice.",
  },
  {
    img: review_img_8,
    name: "Mahak L.",
    class: "Class 12 Student",
    description:
      "Vision Plus gave me the confidence to pursue my dream college. Their guidance on CUET preparation was spot on!",
  },
  {
    img: review_img_9,
    name: "Arjun V.",
    class: "Class 11 Student",
    description:
      "The counseling session was super interactive. They even helped me plan out a roadmap for CUET and board exams together.",
  },
  {
    img: review_img_10,
    name: "Nidhi P.",
    class: "Class 10 Student",
    description:
      "I feel so much more confident after my counseling session. CUET Plus simplified the overwhelming process of stream selection.",
  },
];

const overlayStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  formContainer: {
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "1.5rem",
    cursor: "pointer",
    background: "none",
    border: "none",
    transition: "color 0.3s ease",
  },
};

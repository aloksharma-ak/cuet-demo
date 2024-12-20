import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./KnowUs.module.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import cuetplus_about_img from "../../../assets/cuetplus_about.jpg";
import founderManagementTeamImg from "../../../assets/founderManagementTeamImg.jpg";
import missionVisionImg from "../../../assets/missionVisionImg.jpg";
import coreValueImg from "../../../assets/coreValueImg2.jpg";
import edgeImg from "../../../assets/edgeImg.jpg";
import { RiTwitterXFill } from "react-icons/ri";
import media from "../../../assets/media.jpg";
import StudentsImg from "../../../assets/StudentsImg.png";
import PartnerImg from "../../../assets/PartnerImg.png";

import { MdEmail, MdPhone } from "react-icons/md";
import style from "./ContactCard.module.css";
import { useSpring, animated, useSprings } from "@react-spring/web";

const ContactCard = ({ title, text, email, phone, footerText, image }) => {
  return (
    <div className={style.card}>
      <img src={image} alt={`${title} Image`} className={style.cardImg} />
      <div className={style.cardContent}>
        <h2 className={style.cardTitle}>{title}</h2>
        <p className={style.cardText}>{text}</p>
        <div className={style.contactInfo}>
          <Link to={`mailto:${email}`}>
            <div className={style.iconText}>
              <MdEmail className={style.icon} />
              <span>{email}</span>
            </div>
          </Link>
          <Link to={`tel:${phone}`}>
            <div className={style.iconText}>
              <MdPhone className={style.icon} />
              <span>{phone}</span>
            </div>
          </Link>
        </div>
        <p className={style.footerText}>{footerText}</p>
      </div>
    </div>
  );
};

const AboutCuetPlus = () => {
  const animationSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={animationSpring} className={styles.componentContainer}>
      <div className={styles.componentContent}>
        <h1 className={styles.componentContentHeading}>
          Shaping Futures with <span>CUETPlus</span>
        </h1>
        <div className={styles.componentContentDesc}>
          Established in 2022, CUETPlus is India's leading and fastest-growing
          coaching platform for Common University Entrance Test (CUET)
          preparation. we go beyond traditional coaching by offering a blend of
          classroom and online learning options, along with expertly curated
          study materials, and an extensive mock test series, all designed to
          help students excel in the CUET. Our approach is rooted in
          personalized learning, led by top educators who are dedicated to
          guiding you at every step. We're not just preparing you for an
          exam—we're paving the way to your dream college and setting the
          foundation for a brighter future.
        </div>
        <div className={styles.componentContentDesc}>
          Join <span>CUETPlus</span> — your pathway to knowledge, confidence,
          and academic excellence.
        </div>
        <div className={styles.aboutCuetPlusLink}>
          <Link to="http://www.Facebook.com/cuetplus">
            <FaFacebookF />
          </Link>
          <Link to="http://www.Instagram.com/cuetplus">
            <FaInstagram />
          </Link>
          <Link to="http://www.x.com/cuetplus">
            <RiTwitterXFill />
          </Link>
          <Link to="http://www.YouTube.com/@cuetplus">
            <FaYoutube />
          </Link>
        </div>
      </div>
      <div className={styles.componentContentImage}>
        <img loading="lazy" src={cuetplus_about_img} alt="Uploading" />
      </div>
    </animated.div>
  );
};

const FoundersAndManagementTeam = () => (
  <div className={styles.componentContainer}>
    <div className={styles.componentContent}>
      <h1 className={styles.componentContentHeading}>
        The Visionaries Behind <span>CUETPlus</span>
      </h1>
      <div className={styles.componentContentDesc}>
        The success of CUETPlus is driven by a passionate team of educators and
        visionaries dedicated to empowering students on their journey to top
        universities. Founded by Mr. Anand Jha alongside Pragati Daga, Soumya
        Singh, Piyush Jaiswal, Anish Tigga, Nikita Mehto, Suman Tigga, and Rttik
        Kumar, CUET Plus was established with a mission to reshape the CUET
        preparation landscape by delivering high-quality education and
        accessible resources.
      </div>
      <div className={styles.componentContentDesc}>
        Each team member brings unique expertise, from academic excellence to
        strategic program development, ensuring CUETPlus remains at the
        forefront of CUET coaching. Their commitment to innovative,
        student-centered learning has transformed CUET Plus into India's leading
        CUET preparation platform, where every student's potential is nurtured
        and celebrated.
      </div>
      <div className={styles.componentContentDesc}>
        <span>CUETPlus Founders & Management</span> — building futures, one
        student at a time.
      </div>
    </div>
    <div className={styles.componentContentImage}>
      <img
        loading="lazy"
        src={founderManagementTeamImg}
        alt="Founder & Management Team of CUETPlus"
      />
    </div>
  </div>
);

const MissionAndVision = () => (
  <div className={styles.componentContainer}>
    <div className={styles.componentContent}>
      <h2 className={styles.componentContentHead}>Our Mission</h2>
      <div
        className={styles.componentContentDesc}
        style={{ marginBottom: "0.15rem" }}
      >
        At CUET Plus, Our mission is to empower students with the knowledge and
        skills required to excel in the CUET, helping them achieve their
        academic goals and unlock the doors to top universities. We are
        dedicated to providing affordable, high-quality, accessible, and
        personalized coaching to ensure that every student can achieve exam
        success and a bright future.
      </div>
      <h2 className={styles.componentContentHead}>Our Vision</h2>
      <div
        className={styles.componentContentDesc}
        style={{ marginBottom: "0.15rem" }}
      >
        We envision a future where every deserving student in India has access
        to quality education and the opportunity to pursue higher studies at
        prestigious universities. CUET Plus aims to be at the forefront of
        educational innovation, using technology, expert mentorship, and
        student-centric teaching methods to shape the next generation of
        leaders, scholars, and professionals.
      </div>
      <h2 className={styles.componentContentHead}>Our Mission</h2>
      <div
        className={styles.componentContentDesc}
        style={{ marginBottom: "0rem" }}
      >
        In essence, CUET Plus is driven by a student-first approach, blending
        excellence, accessibility, integrity, and innovation to create a
        transformative learning journey. By addressing individual needs with
        personalized guidance and unwavering support, we empower students from
        all backgrounds to achieve their academic goals and build a foundation
        for lifelong success.
      </div>
    </div>
    <div className={styles.componentContentImage}>
      <img
        loading="lazy"
        src={missionVisionImg}
        alt="Mission, Vision & Values of CUETPlus"
      />
    </div>
  </div>
);

const MediaCoverage = () => (
  <div className={styles.componentContainer}>
    <div className={styles.componentContent}>
      <h1
        className={styles.componentContentHeading}
        style={{ fontSize: "2.3vw" }}
      >
        Celebrating Excellence in <span>Education</span>
      </h1>
      <div className={styles.componentContentDesc}>
        At CUETPlus, our success and commitment to excellence have been widely
        recognized by leading media outlets. From top educational magazines to
        popular online platforms, our innovative approach to CUET preparation
        has been featured for its impact on students' lives. News articles and
        interviews have highlighted our expert faculty, personalized learning
        methods, and outstanding results.
      </div>
      <div className={styles.componentContentDesc}>
        This recognition reflects the trust students and parents place in us as
        a reliable guide toward academic success. Whether it’s our achievements
        or inspiring student stories, the media has captured our journey,
        celebrating our efforts to empower students across India. CUETPlus
        continues to stand out as a pioneer in education, creating pathways to
        success and shaping bright futures!
      </div>
    </div>
    <div className={styles.componentContentImage}>
      <img loading="lazy" src={media} alt="Core value of CUETPlus" />
    </div>
  </div>
);

const ContactUs = () => (
  <div className={styles.componentContainer}>
    <div
      style={{ display: "flex", gap: "10px", justifyContent: "space-between" }}
    >
      <ContactCard
        title="STUDENT QUERY"
        text="Have Queries? Get Expert Guidance Now!"
        email="student@cuet.plus"
        phone="+917428989898"
        footerText="Ask us anything – we’re here to help you succeed!"
        image={StudentsImg}
      />
      <ContactCard
        title="PARTNER QUERY"
        text="Interested in Partnering with Us?"
        email="partner@cuet.plus"
        phone="+917428989898"
        footerText="Connect with us today to discuss how we can work together."
        image={PartnerImg}
      />
    </div>
  </div>
);

function KnowUs() {
  const menuItemsData = [
    "Company Overview",
    "Founders & Leadership",
    "Mission, Vision & Values",
    "Media Coverage",
    "Contact Us",
  ];

  const [selectedItem, setSelectedItem] = useState("Company Overview");

  // Create staggered animation for menu items
  const springs = useSprings(
    menuItemsData.length,
    menuItemsData.map((item, index) => ({
      opacity: 1,
      transform: "translateY(0)",
      from: { opacity: 0, transform: "translateY(-10px)" },
      config: { tension: 250, friction: 20 },
      delay: index * 100,
    }))
  );

  const getSelectedComponent = () => {
    switch (selectedItem) {
      case "Company Overview":
        return <AboutCuetPlus />;
      case "Founders & Leadership":
        return <FoundersAndManagementTeam />;
      case "Mission, Vision & Values":
        return <MissionAndVision />;
      case "Media Coverage":
        return <MediaCoverage />;
      case "Contact Us":
        return <ContactUs />;
      default:
        return <p>No content available</p>;
    }
  };

  return (
    <div className={styles.menuDrop}>
      <div className={styles.menuDropContainer}>
        <div className={styles.menuDropHeader}>
          {springs.map((style, index) => (
            <animated.h2
              key={index}
              className={`${styles.menuItem} ${
                index % 2 === 0 ? styles.bgDarkGray : styles.bgLightGray
              } ${
                selectedItem === menuItemsData[index] ? styles.selected : ""
              }`}
              style={style}
              onClick={() => setSelectedItem(menuItemsData[index])}
              onMouseEnter={() => setSelectedItem(menuItemsData[index])}
            >
              {menuItemsData[index]} <IoIosArrowForward />
            </animated.h2>
          ))}
        </div>
        <div className={styles.menuDropContent}>
          {getSelectedComponent() ? (
            getSelectedComponent()
          ) : (
            <p>No content for {selectedItem}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default KnowUs;

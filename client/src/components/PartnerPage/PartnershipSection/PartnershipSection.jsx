import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import styles from "./PartnershipSection.module.css";
import statistics from "../../../assets/statistics.png";
import call_center from "../../../assets/call-center.png";
import brand from "../../../assets/brand.png";
import will from "../../../assets/will.png";
import { Link } from "react-router-dom";

const PartnershipSection = () => {
  const benefits = [
    {
      title: "Established Leader",
      description:
        "CUET Plus is a trusted name in CUET preparation with a proven track record of student success.",
    },
    {
      title: "Nationwide Presence",
      description:
        "Be part of a rapidly growing network that’s dynamically transforming education across India.",
    },
    {
      title: "Student-Centric Approach",
      description:
        "Our courses are designed to deliver real results, making us a favorite among students and parents.",
    },
    {
      title: "Marketing Power",
      description:
        "Leverage CUET Plus’s national advertising campaigns, social media presence, and technical expertise.",
    },
    {
      title: "End-to-End Training",
      description:
        "Get access to our robust training programs, operational guidance, and tools to run your business seamlessly.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Utilize our advanced online learning platform to attract more students and enhance learning outcomes.",
    },
    {
      title: "High-Demand Market",
      description:
        "With CUET gaining prominence, the demand for quality preparation has skyrocketed.",
    },
    {
      title: "Scalable Model",
      description:
        "Whether you’re starting fresh or looking to expand, we offer opportunities to grow locally & statewide.",
    },
    {
      title: "Diverse Offerings",
      description:
        "From classroom & online courses to crash programs, we provide flexible options to meet your audience’s needs.",
    },
    {
      title: "Change Lives",
      description:
        "Help students unlock their potential & achieve their dreams of admission to top colleges.",
    },
    {
      title: "Empower Communities",
      description:
        "Provide access to high-quality, affordable, and inclusive education in your local area and beyond.",
    },
    {
      title: "Be Part of a Mission",
      description:
        "Join us in redefining education in India & contributing to a brighter future for thousands of students.",
    },
  ];

  const cards = [
    { img: brand, desc: "A Brand You Can Trust" },
    { img: statistics, desc: "Limitless Growth Opportunities" },
    { img: will, desc: "Full Support for Your Success" },
    { img: call_center, desc: "Make a Lasting Impact" },
  ];

  return (
    <div className={styles.partnershipContainer}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }} // Fade in with animation when visible
        viewport={{}}
      >
        A Partnership That Drives Success
      </motion.h1>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }} // Fade in after title when visible
        viewport={{}}
      >
        Joining CUET Plus isn’t just about partnership; it’s about becoming a
        part of India’s leading education revolution. Here’s why CUET Plus is
        the right partner for you:
      </motion.p>

      <div className={styles.contentSection}>
        {/* Map through the four cards and their corresponding benefits */}
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={styles.cardSection}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{}}
          >
            <div className={styles.card}>
              <img src={card.img} alt="img" />
              <p>{card.desc}</p>
            </div>

            <motion.div
              className={styles.textSection}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.4 }}
              viewport={{}}
            >
              <ul>
                {/* Render benefits for this card */}
                {benefits.slice(index * 3, index * 3 + 3).map((item, i) => (
                  <li key={i}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className={styles.partnerButton}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{}}
      >
        <Link to="/partnership-form">Partner with Us</Link>
      </motion.button>
    </div>
  );
};

export default PartnershipSection;

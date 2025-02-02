import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./IntroSection.module.css";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import hero_img_1 from "../../../assets/hero_img_1.webp";
import hero_img_2 from "../../../assets/hero_img_2.webp";
import hero_img_3 from "../../../assets/hero_img_3.webp";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { AboutForm } from "../../AboutCompany/AboutConnect/AboutConnect";
import { ModelPopUp } from "../../Header/MobileBottomMenuBtnPage/MobileBottomBtnPage/MobileCourses";
import { IoClose } from "react-icons/io5";

function IntroSection() {
  const [formClick, setFormClick] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const formRef = useRef(null);

  const heroImgData = [
    hero_img_1,
    hero_img_2,
    hero_img_3,
    hero_img_1,
    hero_img_2,
    hero_img_3,
    hero_img_1,
    hero_img_2,
    hero_img_3,
    hero_img_1,
    hero_img_2,
    hero_img_3,
    hero_img_1,
    hero_img_2,
    hero_img_3,
    hero_img_1,
    hero_img_2,
    hero_img_3,
  ];

  const handleClick = () => {
    setFormClick(true);
  };

  const handleOverlayClick = () => {
    setFormClick(false);
  };

  const handleBtnClick = () => {
    setIsBtnClicked(true);
  };

  const toggleFormOverlay = () => {
    setIsBtnClicked((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setIsBtnClicked(false);
      }
    };

    if (isBtnClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBtnClicked]);

  const STUDENT_QUERY_SHEET_URL = import.meta.env
    .VITE_GOOGLE_SHEET_API_URL_STUDENTS;

  return (
    <>
      <motion.div
        id="intro-section"
        className={styles.introSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.introContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className={styles.introHeading}>
            <motion.h2
              className={styles.introTitle}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Crack CUET + Boards
            </motion.h2>
            <motion.h3
              className={styles.introSubTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Best CUET Coaching in India
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            CUET Plus is India’s leading coaching institute for the Common
            University Entrance Test (CUET), offering expert guidance, top-tier
            study materials, and an advanced mock test series. With online and
            in-class programs led by experienced mentors, We ensure students are
            thoroughly prepared to excel in CUET and secure admissions to top
            universities. Empower your future with us.
          </motion.p>
          <div className={styles.introSlider}>
            <Swiper
              grabCursor={true}
              spaceBetween={50}
              loopAdditionalSlides={3}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={heroImgData.length > 1}
              modules={[Navigation, Autoplay]}
            >
              {heroImgData.map((img, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className={styles.slide}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={img} alt={`Slide ${index + 1}`} loading="lazy" />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <MdKeyboardArrowLeft className="swiper-button-prev" />
            <MdKeyboardArrowRight className="swiper-button-next" />
          </div>
          <motion.div
            className={styles.introBtn}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
          >
            <Link to="/counselling" className={styles.roundedBtn}>
              Free Counselling
            </Link>
            <Link to="#" className={styles.roundedBtn} onClick={handleBtnClick}>
              Free Master Class
            </Link>
          </motion.div>
        </motion.div>
        <div className={styles.introContactFormContainer}>
          <div
            style={{ display: formClick ? "none" : "block" }}
            className={styles.introContactForm}
          >
            <AboutForm
              onClick={handleClick}
              title="Inquiry"
              desc="Have Queries? Get Expert Guidance Now!"
              desc2="Ask us anything - we're here to help you succeed!"
              query="Your query"
              GOOGLE_SHEET={STUDENT_QUERY_SHEET_URL}
            />
          </div>
          {formClick && (
            <div className={styles.overlayDiv}>
              <div
                className={styles.overlayForm}
                onClick={handleOverlayClick}
              ></div>
              <div className={styles.cf}>
                <AboutForm
                  title="Inquiry"
                  desc="Have Queries? Get Expert Guidance Now!"
                  desc2="Ask us anything - we're here to help you succeed!"
                  query="Your query"
                  GOOGLE_SHEET={STUDENT_QUERY_SHEET_URL}
                  handleOverlayClick={handleOverlayClick}
                />
              </div>
            </div>
          )}
        </div>
        {isBtnClicked && (
          <div className={styles.formOverlay}>
            <div className={styles.formContent} ref={formRef}>
              <ModelPopUp />
              <button className={styles.closeBtn} onClick={toggleFormOverlay}>
                <IoClose />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default IntroSection;

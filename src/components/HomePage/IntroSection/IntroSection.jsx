import React, { useState } from "react";
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

function IntroSection() {
  const [formClick, setFormClick] = useState(false);

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

  const STUDENT_QUERY_SHEET_URL = import.meta.env
    .VITE_GOOGLE_SHEET_API_URL_STUDENTS;

  return (
    <>
      <div id="intro-section" className={styles.introSection}>
        <div className={styles.introContent}>
          <div className={styles.introHeading}>
            <h2 className={styles.introTitle}>Crack CUET + Boards</h2>
            <h3 className={styles.introSubTitle}>
              Best CUET Coaching in India
            </h3>
          </div>
          <p>
            CUET Plus is India’s leading coaching institute for the Common
            University Entrance Test (CUET), offering expert guidance, top-tier
            study materials, and an advanced mock test series. With online and
            in-class programs led by experienced mentors, We ensure students are
            thoroughly prepared to excel in CUET and secure admissions to top
            universities. Empower your future with us.
          </p>
          <div className={styles.introSlider}>
            <Swiper
              grabCursor={true}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={heroImgData.length > 1}
              slidesPerGroup={1}
              modules={[Navigation, Autoplay]}
            >
              {heroImgData.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.slide}>
                    <img src={img} alt={`Slide ${index + 1}`} loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <MdKeyboardArrowLeft className="swiper-button-prev" />
            <MdKeyboardArrowRight className="swiper-button-next" />
          </div>
          <div className={styles.introBtn}>
            <Link to="/counselling" className={styles.roundedBtn}>
              Free Counselling
            </Link>
            <Link to="#" className={styles.roundedBtn}>
              Free Master Class
            </Link>
          </div>
        </div>
        <div className={styles.introContactFormContainer}>
          <div style={{ display: formClick ? "none" : "block" }} className={styles.introContactForm}>
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
      </div>
    </>
  );
}

export default IntroSection;

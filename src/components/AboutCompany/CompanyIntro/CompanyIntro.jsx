import React from "react";
import styles from "./CompanyIntro.module.css";
import { Typewriter } from "react-simple-typewriter";
import Statistics from "./Statistics";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import img from "../../../assets/about_img.avif";
import img1 from "../../../assets/about_img1.avif";
import img2 from "../../../assets/cuetplus_about.jpg";
import { Link } from "react-router-dom";

const CompanyIntro = () => {
  const words = [
    "Join the CUETPlus journey.",
    "Smart study with CUETPlus.",
    "Get ready for CUET success.",
    "Your Pathway to Success.",
    "Dedicated to Your Success.",
    "Your Future Starts Here.",
  ];

  const images = [img2, img, img1, img2, img, img1, img2, img, img1, img2, img];

  return (
    <section className={styles.CompanyIntro}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>At CUETPlus, </h2>
        <span className={styles.aboutText}>
          <Typewriter
            words={words}
            loop={true}
            cursor
            cursorStyle="|"
            cursorColor="#e07525"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <p className={styles.aboutDesc}>
          Wherever you are, CUETPlus is there for you. Study in Delhi, study at
          a center near you, or online.
        </p>
        <Statistics />
        <div className={styles.btns}>
          {[
            { title: "Explore Our Programs", link: "/our-courses" },
            { title: "Partner With Us", link: "/become-a-partner" },
          ].map((elem, index) => (
            <Link to={elem.link} className={styles.btn}>
              <button className={styles.bt} key={index}>
                {elem.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.aboutSlider}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          style={{ width: "100%", height: "100%" }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              {<img src={image} alt="about" className={styles.aboutImg} />}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CompanyIntro;

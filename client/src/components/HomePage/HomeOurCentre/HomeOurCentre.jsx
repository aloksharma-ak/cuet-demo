import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import bihar_img from "../../../assets/Patna.jpg";
import delhi_img from "../../../assets/Delhi.avif";
import kolkata_img from "../../../assets/Kolkata.jpg";
import Ranchi_img from "../../../assets/Ranchi.jpg";
import styles from "./HomeOurCentre.module.css"; // Import the CSS module

const HomeOurCentre = () => {
  const [swiper, setSwiper] = useState(null);

  const mapImgData = [
    { state: "Bihar", place: "Patna", img: bihar_img },
    { state: "Delhi", place: "Delhi", img: delhi_img },
    { state: "West Bengal", place: "Kolkata", img: kolkata_img },
    { state: "Jharkhand", place: "Ranchi", img: Ranchi_img },
  ];

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <section id={styles.HomeOurCentre}>
      <div className={styles.ourCentreTitle}>
        <h2 className={styles.ourTitle}>Our Centres</h2>
      </div>

      <div className={styles.ourCentreContent}>
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={10}
          slidesPerView={4}
          slidesPerGroup={1}
          loop={mapImgData.length > 1}
          breakpoints={{
            300: {
              slidesPerView: 2, // Mobile devices
            },
            480: {
              slidesPerView: 2, // Mobile devices
            },  
            1024: {
              slidesPerView: 3, // Small laptops
            },
            1280: {
              slidesPerView: 4, // Desktops
            },
          }}
          className={styles.slider}
        >
          {mapImgData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.ourCentreCard}>
                <img
                  className={styles.ourCentreCardImg}
                  src={item.img}
                  alt={item.place}
                  loading="lazy"
                />
                <div className={styles.imgTitle}>
                  <h3 className={styles.ourCentreCardImgTitle}>{item.place}</h3>
                </div>
              </div>
                  <h4 className={styles.ourCentreCardImgTitle2}>{item.state}</h4>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.swiperNavigation}>
          <button onClick={handlePrev} className={styles.customPrev}>
            <IoIosArrowBack />
          </button>
          <button onClick={handleNext} className={styles.customNext}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeOurCentre;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import DU from "../../../assets/5-university.png";
import BHU from "../../../assets/6-university.png";
import AU from "../../../assets/3-university.jpg";
import JNU from "../../../assets/7-university.png";
import JMI from "../../../assets/8-university.png";
import AMU from "../../../assets/4-university.png";
import AUD from "../../../assets/2-university.png";
import BBAU from "../../../assets/10-university.png";
import GGSIPU from "../../../assets/1-university.png";
import HU from "../../../assets/12-university.png";
import NEHU from "../../../assets/11-university.png";
import TU from "../../../assets/13-university.png";
import MU from "../../../assets/14-university.png";
// import EE from "../../../assets/9-university.png";

import styles from "./CuetUniversity.module.css";
import { Link } from "react-router-dom";

function CuetUniversity() {
  const [swiper, setSwiper] = useState(null);

  const collegeData = [
    {
      img: DU,
      name: "Delhi University",
      price: "Packages: 10+ LPA",
      id: "01",
      url: "https://www.du.ac.in/",
    },
    {
      img: BHU,
      name: "Banaras Hindu University",
      price: "Packages: 7.4 LPA",
      id: "02",
      url: "https://www.bhu.ac.in",
    },
    {
      img: AU,
      name: "University of Allahabad",
      price: "Packages: 7.4 LPA",
      id: "03",
      url: "",
    },
    {
      img: JMI,
      name: "Jamia Milia Islamia",
      price: "Packages: 7.4 LPA",
      id: "04",
      url: "https://jmi.ac.in/",
    },
    {
      img: JNU,
      name: "Jawaharlal Nehru University",
      price: "Packages: 6 LPA",
      id: "05",
      url: "https://www.jnu.ac.in/main/",
    },
    {
      img: AMU,
      name: "Aligarh Muslim University",
      price: "Packages: 4 LPA",
      id: "06",
      url: "https://www.amu.ac.in/",
    },
    {
      img: AUD,
      name: "Dr. B. R. Ambedkar University, Delhi",
      price: "Packages: 4 LPA",
      id: "07",
      url: "https://aud.delhi.gov.in/",
    },
    {
      img: BBAU,
      name: "Babasaheb Bhimrao Ambedkar University",
      price: "Packages: 4 LPA",
      id: "08",
      url: "https://www.bbau.ac.in/",
    },
    {
      img: GGSIPU,
      name: "Guru Gobind Singh Indraprastha University",
      price: "Packages: 5 LPA",
      id: "09",
      url: "http://www.ipu.ac.in/",
    },
    {
      img: HU,
      name: "Hyderabad University",
      price: "Packages: 8 LPA",
      id: "10",
      url: "https://uohyd.ac.in/",
    },
    {
      img: NEHU,
      name: "North Eastern Hill University",
      price: "Packages: 6 LPA",
      id: "11",
      url: "https://www.nehu.ac.in/"
    },   
    {
      img: TU,
      name: "Tezpur University",
      price: "Packages: 7 LPA",
      id: "12",
      url: "https://www.tezu.ernet.in/"
    },
    {
      img: MU,
      name: "Mizoram University",
      price: "Packages: 6.5 LPA",
      id: "13",
      url: "https://mzu.edu.in/"
    },   
  ];

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  return (
    <div className={styles.CuetUniversityContainerMain}>
      <div className={styles.cuetUniversityContainer}>
        <div className={styles.cuetUniversityHeading}>
          <h2 className={styles.headingText}>
            Top Universities Participating in CUET
          </h2>
        </div>

        <div className={styles.cuetUniversityImage}>
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={handlePrev}
          >
            <IoIosArrowBack />
          </button>
          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={handleNext}
          >
            <IoIosArrowForward />
          </button>
          <Swiper
            onSwiper={setSwiper}
            grabCursor={true}
            spaceBetween={10}
            loop={collegeData.length > 1}
            className={styles.imageSlider}
            slidesPerGroup={1}
            breakpoints={{
              300: {
                slidesPerView: 2, // Mobile devices
              },
              360: {
                slidesPerView: 3, // Mobile devices
              },
              768: {
                slidesPerView: 4, // Tablets
              },
              1024: {
                slidesPerView: 5, // Small laptops
              },
              1280: {
                slidesPerView: 6, // Normal desktops
              },
            }}
          >
            {collegeData.map((data, index) => (
              <SwiperSlide key={index}>
                <Link to={data.url} target="_blank">
                  <div className={styles.imageContainer}>
                    <img src={data.img} alt={data.name} loading="lazy" />
                    <h2>{data.name}</h2>
                    {/* <div className={styles.imageOverlay}>
                  <span>{data.id}</span>
                  <p>{data.price}</p>
                </div> */}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CuetUniversity;

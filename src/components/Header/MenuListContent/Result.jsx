import React, { useState } from "react";
import style from "./Result.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import img4 from "../../../assets/4.png";
import img5 from "../../../assets/5.png";
import img6 from "../../../assets/6.png";
import img7 from "../../../assets/7.png";
import img8 from "../../../assets/8.png";
import img9 from "../../../assets/9.png";
import img10 from "../../../assets/10.png";
import img11 from "../../../assets/11.png";
import img12 from "../../../assets/22.png";
import img13 from "../../../assets/13.png";
import img14 from "../../../assets/25.png";
import img15 from "../../../assets/15.png";
import img16 from "../../../assets/28.png";
import img17 from "../../../assets/17.png";
import { useSpring, animated } from "@react-spring/web";

const ImageSlider = ({ title, images, autoplayDelay, breakpoints }) => {
  const [swiper, setSwiper] = useState(null);

  const handleNext = () => swiper?.slideNext();
  const handlePrev = () => swiper?.slidePrev();

  const animationSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={animationSpring} className={style.componentContainer}>
      <div className={style.componentContent}>
        <div className={style.componentContentTitle}>
          <h1>{title}</h1>
        </div>
        <div className={style.componentContentImage}>
          <button className={style.customPrev} onClick={handlePrev}>
            <IoIosArrowBack />
          </button>
          <button className={style.customNext} onClick={handleNext}>
            <IoIosArrowForward />
          </button>
          <Swiper
            onSwiper={setSwiper}
            spaceBetween={8}
            loop={images.length > 1}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false,
            }}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className={style.imageSlider}
            grabCursor={true}
            breakpoints={breakpoints}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={style.imageContainer}>
                  <img src={image} alt={`Slide ${index + 1}`} loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={style.componentBottom}>
        <div className={style.percentBox}>
          <div className={style.percentage}></div>
        </div>
        <div className={style.performanceText}>
          View all our <span>Star Performers</span>
        </div>
        <button className={style.btn}>View All</button>
      </div>
    </animated.div>
  );
};

const CuetCourse = () => (
  <ImageSlider
    title="200 + 100 %ilers in CUET UG 2022, 2023 & 2024"
    images={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]}
    autoplayDelay={1500}
    breakpoints={{
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1280: { slidesPerView: 6 },
    }}
  />
);

const BoardExamination = () => (
  <ImageSlider
    title="98%+ in Board Exam 2022, 2023 & 2024"
    images={[img11, img12, img13, img14, img15, img16, img17]}
    autoplayDelay={2500}
    breakpoints={{
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1280: { slidesPerView: 6 },
    }}
  />
);

const Result = () => {
  const menuItemsData = ["CUET Course", "Board Examination"];
  const [selectedItem, setSelectedItem] = useState(menuItemsData[0]);

  const renderSelectedComponent = () => {
    if (selectedItem === "CUET Course") return <CuetCourse />;
    if (selectedItem === "Board Examination") return <BoardExamination />;
    return <p>No content available</p>;
  };

  return (
    <div className={style.menuDrop}>
      <div className={style.menuDropContainer}>
        <div className={style.menuDropHeader}>
          {menuItemsData.map((item, index) => (
            <h2
              key={index}
              className={`${style.menuItem} ${
                index % 2 === 0 ? style.bgDarkGray : style.bgLightGray
              } ${selectedItem === item ? style.selected : ""}`}
              onClick={() => setSelectedItem(item)}
              onMouseEnter={() => setSelectedItem(item)}
            >
              {item}
            </h2>
          ))}
        </div>
        <div className={style.menuDropContent}>{renderSelectedComponent()}</div>
      </div>
    </div>
  );
};

export default Result;

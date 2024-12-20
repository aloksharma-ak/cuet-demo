import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import cardImg1 from "../../../assets/homeBlogImg.avif";
import styles from "./HomeBlog.module.css"; // Import CSS module

const HomeBlog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Ensuring swiper navigation works correctly when the component renders
  useEffect(() => {
    const swiper = document.querySelector(".swiper").swiper;
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    }
  }, []);

  const blogData = [
    {
      title: "NLSIU Bangalore cut off 2024: College-wise Cut off",
      desc: "The National Level Student Industrial Union (NLSIU) has announced the cut-off for the 2024 batch of its colleges. The cut-off will be announced on 15th March 2024.",
      img: cardImg1,
    },
    {
      title: "NLSIU Bangalore cut off 2024: College-wise Cut off",
      desc: "The National Level Student Industrial Union (NLSIU) has announced the cut-off for the 2024 batch of its colleges. The cut-off will be announced on 15th March 2024.",
      img: cardImg1,
    },
    {
      title: "NLSIU Bangalore cut off 2024: College-wise Cut off",
      desc: "The National Level Student Industrial Union (NLSIU) has announced the cut-off for the 2024 batch of its colleges. The cut-off will be announced on 15th March 2024.",
      img: cardImg1,
    },
    {
      title: "NLSIU Bangalore cut off 2024: College-wise Cut off",
      desc: "The National Level Student Industrial Union (NLSIU) has announced the cut-off for the 2024 batch of its colleges. The cut-off will be announced on 15th March 2024.",
      img: cardImg1,
    },
    {
      title: "NLSIU Bangalore cut off 2024: College-wise Cut off",
      desc: "The National Level Student Industrial Union (NLSIU) has announced the cut-off for the 2024 batch of its colleges. The cut-off will be announced on 15th March 2024.",
      img: cardImg1,
    },
    {
      title: "NLSIU Bangalore cut off 2024: College-wise Cut off",
      desc: "The National Level Student Industrial Union (NLSIU) has announced the cut-off for the 2024 batch of its colleges. The cut-off will be announced on 15th March 2024.",
      img: cardImg1,
    },
    {
      title: "NLSIU Bangalore cut off 2024: College-wise Cut off",
      desc: "The National Level Student Industrial Union (NLSIU) has announced the cut-off for the 2024 batch of its colleges. The cut-off will be announced on 15th March 2024.",
      img: cardImg1,
    },
    
  ];

  return (
    <section className={styles.homeBlog}>
      <div className={styles.homeBlogTitle}>
        <h1 className={styles.BlogTitle}>Latest Blogs</h1>
        <a className={styles.blogExplore}>
          View More
          <div className={styles.blogExploreIcon}>
            <IoIosArrowForward />
          </div>
        </a>
      </div>

      <div className={styles.homeBlogContent}>
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1, // Mobile devices
            },
            768: {
              slidesPerView: 2, // Tablets
            },
            1024: {
              slidesPerView: 3, // Small laptops
            },
            1280: {
              slidesPerView: 4, // Desktops
            },
          }}
        >
          {blogData.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className={styles.homeBlogCard}>
                <img
                  className={styles.homeBlogCardImg}
                  src={blog.img}
                  alt="Home Blog Card"
                  loading="lazy"
                />
                <div className={styles.homeBlogCardText}>
                  <h2 className={styles.homeBlogCardTitle}>
                    {blog.title}
                  </h2>
                  <p className={styles.homeBlogCardDesc}>
                    {blog.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.swiperNavigation}>
          <button ref={prevRef} className={styles.customPrev}>
            <IoIosArrowBack />
          </button>
          <button ref={nextRef} className={styles.customNext}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;

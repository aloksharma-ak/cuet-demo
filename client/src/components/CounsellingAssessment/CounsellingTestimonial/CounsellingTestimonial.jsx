import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import styles from "./CounsellingTestimonial.module.css";

function CounsellingTestimonial({ title, desc, paddinglr, review_imgs }) {
  return (
    <div className={styles.sectionReview} style={paddinglr}>
      {title && <h2>{title}</h2>}
      {desc && <p>{desc}</p>}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.reviewSwiper}
        style={{
          "--swiper-navigation-size": "1.2rem",
          "--swiper-pagination-bullet-color": "#e07525",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide for screens >= 640px
          },
          768: {
            slidesPerView: 2, // 2 slides for screens >= 768px
          },
          1024: {
            slidesPerView: 3, // 3 slides for screens >= 1024px
          },
        }}
      >
        {review_imgs &&
          review_imgs.map((review, index) => (
            <SwiperSlide key={index} className={styles.reviewSlide}>
              <div className={styles.reviewCard}>
                <div className={styles.studentDetails}>
                  <div className={styles.img}>
                    <img src={review.img} alt={review.name} loading="lazy" />
                  </div>
                  <div className={styles.cardTitle}>
                    <h3 className={styles.cardHead}>{review.name}</h3>
                    <h4 className={styles.cardDesc}>{review.class}</h4>
                  </div>
                </div>
                <p>{review.description}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CounsellingTestimonial;

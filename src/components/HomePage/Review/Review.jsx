import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "./Review.module.css";

const Review = ({ reviewTitle, reviews }) => {
  const clientsRef = useRef(null);
  const [reviewScore, setReviewScore] = useState(0);
  const [googleReviews, setGoogleReviews] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const animated = useRef(false);

  const animateNumbers = (finalValue, setter, duration = 1500, step = 1) => {
    let value = 0;
    const interval = Math.max(10, duration / (finalValue / step));
    const timer = setInterval(() => {
      value += step;
      setter(value >= finalValue ? finalValue : value);
      if (value >= finalValue) clearInterval(timer);
    }, interval);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          animateNumbers(reviews[0].no, setReviewScore);
          animateNumbers(reviews[1].no, setGoogleReviews);
          animateNumbers(reviews[2].no, setExperienceYears);
        }
      },
      { threshold: 0.1 }
    );

    if (clientsRef.current) observer.observe(clientsRef.current);
    return () => clientsRef.current && observer.unobserve(clientsRef.current);
  }, []);

  return (
    <section id="reviewPage" className={styles.reviewPage}>
      <div
        id="clients"
        ref={clientsRef}
        className={styles.clients}
        key={Math.random()}
      >
        {reviewTitle && (
          <h2 className={styles.contactPageTitle}>{reviewTitle}</h2>
        )}
        <div className={styles.clientReviewsBox}>
          <div className={styles.clientReviewItem}>
            <span className={styles.reviewNumber}>
              {reviewScore}
              <FaPlus />
            </span>
            <p className={styles.reviewTitle}>{reviews[0].name}</p>
          </div>
          <div className={styles.clientReviewItem}>
            <span className={styles.reviewNumber}>
              {googleReviews}
              <FaPlus />
            </span>
            <p className={styles.reviewTitle}>{reviews[1].name}</p>
          </div>
          <div className={styles.clientReviewItem}>
            <span className={styles.reviewNumber}>
              {experienceYears}
              <FaPlus />
            </span>
            <p className={styles.reviewTitle}>{reviews[2].name}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

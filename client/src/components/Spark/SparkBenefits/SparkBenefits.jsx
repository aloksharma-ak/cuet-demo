import React from "react";
import styles from "./SparkBenefits.module.css";
import CounsellingTestimonial from "../../CounsellingAssessment/CounsellingTestimonial/CounsellingTestimonial";


import { Link } from "react-router-dom";
import { CallToActionBtn } from "../../CuetScholarship/HowToRegister/HowToRegister";
import SparkBannerAction from "../SparkBannerAction/SparkBannerAction";

const SparkBenefits = ({
  addBenefitData,
  testimonialData,
  ctaBtn,
  ctaData,
}) => {
  
  return (
    <div className={styles.benefitsWrapper}>
      <div className={styles.SparkBenefits}>
        <h2 className={styles.title}>Additional Benefits</h2>
        {addBenefitData.map((section, index) => (
          <ListSection
            key={index}
            title={section.title}
            items={section.items}
            description={section.description}
            isParagraph={section.isParagraph}
          />
        ))}
        <div className={styles.testimonial}>
          <CounsellingTestimonial
            title={testimonialData.heading.title}
            desc={testimonialData.heading.desc}
            review_imgs={testimonialData.review_imgs}
            paddinglr={{ paddingLeft: "0%", paddingRight: "0%" }}
          />
          <Link to={`/${ctaBtn.link}`}>
            <CallToActionBtn title={ctaBtn.btn} />
          </Link>
        </div>
        <div>
          <SparkBannerAction {...ctaData} />
        </div>
      </div>
    </div>
  );
};

export default SparkBenefits;

const ListSection = ({ title, items, description, isParagraph }) => (
  <div className={styles.container}>
    <h3 className={styles.subTitle}>{title}</h3>
    {isParagraph ? (
      <p className={styles.description}>{description}</p>
    ) : (
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li className={styles.listItem} key={index}>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

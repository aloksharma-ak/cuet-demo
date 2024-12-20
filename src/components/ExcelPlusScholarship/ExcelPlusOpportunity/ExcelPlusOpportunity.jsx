import React from "react";
import img from "../../../assets/StudentsCont.jpg";
import styles from "./ExcelPlusOpportunity.module.css";

const ExcelPlusOpportunity = () => {
  const cardData = [
    {
      imgUrl: img,
      title: "Full tuition waivers",
      desc: "Covering CUET preparation fees for top-performing students.",
    },
    {
      imgUrl: img,
      title: "Merit-based discounts",
      desc: "Significant fee reductions for academically strong candidates.",
    },
    {
      imgUrl: img,
      title: "Additional Perks",
      desc: "Assistance with CUET application fees and collegeadmission charges.",
    },
  ];
  return (
    <div className={styles.opportunitySection}>
      <div className={styles.topSection}>
        <h2 className={styles.title}>
          YOUR TALENT DESERVES TO Shine<br />
          <span>– WE’RE HERE TO MAKE IT HAPPEN</span>
        </h2>
        <p className={styles.description}>
          The Star Scholarship Test is a merit-based online exam designed
          to identify and reward talented students with scholarships that make
          quality education accessible to all.
        </p>
      </div>
      {/* <div className={styles.bottomSection}>
        {cardData.map((data, index) => (
          <div className={styles.cardContainer} key={index}>
            <ExcelCard
              imgUrl={data.imgUrl}
              title={data.title}
              desc={data.desc}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ExcelPlusOpportunity;

const ExcelCard = ({ imgUrl, title, desc }) => (
  <div className={styles.card}>
    <img src={imgUrl} alt="Star Image" className={styles.excelImg} />
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDesc}>{desc}</p>
  </div>
);

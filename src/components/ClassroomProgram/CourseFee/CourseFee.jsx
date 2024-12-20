import React from "react";
import styles from "./CourseFee.module.css";
import { PiMapPinSimpleFill } from "react-icons/pi";
import picture_1 from "../../../assets/Picture1.png";
import picture_2 from "../../../assets/Picture2.png";
import picture_4 from "../../../assets/Picture4.png";
import goal from "../../../assets/goal.png";
import cup from "../../../assets/cup.png";

function CourseFee() {
  const whyData = [
    { img: picture_1, title: "BEST FACULTY IN INDIA" },
    { img: picture_2, title: "HIGHEST SUCCESS RATE IN JEE & NEET" },
    { img: goal, title: "LEGACY OF SUCCESS FROM 35 years" },
    { img: cup, title: "EXCEPTIONAL COMPETITION READINESS" },
    { img: picture_4, title: "SUCCESSFUL PEDAGOGY" },
  ];

  return (
    <div className={styles.courseFee}>
      <div className={styles.courseFeeDiv}>
        <span className={styles.contentTitle}>course fees</span>
        <div className={styles.feeContentDiv}>
          <div className={styles.left}>
            <PiMapPinSimpleFill />
            <select name="centre select" id="">
              <option value="Select Centre">Select Centre</option>
              <option value="Patna">Patna</option>
              <option value="Ranchi">Ranchi</option>
            </select>
          </div>
          <div className={styles.right}>
            <div className={styles.feeAmount}>
              <h2>
                COST <span>INR</span>
              </h2>
              <h3>Excluded GST*</h3>
            </div>
            <div className={styles.feeDetails}>
              Scholarships upto 100% available
            </div>
          </div>
        </div>
      </div>
      <div className={styles.whyContainer}>
        <h1>
          Why <span>CUET+ PLUS</span>
        </h1>
        <div className={styles.whyContent}>
          {whyData.map((item, index) => (
            <div className={styles.whyItem} key={index}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseFee;

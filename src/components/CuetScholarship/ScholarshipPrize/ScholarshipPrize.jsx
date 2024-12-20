import React from "react";
import { Link } from "react-router-dom";
import green_tick from "../../../assets/green-tick.svg";
import scpdf from "../../../assets/scpdf.svg";
import upto100 from "../../../assets/upto100.svg";
import worth_sc from "../../../assets/worth_sc.svg";
import styles from "./ScholarshipPrize.module.css";

function ScholarshipPrize() {
  const prizeData = [
    { img: upto100, title: "Up to 100% Fee-waiver" },
    { img: scpdf, title: "Free CUET sample paper PDF worth ₹999/-" },
    { img: worth_sc, title: "Free CUET Previous Year Paper PDF worth ₹249" },
  ];
  return (
    <div className={styles.scholarshipPrize}>
      <div className={styles.prizeText}>
        <h2 className={styles.heading}>
          Your Talent Deserves to Shine– We’re Here to Make It Happen From
        </h2>
        <div className={styles.prizeContainer}>
          <div className={styles.prizeItem}>
            {prizeData.map((prize, index) => (
              <div
                className={`${styles.item} ${
                  index === 0 || index === 1 ? styles.size : ""
                }`}
                key={index}
              >
                <img src={prize.img} alt={prize.title} />
                <h3>{prize.title}</h3>
              </div>
            ))}
            {/* <a href="tel:+917428989898">
              <img src={talk_faculty} alt="cuet plus call" />
              <div className={styles.aText}>
                <h4>Talk to Our Counsellor</h4>
                <p>
                  For your best CUET Preparation talk to our <br /> expert who
                  guide you how to crack your exam.
                </p>
                <p>
                  Call - <span>+91 74289 89898</span>
                </p>
              </div>
            </a> */}
            <ul className={styles.list}>
              <h3 className={styles.listTitle}>Who Can Apply?</h3>
              <li className={styles.listItem}>Class 12 Students: Preparing for boards and CUET.</li>
              <li className={styles.listItem}>Droppers: Re-attempting CUET for improved results.</li>
              <li className={styles.listItem}>CUET Enthusiasts: Seeking financial support to pursue high-quality coaching.</li>
            </ul>
          </div>
          <div className={styles.highlights}>
            <h3>Key Highlights</h3>
            <div className={styles.highlightItem}>
              <img src={green_tick} alt="green tick" />
              <p>15-Minutes Online Scholarship Test</p>
            </div>
            <div className={styles.highlightItem}>
              <img src={green_tick} alt="green tick" />
              <p>TestDate: 25th December 2024</p>
            </div>
            <div className={styles.highlightItem}>
              <img src={green_tick} alt="green tick" />
              <p>Time: 10:00 AM (IST)</p>
            </div>
            <div className={styles.highlightItem}>
              <img src={green_tick} alt="green tick" />
              <p>Mode: Online (Attend from the comfort of your home)</p>
            </div>
            <Link to="/scholarship-form">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipPrize;

import React from "react";
import styles from "./FranchiseeProcess.module.css"; // Import the CSS Module

function FranchiseeProcess() {
  return (
    <div className={styles.FranchiseeProcess}>
      <div className={styles.heading}>
        <h2>Application Procedure for Becoming a CUET+ PLUS Franchisee</h2>
        <p>How to Get Started as a CUET+ PLUS Franchisee?</p>
      </div>
      <div className={styles.processList}>
        {[
          {
            id: "01",
            title: "Download the brochure",
            desc: "Get your copy of our franchisee brochure which further elaborates the CUET+ PLUS franchise business model.",
          },
          {
            id: "02",
            title: "Go through the CUET+ PLUS Biz Partner model",
            desc: "Explore our brochure and watch the testimonials of our biz partners to understand the franchise business model and its effectiveness",
          },
          {
            id: "03",
            title: "Discuss with a CUET+ PLUS representative",
            desc: "Our team will contact you on your number to discuss your interest and the partnership possibilities",
          },
          {
            id: "04",
            title: "Schedule an in-person visit",
            desc: "Block a date for your visit to our CUET+ PLUS Head Office in New Delhi to discuss your franchise business plan further.",
          },
          {
            id: "05",
            title: "Review the Service Partner Agreement",
            desc: "You shall receive a service partner agreement upon successfully submitting the required documents",
          },
          {
            id: "06",
            title: "Meet CUET+ PLUS's Founders",
            desc: "Share your vision, discuss strategy, plan the execution and get a green-signal to start with a bang.",
          },
        ].map((item) => (
          <div className={styles.processItem} key={item.id}>
            <div className={styles.processItemTitle}>
              <span>{item.id}</span>
              <h3>{item.title}</h3>
            </div>
            <div className={styles.processItemDesc}>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FranchiseeProcess;

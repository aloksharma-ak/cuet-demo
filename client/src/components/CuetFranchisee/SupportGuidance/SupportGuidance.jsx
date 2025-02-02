import React from "react";
import styles from "./SupportGuidance.module.css"; // Import the CSS module
import market_support from "../../../assets/market-support.png";
import { FaCheck } from "react-icons/fa";

function SupportGuidance() {
  return (
    <div className={styles.support_guidance_container}>
      <h2 className={styles.heading}>CUETPLUS Franchise: Go-to-Market Support and Guidance</h2>
      <div className={styles.top_content}>
        <div className={styles.card}>
          <h3>What We Provide</h3>
          <ul>
            {[
              "Global brand",
              "Technical Know-how",
              "Methodology - Unique and time-tested",
              "Assistance in formulating a business plan",
              "On-going technical and sales support",
              "Project start-up and on-going guidance",
              "Training and retraining",
            ].map((item, index) => (
              <li key={index}>
                <div className={styles.icon}>
                  <FaCheck />
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={market_support}
          alt="market support"
          className={styles.market_support}
        />
        <div className={styles.card}>
          <h3>What We Expect from You</h3>
          <ul>
            {[
              "Infrastructure",
              "Recruitment of manpower",
              "Initial and on-going investments",
              "Center operations and management",
              "Marketing and sales operations",
              "Permission from local authorities",
              "Adherence to CL norms and processes",
            ].map((item, index) => (
              <li key={index}>
                <div className={styles.icon}>
                  <FaCheck />
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottom_content}>
        {[
          {
            id: "1",
            title: "Pre-Launch",
            d1: "Premise Selection assistance",
            d2: "Centre Layout approval",
            d3: "Assistance in Recruitment & Selection of the Centre Manpower",
            d4: "Training of the Centre Manpower",
            d5: "Inspection of Infrastructure",
            d6: "Student Fees Finalization",
          },
          {
            id: "2",
            title: "Launch",
            d1: "Prepare Media Campaigns",
            d2: "Publicity Planning",
            d3: "Plan Centre Launch activities",
          },
          {
            id: "3",
            title: "Post-Launch",
            d1: "Support Visits",
            d2: "Meetings with Schools & Colleges",
            d3: "Participation in Major Events",
            d4: "Quarterly Review & Planning Meetings",
            d5: "Sales, Marketing & Technical Trainings",
          },
        ].map((item, index) => (
          <div key={index} className={styles.card2}>
            <div className={styles.head}>
                <div className={styles.circle}>{item.id}</div>
                <h3>{item.title}</h3>
            </div>
            <ul>
              {[item.d1, item.d2, item.d3, item.d4, item.d5, item.d6].map(
                (item, index) => (
                  <li key={index}>
                    <div className={styles.icon}>
                      {item && <FaCheck />}
                    </div>
                    <p>{item}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportGuidance;

import React from "react";
import styles from "./OnlineServices.module.css";
import onlineBgImg from "../../../assets/onlineBgImg.jpg";
import classicIcon1 from "../../../assets/classicIcon1.png";
import classicIcon2 from "../../../assets/classicIcon2.png";
import classicIcon3 from "../../../assets/classicIcon3.png";
import classicIcon4 from "../../../assets/classicIcon4.png";
import classicIcon6 from "../../../assets/classicIcon6.png";
import classicIcon8 from "../../../assets/classicIcon8.png";
import onlineSlideImg from "../../../assets/onlineSideImg.png";

function OnlineServices() {
  const services = [
    {
      img: classicIcon1,
      title: "Online Live Classes",
      desc: "Esteemed Faculty who have mentored Toppers",
    },
    {
      img: classicIcon2,
      title: "Recorded HD Videos",
      desc: "Introductory and Advanced Modules",
    },
    {
      img: classicIcon3,
      title: "Best Practice & Study Material",
      desc: "Unlimited Quizzes, Mock Tests & PDF Notes with Study Material",
    },
    {
      img: classicIcon4,
      title: "Monthly Performance and Doubt Clearing",
      desc: "As per student request",
    },
    {
      img: classicIcon6,
      title: "Weekly Test",
      desc: "Descriptive Test (Online)",
    },
    { img: classicIcon8, title: "Monthly Exams", desc: "Online" },
  ];

  return (
    <div className={styles.onlineServices}>
      <img src={onlineBgImg} alt="Online Overlay Background" />
      <div className={styles.onlineServicesContent}>
        <h2>How it works</h2>
        <div className={styles.boxList}>
          {services.map((service, index) => (
            <div key={index} className={styles.box}>
              <img src={service.img} alt="classicIcon" />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <img src={onlineSlideImg} alt="slideImg" className={styles.slideImg} />
      </div>
    </div>
  );
}

export default OnlineServices;

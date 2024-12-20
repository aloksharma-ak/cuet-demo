import React from "react";
import styles from "./OfflineCenters.module.css";
import patna_img from "../../../assets/pATNA.png";
import jaipur_img from "../../../assets/jAIPUR.png";
import uttarPradesh_img from "../../../assets/lUCKNOW.png";
import punjab_img from "../../../assets/pUNJAB.png";
import delhi_img from "../../../assets/Delhi.avif";
import haryana_img from "../../../assets/gURUGRAM.png";
import kolkata_img from "../../../assets/kOLKATA.png";
import ranchi_img from "../../../assets/rANCHI.png";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

function OfflineCenters() {
  const cardArray = [
    { img: delhi_img, add_1: "Delhi", add_2: "New Delhi" },
    { img: haryana_img, add_1: "Haryana", add_2: "Gurgaon" },
    { img: uttarPradesh_img, add_1: "Uttar Pradesh", add_2: "Lucknow" },
    { img: punjab_img, add_1: "Punjab", add_2: "Chandigarh" },
    { img: jaipur_img, add_1: "Rajasthan", add_2: "Jaipur" },
    { img: patna_img, add_1: "Bihar", add_2: "Patna" },
    { img: ranchi_img, add_1: "Jharkhand", add_2: "Ranchi" },
    { img: kolkata_img, add_1: "West Bengal", add_2: "Kolkata" },
  ];

  const animationSpring = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className={styles.menuDrop}>
      <animated.div
        style={animationSpring}
        className={styles.menuDropContainer}
      >
        <div className={styles.menuDropLeft}>
          <h2>Offline Centers Partner With Us</h2>
          <Link to={"/become-a-partner"}>
            <button className={`${styles.btnYellow} ${styles.btnOffline}`}>
              Partner With Us
            </button>
          </Link>
        </div>
        <div className={styles.menuDropRight}>
          <div className={styles.twoCard}>
            <CenterCard cardArray={cardArray[0]} link="/best-cuet-coaching-in-Delhi"/>
            <CenterCard cardArray={cardArray[1]} link="/best-cuet-coaching-in-Gurgaon"/>
          </div>
          <div className={styles.oneCard}>
            <CenterCard cardArray={cardArray[2]} link=""/>
          </div>
          <div className={styles.threeCard}>
            <div className={styles.threeCard1}>
              <CenterCard cardArray={cardArray[3]} link=""/>
            </div>
            <div className={styles.threeCard2}>
              <CenterCard cardArray={cardArray[4]} link=""/>
            </div>
            <div className={styles.threeCard3}>
              <CenterCard cardArray={cardArray[5]} link=""/>
            </div>
          </div>
          <div className={styles.twoCard}>
            <CenterCard cardArray={cardArray[6]} link=""/>
            <CenterCard cardArray={cardArray[7]} link=""/>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default OfflineCenters;

const CenterCard = ({ cardArray, link }) => (
  <Link to={link} className={styles.CardLink}>
    <div className={styles.offlineCard}>
      <img src={cardArray.img} alt="patna-img" />
      <span className={styles.location}>
        <h3>{cardArray.add_1}</h3>
        <p>{cardArray.add_2}</p>
      </span>
    </div>
  </Link>
);

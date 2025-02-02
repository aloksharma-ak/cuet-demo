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
    {
      img: delhi_img,
      add_1: "Delhi",
      add_2: "New Delhi",
      url: "/centers/best-cuet-coaching-in-delhi",
    },
    {
      img: haryana_img,
      add_1: "Haryana",
      add_2: "Gurgaon",
      url: "/centers/best-cuet-coaching-in-haryana",
    },
    {
      img: uttarPradesh_img,
      add_1: "Uttar Pradesh",
      add_2: "Lucknow",
      url: "/centers/best-cuet-coaching-in-uttar-pradesh",
    },
    { img: punjab_img, add_1: "Punjab", add_2: "Chandigarh", url: "/centers/best-cuet-coaching-in-punjab" },
    {
      img: jaipur_img,
      add_1: "Rajasthan",
      add_2: "Jaipur",
      url: "/centers/best-cuet-coaching-in-rajsthan",
    },
    {
      img: patna_img,
      add_1: "Bihar",
      add_2: "Patna",
      url: "/centers/best-cuet-coaching-in-bihar",
    },
    {
      img: ranchi_img,
      add_1: "Jharkhand",
      add_2: "Ranchi",
      url: "/centers/best-cuet-coaching-in-jharkhand",
    },
    {
      img: kolkata_img,
      add_1: "West Bengal",
      add_2: "Kolkata",
      url: "/centers/best-cuet-coaching-in-west-bengal",
    },
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
            <CenterCard cardArray={cardArray[0]} />
            <CenterCard cardArray={cardArray[1]} />
          </div>
          <div className={styles.oneCard}>
            <CenterCard cardArray={cardArray[2]} />
          </div>
          <div className={styles.threeCard}>
            <div className={styles.threeCard1}>
              <CenterCard cardArray={cardArray[3]} />
            </div>
            <div className={styles.threeCard2}>
              <CenterCard cardArray={cardArray[4]} />
            </div>
            <div className={styles.threeCard3}>
              <CenterCard cardArray={cardArray[5]} />
            </div>
          </div>
          <div className={styles.twoCard}>
            <CenterCard cardArray={cardArray[6]} />
            <CenterCard cardArray={cardArray[7]} />
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default OfflineCenters;

const CenterCard = ({ cardArray }) => (
  <Link to={cardArray.url} className={styles.CardLink}>
    <div className={styles.offlineCard}>
      <img src={cardArray.img} alt="patna-img" />
      <span className={styles.location}>
        <h3>{cardArray.add_1}</h3>
        <p>{cardArray.add_2}</p>
      </span>
    </div>
  </Link>
);

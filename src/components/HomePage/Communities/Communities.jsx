import React from "react";
import styles from "./Communities.module.css"; // Import the CSS module
import community_pic from "../../../assets/community-pic.webp";
import insta from "../../../assets/insta.png";
import youtube from "../../../assets/youtube.png";
import whatsapp from "../../../assets/whatsapp.png";
import telegram from "../../../assets/telegram.png";

const social_media = [insta, youtube, whatsapp, telegram];

function Communities() {
  return (
    <div className={styles.communities}>
      <h1>Help us building Largest CAT Communities</h1>
      <div className={styles.imgBox}>
        <div className={styles.img}>
          <img src={community_pic} alt="" />
          <div className={styles.linkImg}>
            <a href="#" className={styles.btnWhite}>Aspirants: 3,17,000+</a>
            <a href="#" className={styles.btnYellow}>JOIN NOW</a>
          </div>
        </div>
        <div className={styles.socialMedia}>
          {social_media.map((icon, index) => (
            <div className={styles.iconBox} key={index}>
              <img src={icon} alt="" />
              <a href="#">join now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Communities;

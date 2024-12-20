import React from "react";
import styles from './MapSection.module.css'; // Import the CSS Module
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaQuora } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";

function MapSection() {
  return (
    <div className={styles.MapSection}>
        <h2>CUET+ <span>Head Office</span></h2>
      <div className={styles.addressMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101304.27505937488!2d87.25747650030164!3d25.262878303651487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1728275278028!5m2!1sen!2sin"
          width="550"
          height="260"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.addressText}>
            <h3>CUETPlus EDU Services pvt ltd</h3>
            <p>374, MG Road, South Delhi, New Delhi (IN)-110030</p>
            <a href="tel:+91 74289 89898"><span>Tel No.: </span>+91 74289 89898</a>
            {/* <a href="tel:+91 74289 89898"><span>Fax No. </span>+91 74289 89898</a> */}
            <a href="mailto:cuetplus@gmail.com"><span>Email: </span>cuetplus@gmail.com</a>
            <div className={styles.socialMedia}>
                <h4>Follow us on <span>Social Media</span></h4>
                <div className={styles.socialLinks}>
                    <a href=""><FiFacebook /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><SlSocialLinkedin /></a>
                    <a href=""><FaQuora /></a>
                    <a href=""><FaXTwitter /></a>
                    <a href=""><PiYoutubeLogo /></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MapSection;

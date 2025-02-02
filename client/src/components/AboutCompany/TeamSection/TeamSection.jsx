import React from "react";
import styles from "./TeamSection.module.css";
import anish from "../../../assets/anish.jpg";
import nikita from "../../../assets/nikita.jpg";
import pragati from "../../../assets/pragati.jpg";
import piyush from "../../../assets/piyush.jpg";
import ritik from "../../../assets/ritik.jpg";

const TeamSection = () => {
  return (
    <div className={styles.TeamSection}>
      {/* Mobile Image Container */}
      <div className={styles.mobileImgContainer}>
        <div className={styles.col}>
          <img
            src={piyush}
            className={styles.mobileImg}
            alt="Piyush"
            loading="lazy"
          />

          <img
            src={ritik}
            className={styles.mobileImg}
            alt="Ritik Kumar"
            loading="lazy"
          />
        </div>
        <div className={styles.col}>
          <img
            src={pragati}
            className={styles.mobileImg}
            alt="Pragati"
            loading="lazy"
          />
          <img
            src={nikita}
            className={styles.mobileImg}
            alt="Nikita Mehto"
            loading="lazy"
          />
          <img
            src={anish}
            className={styles.mobileImg}
            alt="Anish Tigga"
            loading="lazy"
          />
        </div>
      </div>
      {/* Left Section */}
      <div className={styles.left}>
        <div className={styles.leftImg}>
          <img src={nikita} className={styles.img} alt="Nikita Mehto" />
          <img
            src={anish}
            className={styles.img}
            alt="Anish Tigga"
            style={{ objectPosition: "top" }}
            loading="lazy"
          />
        </div>
        <h2 className={styles.leftTitle}>MEET THE MINDS BEHIND</h2>
        <p className={styles.description}>
          The success of CUETPlus is driven by a passionate team of educators
          and visionaries dedicated to empowering students on their journey to
          top universities. Founded by Mr. Anand Jha alongside Pragati Daga,
          Soumya Singh, Piyush Jaiswal, Anish Tigga, Nikita Mehto, Suman Tigga,
          and Rttik Kumar, CUET Plus was established with a mission to reshape
          the CUET preparation landscape by delivering high-quality education
          and accessible resources.
        </p>
        <p className={styles.description}>
          Each team member brings unique expertise, from academic excellence to
          strategic program development, ensuring CUETPlus remains at the
          forefront of CUET coaching. Their commitment to innovative,
          student-centered learning has transformed CUET Plus into India's
          leading CUET preparation platform, where every student's potential is
          nurtured and celebrated.
        </p>
        <h3 className={styles.leftSubTitle}>
          CUETPlus Founders & Management — building futures, one student at a
          time.
        </h3>
        <div className={styles.leftCulture}>
          <img
            src="https://images.unsplash.com/photo-1569210538317-4d53f92a0e21?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className={styles.img}
            alt="Alok Sharma"
            loading="lazy"
          />
          <div className={styles.leftCultureText}>
            <h3 className={styles.leftCultureTitle}>Team Culture</h3>
            <p className={styles.leftCultureDescription}>
              At CUET Plus, we foster a collaborative and supportive work
              environment, where every team member is committed to student
              success. Our team is composed of passionate educators, dedicated
              support staff, and innovative thinkers who share a common goal of
              delivering the best CUET preparation experience. We encourage
              continuous learning and professional development to keep our team
              at the forefront of the industry.
            </p>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className={styles.right}>
        <img
          src={pragati}
          className={styles.img}
          alt="Pragati"
          loading="lazy"
        />
        <div className={styles.rightImg}>
          <img
            src={piyush}
            className={styles.img}
            alt="Piyush"
            loading="lazy"
          />
          <img
            src={ritik}
            className={styles.img}
            alt="Ritik Kumar"
            loading="lazy"
          />
        </div>
        {/* Call to Action */}
        <div className={styles.callToAction}>
          <h5 className={styles.callToActionTitle}>Work With Us</h5>
          <h2 className={styles.callToActionSunTitle}>
            JOIN US AND MAKE A DIFFERENCE
          </h2>
          <div
            className={`${styles.leftCultureText} ${styles.mobileLeftCultureText}`}
          >
            <h3 className={styles.leftCultureTitle}>Team Culture</h3>
            <p className={styles.leftCultureDescription}>
              At CUET Plus, we foster a collaborative and supportive work
              environment, where every team member is committed to student
              success. Our team is composed of passionate educators, dedicated
              support staff, and innovative thinkers who share a common goal of
              delivering the best CUET preparation experience. We encourage
              continuous learning and professional development to keep our team
              at the forefront of the industry.
            </p>
          </div>
          <button className={styles.btn}>
            Explore open positions and start your journey with us today!
          </button>
          <button className={styles.joinNow}>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

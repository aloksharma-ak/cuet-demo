import React from "react";
import styles from "./ScholarshipBenefit.module.css";
// import img_bg from "../../../assets/earth_demo_scholarship_img.avif";
// import { MdEmojiEmotions } from "react-icons/md";
// import { AiOutlineStock } from "react-icons/ai";
// import program_img from "../../../assets/scholarship_bg_progam_img.avif";
// import { IoIosArrowRoundForward } from "react-icons/io";

const ScholarshipBenefit = () => {
  return (
    <>
      {/* <section className={styles.ScholarshipBenefit}>
        <div className={styles.left}>
          <img src={img_bg} className={styles.image} alt="" />
          <div className={styles.leftDiv}>
            <div className={styles.leftDivIcon}>
              <MdEmojiEmotions />
            </div>
            <div className={styles.leftDivText}>
              <h3 className={styles.leftDivTextTitle}>14.75 LAC</h3>
              <p className={styles.leftDivTextDesc}>
                Total Students Approved so far
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.rightTitle}>
            SCHOLARPLUS 2025 <br />
            <span>Unique Benefits</span>
          </h1>
          <p className={styles.rightDesc}>
            ScholarPlus is more than just financial support—it’s an opportunity
            to access premium education from one of India’s top CUET coaching
            institutes. With ScholarPlus, you can benefit from
          </p>
          <div className={styles.rightDiv}>
            <ul>
              <li className={styles.rightDivList}>
                <span>Unmatched Financial Support:</span>From high school to
                college, ScholarPlus supports students through each phase,
                ensuring financial hurdles don’t stand in the way of success.
              </li>
              <li className={styles.rightDivList}>
                <span>Student-Centered Benefits:</span>We recognize and reward
                student effort at every level, making CUET Plus an affordable
                pathway to success.
              </li>
             
              <li className={styles.rightDivList}>
                <span>Nationwide Accessibility:</span>Our scholarships are open
                to students across India, ensuring equal opportunity for
                aspiring candidates from all backgrounds.
              </li>
              <li className={styles.rightDivList}>
                <span>Simplified Application Process:</span>Applying for
                ScholarPlus is straightforward, making it easy for students and
                parents to take the first step toward quality education.
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      <section className={styles.ScholarshipProgram}>
        <div className={styles.rightProgram}>
          <h3 className={styles.rightProgramSubTitle}>Know about</h3>
          <h2 className={styles.rightProgramTitle}>What is ScholarPlus?</h2>
          <p className={styles.rightProgramDesc}>
            The ScholarPlus Program by CUET Plus is designed to offer ambitious
            students and their families financial support that opens doors to
            top-tier education and the best possible university placements.
            Whether you’re just beginning your academic journey in high school
            or solely focusing on CUET, the ScholarPlus Program has a
            scholarship path tailored to fit your needs. With three distinctive
            scholarship options—Spark, Shine, and Star—the
            program is structured to provide targeted financial aid,
            comprehensive tuition coverage, and exclusive perks to support your
            journey from the classroom to campus.
          </p>
          {/* <div className={styles.rightProgramBtn}>
            Know more about us <IoIosArrowRoundForward />
          </div> */}
          <div className={styles.buttonList}>
            {[
              "Full and partial tuition fee waivers",
              "Coverage for application and admission fees",
              "Merit-based rewards and need-based assistance.",
            ].map((btn, index) => (
              <div className={styles.button} key={index}>
                {btn}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipBenefit;

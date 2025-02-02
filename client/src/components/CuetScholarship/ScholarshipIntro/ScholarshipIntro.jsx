import React from "react";
import styles from "./ScholarshipIntro.module.css";
import img from "../../../assets/ScholarshipProgram.png";

function ScholarshipIntro() {
  const inputAttributes = {
    type: "tel",
    placeholder: "Enter your phone number",
    maxLength: 15,
    minLength: 10,
    pattern: "[0-9]{10,15}",
    required: true,
    name: "phoneNumber",
    onChange: (event) => {
      console.log("Phone Number Input Changed:", event.target.value);
    },
  };
  return (
    <section className={styles.ScholarshipTypes}>
      <div className={styles.topSection}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
          Empowering Dreams with Scholarships
          </h2>
          <h2 className={styles.subHeading}>
          Your Gateway to Top Colleges –
          100% Education Cost Covered!
          </h2>
          {/* <p className={styles.textDesc}>
            A program designed to help bright, ambitious students achieve their
            academic dreams without financial barriers. Whether you’re preparing
            for the CUET, in Class 11 or 12, or are a dedicated dropper aiming
            for excellence
          </p> */}
        </div>
        <div className={styles.image}><img src={img} alt="Scholarship" /></div>
        {/* <div className={styles.registerForm}>
          <h1 className={styles.registerHeading}>Register Now</h1>
          <p className={styles.registerText}>Take the first step toward your dream university today!</p>
          <input {...inputAttributes} className={styles.input} />
          <button type="submit" className={styles.buttonForm}>Verify</button>
        </div> */}
      </div>
    </section>
  );
}

export default ScholarshipIntro;

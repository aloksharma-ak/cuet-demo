import React from "react";
import styles from "./ScholarshipCallToAction.module.css";
import { useNavigate } from "react-router-dom";

const ScholarshipCallToAction = ({
  title,
  icon,
  icon2,
  iconText,
  iconText2,
  desc,
  btn,
}) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/scholarship-form");
  };

  return (
    <div className={styles.callToAction}>
      <div className={styles.leftSection}>
        {title && <h3 className={styles.testDate}>{title}</h3>}
        {iconText && (
          <p className={styles.details}>
            <div>
              <span className={styles.icon}>{icon}</span> {iconText}&nbsp;&nbsp;
            </div>
            <div>
              <span className={styles.icon}>{icon2}</span> {iconText2}
            </div>
          </p>
        )}
        {desc && <p className={styles.details}>{desc}</p>}
      </div>
      <div className={styles.rightSection} onClick={handleRedirect}>
        <button className={styles.registerButton}>{btn}</button>
      </div>
    </div>
  );
};

export default ScholarshipCallToAction;

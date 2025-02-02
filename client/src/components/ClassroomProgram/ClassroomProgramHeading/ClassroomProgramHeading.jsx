import React from "react";
import styles from "./ClassroomProgramHeading.module.css";

function ClassroomProgramHeading({ heading }) {
  return (
    <div className={styles.classroomProgramHeading}>
      <h1>
        {heading}
        <sup>th</sup>
      </h1>
      <h2>for JEE (Main & Advanced)</h2>
    </div>
  );
}

export default ClassroomProgramHeading;

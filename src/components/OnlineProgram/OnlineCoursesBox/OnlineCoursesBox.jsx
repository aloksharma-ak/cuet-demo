import React from "react";
import styles from "./OnlineCoursesBox.module.css";

function OnlineCoursesBox() {
  const coursesData = ["Mathematics", "Physics", "Chemistry", "General Science"];
  return (
    <div className={styles.onlineCourses}>
      <h2>
        Subject <span>combinations include</span>
      </h2>
      <div className={styles.boxList}>
        {coursesData.map((course, index) => (
          <div key={index} className={styles.box}>
            <h3>{course}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnlineCoursesBox;

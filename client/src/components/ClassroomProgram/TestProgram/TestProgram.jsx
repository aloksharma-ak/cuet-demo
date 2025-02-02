import React from "react";
import styles from "./TestProgram.module.css";

function TestProgram({ testData }) {
  return (
    <div className={styles.testProgram}>
      <div className={styles.testProgramDiv}>
        <span className={styles.contentTitle}>Tests Throughout the Program</span>
        <div className={styles.testProgramContainer}>
          {testData.map((data, index) => (
            <div className={styles.testItem} key={index}>
              <span className={styles.testNo}>{data.no}</span>
              <div className={styles.testTitle}>
                <h3>{data.title}</h3>
                {data.desc && <p>{data.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestProgram;

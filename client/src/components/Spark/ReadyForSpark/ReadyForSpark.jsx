import React from "react";
import styles from "./ReadyForSpark.module.css";
import SparkCardOverlay from "../SparkCardOverlay/SparkCardOverlay";
import SparkProgram from "../SparkProgram/SparkProgram";
import SparkClassRoomProgram from "../SparkClassRoomProgram/SparkClassRoomProgram";
import SparkFeatures from "../SparkFeatures/SparkFeatures";
import SparkProgramStructure from "../SparkProgramStructure/SparkProgramStructure";


const ReadyForSpark = ({
  heading,
  overlayData,
  programData,
  classroomProgramData,
  keyFeaturesData,
  programStructureData,
}) => {
  return (
    <section className={styles.ReadyForSpark}>
      <div className={styles.container}>
        <div className={styles.description}>{heading.desc}</div>
        <div>
          <SparkCardOverlay {...overlayData} />
        </div>
        <div id="know-more">
          <SparkProgram {...programData} />
        </div>
        <div>
          <SparkClassRoomProgram {...classroomProgramData} />
        </div>
      </div>
      <div className={styles.floatingFeatures}>
        <SparkFeatures {...keyFeaturesData} />
      </div>
      <div className={styles.programStructure}>
        <SparkProgramStructure {...programStructureData} />
      </div>
    </section>
  );
};

export default ReadyForSpark;

import React from "react";
import PropTypes from "prop-types";
import styles from "./SparkProgram.module.css";
import { Link } from "react-router-dom";

const SparkProgram = ({ title, description, extraDescription, buttonText, buttonLink }) => {
  return (
    <div className={styles.SparkProgram}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        {extraDescription && <p className={styles.description}>{extraDescription}</p>}
        {buttonText && buttonLink && (
          <Link to={buttonLink} className={styles.btn}>
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

SparkProgram.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  extraDescription: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default SparkProgram;

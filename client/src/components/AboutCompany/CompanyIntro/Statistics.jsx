import React from "react";
import { useSpring, animated } from "@react-spring/web";
// import "./Statistics.css";
import styles from "./Statistics.module.css";

// Component to animate the number counter
const AnimatedCounter = ({ target }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: target,
    delay: 200,
    config: { tension: 200, friction: 10 },
  });

  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
};

const Statistics = () => {
  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.statItem}>
        <h2><AnimatedCounter target={12} />+</h2>
        <p>Years of teaching</p>
      </div>
      <div className={styles.statItem}>
        <h2><AnimatedCounter target={30} />K+</h2>
        <p>Students mentored</p>
      </div>
      <div className={styles.statItem}>
        <h2><AnimatedCounter target={100} />+</h2>
        <p>Top-notch faculty</p>
      </div>
    </div>
  );
};

export default Statistics;
